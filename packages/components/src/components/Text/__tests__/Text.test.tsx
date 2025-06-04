import { render, screen } from '@testing-library/react';
import { Text } from '../Text';

describe('Text', () => {
  it('renders with children', () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders as span by default', () => {
    render(<Text data-testid="text">Content</Text>);
    expect(screen.getByTestId('text').tagName).toBe('SPAN');
  });

  it('renders as different element when as prop is used', () => {
    const { rerender } = render(
      <Text as="p" data-testid="text">
        Paragraph
      </Text>
    );
    expect(screen.getByTestId('text').tagName).toBe('P');

    rerender(
      <Text as="h1" data-testid="text">
        Heading
      </Text>
    );
    expect(screen.getByTestId('text').tagName).toBe('H1');
  });

  it('applies size variant', () => {
    const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'] as const;
    
    sizes.forEach(size => {
      render(<Text size={size} data-testid={`text-${size}`}>Text</Text>);
      expect(screen.getByTestId(`text-${size}`)).toHaveClass('mocked-recipe');
    });
  });

  it('applies weight variant', () => {
    const weights = ['normal', 'medium', 'semibold', 'bold'] as const;
    
    weights.forEach(weight => {
      render(<Text weight={weight} data-testid={`text-${weight}`}>Text</Text>);
      expect(screen.getByTestId(`text-${weight}`)).toHaveClass('mocked-recipe');
    });
  });

  it('applies color variant', () => {
    const colors = [
      'primary', 'secondary', 'tertiary', 'inverse',
      'brand', 'success', 'warning', 'error', 'info'
    ] as const;
    
    colors.forEach(color => {
      render(<Text color={color} data-testid={`text-${color}`}>Text</Text>);
      expect(screen.getByTestId(`text-${color}`)).toHaveClass('mocked-recipe');
    });
  });

  it('applies align variant', () => {
    const alignments = ['left', 'center', 'right'] as const;
    
    alignments.forEach(align => {
      render(<Text align={align} data-testid={`text-${align}`}>Text</Text>);
      expect(screen.getByTestId(`text-${align}`)).toHaveClass('mocked-recipe');
    });
  });

  it('applies truncate variant', () => {
    render(<Text truncate data-testid="text">Long text that should be truncated</Text>);
    expect(screen.getByTestId('text')).toHaveClass('mocked-recipe');
  });

  it('forwards ref', () => {
    const ref = jest.fn();
    render(<Text ref={ref}>Text</Text>);
    
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLSpanElement);
  });

  it('merges custom className', () => {
    render(<Text className="custom-class">Text</Text>);
    expect(screen.getByText('Text')).toHaveClass('mocked-recipe', 'custom-class');
  });

  it('passes through HTML attributes', () => {
    render(
      <Text data-testid="text" id="my-text" title="Tooltip text">
        Text
      </Text>
    );
    
    const text = screen.getByTestId('text');
    expect(text).toHaveAttribute('id', 'my-text');
    expect(text).toHaveAttribute('title', 'Tooltip text');
  });
});