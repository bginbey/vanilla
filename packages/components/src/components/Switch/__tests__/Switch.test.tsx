import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from '../Switch';

describe('Switch', () => {
  it('renders correctly', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Switch label="Enable notifications" />);
    expect(screen.getByLabelText('Enable notifications')).toBeInTheDocument();
    expect(screen.getByText('Enable notifications')).toBeInTheDocument();
  });

  it('can be toggled on and off', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(<Switch onChange={onChange} />);
    const switchElement = screen.getByRole('switch') as HTMLInputElement;
    
    expect(switchElement.checked).toBe(false);
    
    await user.click(switchElement);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(switchElement.checked).toBe(true);
    
    await user.click(switchElement);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(switchElement.checked).toBe(false);
  });

  it('applies size variants', () => {
    const { rerender } = render(<Switch size="sm" />);
    const switchContainer = screen.getByRole('switch').parentElement;
    expect(switchContainer).toHaveClass(/sm/);
    
    rerender(<Switch size="md" />);
    expect(switchContainer).toHaveClass(/md/);
    
    rerender(<Switch size="lg" />);
    expect(switchContainer).toHaveClass(/lg/);
  });

  it('shows error state', () => {
    render(<Switch error />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-invalid', 'true');
  });

  it('handles disabled state', () => {
    render(<Switch disabled label="Disabled switch" />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeDisabled();
  });

  it('can be controlled', () => {
    const { rerender } = render(<Switch checked={false} onChange={() => {}} />);
    const switchElement = screen.getByRole('switch') as HTMLInputElement;
    expect(switchElement.checked).toBe(false);
    
    rerender(<Switch checked={true} onChange={() => {}} />);
    expect(switchElement.checked).toBe(true);
  });

  it('forwards ref', () => {
    const ref = jest.fn();
    render(<Switch ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('accepts custom className', () => {
    render(<Switch className="custom-class" />);
    expect(screen.getByRole('switch')).toHaveClass('custom-class');
  });

  it('generates unique id when label is provided', () => {
    const { rerender } = render(<Switch label="First label" />);
    const firstId = screen.getByRole('switch').id;
    expect(firstId).toBeTruthy();
    
    rerender(<Switch label="Second label" />);
    const secondId = screen.getByRole('switch').id;
    expect(secondId).toBeTruthy();
    expect(secondId).not.toBe(firstId);
  });

  it('uses provided id over generated one', () => {
    render(<Switch id="custom-id" label="With custom ID" />);
    expect(screen.getByRole('switch')).toHaveAttribute('id', 'custom-id');
  });

  it('passes through native input props', () => {
    render(
      <Switch 
        name="notifications"
        value="on"
        required
        aria-describedby="help-text"
      />
    );
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('name', 'notifications');
    expect(switchElement).toHaveAttribute('value', 'on');
    expect(switchElement).toHaveAttribute('required');
    expect(switchElement).toHaveAttribute('aria-describedby', 'help-text');
  });

  it('can be clicked via label', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(<Switch label="Click me" onChange={onChange} />);
    const label = screen.getByText('Click me');
    
    await user.click(label);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('has proper ARIA role', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toHaveAttribute('type', 'checkbox');
  });
});