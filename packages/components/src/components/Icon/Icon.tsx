import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { iconBase, iconSizes, iconColors } from './Icon.css';
import { useIconConfig } from './IconProvider';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconColor = 
  | 'inherit' 
  | 'current' 
  | 'primary' 
  | 'secondary' 
  | 'tertiary'
  | 'error'
  | 'warning'
  | 'success'
  | 'info'
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IconProps {
  /**
   * The icon component to render
   * @example <Icon icon={IconHome} />
   */
  icon: React.ComponentType<{ 
    width?: number | string;
    height?: number | string;
    size?: number | string;
    color?: string;
    stroke?: number;
    className?: string;
    [key: string]: any;
  }>;
  
  /**
   * Size of the icon
   * @default 'md'
   */
  size?: IconSize | number | string;
  
  /**
   * Color of the icon
   * @default 'current'
   */
  color?: IconColor;
  
  /**
   * Stroke width for the icon (if supported by the icon set)
   */
  stroke?: number;
  
  /**
   * Accessible label for the icon
   */
  label?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Inline styles
   */
  style?: React.CSSProperties;
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ 
    icon: IconComponent, 
    size,
    color,
    stroke,
    label,
    className,
    style
  }, ref) => {
    const config = useIconConfig();
    
    // Use provider values as defaults
    const finalSize = size ?? config.size ?? 'md';
    const finalColor = color ?? config.color ?? 'current';
    const finalStroke = stroke ?? config.stroke;
    const finalClassName = clsx(config.className, className);
    // Determine if size is a preset or custom
    const isPresetSize = typeof finalSize === 'string' && finalSize in iconSizes;
    const isPresetColor = typeof finalColor === 'string' || typeof finalColor === 'number';
    
    // Calculate pixel size for the icon component
    const iconPixelSize = (() => {
      if (typeof finalSize === 'number') return finalSize;
      if (typeof finalSize === 'string' && !isPresetSize) return finalSize;
      
      // Convert preset sizes to pixels for the inner icon
      const sizeMap: Record<IconSize, number> = {
        xs: 12,
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      };
      return sizeMap[finalSize as IconSize];
    })();

    const iconElement = (
      <IconComponent 
        width={iconPixelSize}
        height={iconPixelSize}
        color="currentColor"
        stroke={finalStroke}
        className="icon-svg"
        aria-hidden="true"
      />
    );

    return (
      <span
        ref={ref}
        className={clsx(
          iconBase,
          isPresetSize && iconSizes[finalSize as IconSize],
          isPresetColor && iconColors[finalColor as keyof typeof iconColors],
          finalClassName
        )}
        style={{
          ...(!isPresetSize && {
            width: typeof finalSize === 'number' ? `${finalSize}px` : finalSize,
            height: typeof finalSize === 'number' ? `${finalSize}px` : finalSize,
          }),
          ...style,
        }}
        aria-label={label}
        aria-hidden={!label}
        role={label ? 'img' : undefined}
      >
        {iconElement}
      </span>
    );
  }
);

Icon.displayName = 'Icon';