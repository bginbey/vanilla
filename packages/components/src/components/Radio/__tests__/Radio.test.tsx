import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio } from '../Radio';

describe('Radio', () => {
  it('renders correctly', () => {
    render(<Radio />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Radio label="Option 1" />);
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('can be selected', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(
      <>
        <Radio name="test" value="1" onChange={onChange} label="Option 1" />
        <Radio name="test" value="2" onChange={onChange} label="Option 2" />
      </>
    );
    
    const radio1 = screen.getByLabelText('Option 1') as HTMLInputElement;
    const radio2 = screen.getByLabelText('Option 2') as HTMLInputElement;
    
    expect(radio1.checked).toBe(false);
    expect(radio2.checked).toBe(false);
    
    await user.click(radio1);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(radio1.checked).toBe(true);
    expect(radio2.checked).toBe(false);
    
    await user.click(radio2);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(radio1.checked).toBe(false);
    expect(radio2.checked).toBe(true);
  });

  it('shows error state', () => {
    render(<Radio error />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-invalid', 'true');
  });

  it('handles disabled state', () => {
    render(<Radio disabled label="Disabled radio" />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
  });

  it('can be controlled', () => {
    const { rerender } = render(<Radio checked={false} onChange={() => {}} />);
    const radio = screen.getByRole('radio') as HTMLInputElement;
    expect(radio.checked).toBe(false);
    
    rerender(<Radio checked={true} onChange={() => {}} />);
    expect(radio.checked).toBe(true);
  });

  it('forwards ref', () => {
    const ref = jest.fn();
    render(<Radio ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('accepts custom className', () => {
    render(<Radio className="custom-class" />);
    expect(screen.getByRole('radio')).toHaveClass('custom-class');
  });

  it('generates unique id when label is provided', () => {
    const { rerender } = render(<Radio label="First label" />);
    const firstId = screen.getByRole('radio').id;
    expect(firstId).toBeTruthy();
    
    rerender(<Radio label="Second label" />);
    const secondId = screen.getByRole('radio').id;
    expect(secondId).toBeTruthy();
    expect(secondId).not.toBe(firstId);
  });

  it('uses provided id over generated one', () => {
    render(<Radio id="custom-id" label="With custom ID" />);
    expect(screen.getByRole('radio')).toHaveAttribute('id', 'custom-id');
  });

  it('passes through native input props', () => {
    render(
      <Radio 
        name="choice"
        value="option1"
        required
        aria-describedby="help-text"
      />
    );
    
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('name', 'choice');
    expect(radio).toHaveAttribute('value', 'option1');
    expect(radio).toHaveAttribute('required');
    expect(radio).toHaveAttribute('aria-describedby', 'help-text');
  });

  it('can be clicked via label', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(<Radio label="Click me" onChange={onChange} />);
    const label = screen.getByText('Click me');
    
    await user.click(label);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('works in a radio group', () => {
    render(
      <div role="radiogroup">
        <Radio name="color" value="red" label="Red" defaultChecked />
        <Radio name="color" value="green" label="Green" />
        <Radio name="color" value="blue" label="Blue" />
      </div>
    );
    
    const radios = screen.getAllByRole('radio') as HTMLInputElement[];
    expect(radios).toHaveLength(3);
    expect(radios[0].checked).toBe(true);
    expect(radios[1].checked).toBe(false);
    expect(radios[2].checked).toBe(false);
  });
});