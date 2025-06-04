import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('can be checked and unchecked', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(<Checkbox onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    
    expect(checkbox.checked).toBe(false);
    
    await user.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(checkbox.checked).toBe(true);
    
    await user.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(checkbox.checked).toBe(false);
  });

  it('applies variant styles', () => {
    const { rerender } = render(<Checkbox />);
    const checkboxContainer = screen.getByRole('checkbox').parentElement;
    expect(checkboxContainer).toHaveClass(/default/);
    
    rerender(<Checkbox variant="rounded" />);
    expect(checkboxContainer).toHaveClass(/rounded/);
  });

  it('shows error state', () => {
    render(<Checkbox error />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });

  it('handles disabled state', () => {
    render(<Checkbox disabled label="Disabled checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('can be controlled', () => {
    const { rerender } = render(<Checkbox checked={false} onChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    
    rerender(<Checkbox checked={true} onChange={() => {}} />);
    expect(checkbox.checked).toBe(true);
  });

  it('forwards ref', () => {
    const ref = jest.fn();
    render(<Checkbox ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('accepts custom className', () => {
    render(<Checkbox className="custom-class" />);
    expect(screen.getByRole('checkbox')).toHaveClass('custom-class');
  });

  it('generates unique id when label is provided', () => {
    const { rerender } = render(<Checkbox label="First label" />);
    const firstId = screen.getByRole('checkbox').id;
    expect(firstId).toBeTruthy();
    
    rerender(<Checkbox label="Second label" />);
    const secondId = screen.getByRole('checkbox').id;
    expect(secondId).toBeTruthy();
    expect(secondId).not.toBe(firstId);
  });

  it('uses provided id over generated one', () => {
    render(<Checkbox id="custom-id" label="With custom ID" />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'custom-id');
  });

  it('passes through native input props', () => {
    render(
      <Checkbox 
        name="agreement"
        value="accepted"
        required
        aria-describedby="help-text"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('name', 'agreement');
    expect(checkbox).toHaveAttribute('value', 'accepted');
    expect(checkbox).toHaveAttribute('required');
    expect(checkbox).toHaveAttribute('aria-describedby', 'help-text');
  });

  it('can be clicked via label', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(<Checkbox label="Click me" onChange={onChange} />);
    const label = screen.getByText('Click me');
    
    await user.click(label);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});