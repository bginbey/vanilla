import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('accepts user input', async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Enter text" />);
    
    const input = screen.getByPlaceholderText('Enter text') as HTMLInputElement;
    await user.type(input, 'Hello world');
    
    expect(input.value).toBe('Hello world');
  });

  it('renders different input types', () => {
    const { rerender } = render(<Input type="email" placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email');
    
    rerender(<Input type="number" placeholder="Number" />);
    expect(screen.getByPlaceholderText('Number')).toHaveAttribute('type', 'number');
    
    rerender(<Input type="password" placeholder="Password" />);
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password');
  });

  it('applies variant styles', () => {
    const { rerender } = render(<Input variant="outline" placeholder="Outline" />);
    expect(screen.getByPlaceholderText('Outline')).toHaveClass(/outline/);
    
    rerender(<Input variant="filled" placeholder="Filled" />);
    expect(screen.getByPlaceholderText('Filled')).toHaveClass(/filled/);
    
    rerender(<Input variant="unstyled" placeholder="Unstyled" />);
    expect(screen.getByPlaceholderText('Unstyled')).toHaveClass(/unstyled/);
  });

  it('shows error state', () => {
    render(<Input error placeholder="Error input" />);
    expect(screen.getByPlaceholderText('Error input')).toHaveClass(/error/);
  });

  it('handles disabled state', () => {
    render(<Input disabled placeholder="Disabled input" />);
    expect(screen.getByPlaceholderText('Disabled input')).toBeDisabled();
  });

  it('applies full width', () => {
    render(<Input fullWidth placeholder="Full width" />);
    expect(screen.getByPlaceholderText('Full width')).toHaveClass(/fullWidth/);
  });

  it('forwards ref', () => {
    const ref = jest.fn();
    render(<Input ref={ref} placeholder="With ref" />);
    expect(ref).toHaveBeenCalled();
  });

  it('accepts custom className', () => {
    render(<Input className="custom-class" placeholder="Custom class" />);
    expect(screen.getByPlaceholderText('Custom class')).toHaveClass('custom-class');
  });

  it('passes through native input props', () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    
    render(
      <Input
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={10}
        required
        placeholder="Native props"
      />
    );
    
    const input = screen.getByPlaceholderText('Native props');
    expect(input).toHaveAttribute('maxLength', '10');
    expect(input).toHaveAttribute('required');
  });
});