import { render, screen } from '@testing-library/react';
import { Box } from '../Box';

describe('Box', () => {
  it('renders with children', () => {
    render(<Box>Content</Box>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders as div by default', () => {
    render(<Box data-testid="box">Content</Box>);
    expect(screen.getByTestId('box').tagName).toBe('DIV');
  });

  it('renders as different element when as prop is used', () => {
    render(
      <Box as="section" data-testid="box">
        Content
      </Box>
    );
    expect(screen.getByTestId('box').tagName).toBe('SECTION');
  });

  it('applies sprinkle props as classes', () => {
    render(
      <Box
        data-testid="box"
        p={4}
        m={2}
        display="flex"
        backgroundColor="primary"
      >
        Content
      </Box>
    );
    
    expect(screen.getByTestId('box')).toHaveClass('mocked-sprinkles');
  });

  it('forwards ref', () => {
    const ref = jest.fn();
    render(<Box ref={ref}>Content</Box>);
    
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLDivElement);
  });

  it('merges custom className', () => {
    render(
      <Box className="custom-class" p={4}>
        Content
      </Box>
    );
    
    expect(screen.getByText('Content')).toHaveClass('mocked-sprinkles', 'custom-class');
  });

  it('passes through non-sprinkle props', () => {
    render(
      <Box data-testid="box" aria-label="Test Box" role="region">
        Content
      </Box>
    );
    
    const box = screen.getByTestId('box');
    expect(box).toHaveAttribute('aria-label', 'Test Box');
    expect(box).toHaveAttribute('role', 'region');
  });

  it('handles responsive props', () => {
    render(
      <Box
        data-testid="box"
        p={{ mobile: 2, tablet: 4, desktop: 6 }}
        display={{ mobile: 'block', tablet: 'flex' }}
      >
        Content
      </Box>
    );
    
    expect(screen.getByTestId('box')).toHaveClass('mocked-sprinkles');
  });
});