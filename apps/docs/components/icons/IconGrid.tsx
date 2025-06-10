import React, { useState, useMemo } from 'react';
import { icons } from './iconData';
import { Toast } from '../Toast';

export function IconGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const filteredIcons = useMemo(() => {
    return icons.filter(icon => {
      const matchesSearch = icon.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [searchTerm]);

  const copyToClipboard = async (svg: string, name: string) => {
    try {
      await navigator.clipboard.writeText(svg);
      setCopiedIcon(name);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const iconsByCategory = useMemo(() => {
    const grouped: Record<string, typeof icons> = {};
    filteredIcons.forEach(icon => {
      if (!grouped[icon.category]) {
        grouped[icon.category] = [];
      }
      grouped[icon.category].push(icon);
    });
    return grouped;
  }, [filteredIcons]);

  return (
    <div style={{ marginTop: '2rem' }}>
      {/* Search */}
      <div style={{ 
        marginBottom: '2rem',
      }}>
        <input
          type="text"
          placeholder="Search icons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '0.5rem 1rem',
            fontSize: '14px',
            border: '1px solid var(--gray-6)',
            borderRadius: '6px',
            backgroundColor: 'var(--gray-1)',
            color: 'var(--gray-12)',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--gray-8)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--gray-6)'}
        />
      </div>

      {/* Icons Grid by Category */}
      {Object.entries(iconsByCategory).map(([category, categoryIcons]) => (
        <div key={category} style={{ marginBottom: '3rem' }}>
          <h3 style={{ 
            fontSize: '1.125rem', 
            fontWeight: 600,
            color: 'var(--gray-12)',
            marginBottom: '1rem' 
          }}>
            {category}
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '1rem',
          }}>
            {categoryIcons.map((icon) => (
              <IconCard
                key={icon.name}
                icon={icon}
                onCopy={copyToClipboard}
              />
            ))}
          </div>
        </div>
      ))}

      {filteredIcons.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem',
          color: 'var(--gray-11)'
        }}>
          No icons found matching &quot;{searchTerm}&quot;
        </div>
      )}

      {/* Toast Notification */}
      {copiedIcon && (
        <Toast
          message={`Copied ${copiedIcon} SVG to clipboard`}
          onClose={() => setCopiedIcon(null)}
        />
      )}
    </div>
  );
}

interface IconCardProps {
  icon: { name: string; svg: string };
  onCopy: (svg: string, name: string) => void;
}

function IconCard({ icon, onCopy }: IconCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => onCopy(icon.svg, icon.name)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '1rem',
        border: '1px solid',
        borderColor: isHovered ? 'var(--gray-7)' : 'var(--gray-6)',
        borderRadius: '8px',
        backgroundColor: isHovered ? 'var(--gray-2)' : 'var(--gray-1)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        outline: 'none',
        width: '100%',
      }}
    >
      <div 
        style={{ 
          width: '24px', 
          height: '24px',
          color: 'var(--gray-12)',
        }}
        dangerouslySetInnerHTML={{ __html: icon.svg }}
      />
      <span style={{ 
        fontSize: '12px',
        color: 'var(--gray-11)',
        fontWeight: 500,
      }}>
        {icon.name}
      </span>
    </button>
  );
}