import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from '../Select';

describe('Select', () => {
  it('renders correctly', () => {
    render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders options correctly', () => {
    render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    );
    
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent('Option 1');
    expect(options[1]).toHaveTextContent('Option 2');
    expect(options[2]).toHaveTextContent('Option 3');
  });

  it('handles selection changes', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
    
    render(
      <Select onChange={handleChange} defaultValue="1">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    );
    
    const select = screen.getByRole('combobox');
    await user.selectOptions(select, '2');
    
    expect(handleChange).toHaveBeenCalled();
    expect((select as HTMLSelectElement).value).toBe('2');
  });

  it('applies variant styles', () => {
    const { rerender } = render(
      <Select variant="outline">
        <option>Test</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toHaveClass(/outline/);
    
    rerender(
      <Select variant="filled">
        <option>Test</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toHaveClass(/filled/);
    
    rerender(
      <Select variant="unstyled">
        <option>Test</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toHaveClass(/unstyled/);
  });

  it('shows error state', () => {
    render(
      <Select error>
        <option>Test</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toHaveClass(/error/);
  });

  it('handles disabled state', () => {
    render(
      <Select disabled>
        <option>Test</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('applies full width', () => {
    render(
      <Select fullWidth>
        <option>Test</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toHaveClass(/fullWidth/);
  });

  it('forwards ref', () => {
    const ref = jest.fn();
    render(
      <Select ref={ref}>
        <option>Test</option>
      </Select>
    );
    expect(ref).toHaveBeenCalled();
  });

  it('accepts custom className', () => {
    render(
      <Select className="custom-class">
        <option>Test</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toHaveClass('custom-class');
  });

  it('passes through native select props', () => {
    render(
      <Select required name="test-select" id="test-id">
        <option>Test</option>
      </Select>
    );
    
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('required');
    expect(select).toHaveAttribute('name', 'test-select');
    expect(select).toHaveAttribute('id', 'test-id');
  });

  it('renders with placeholder option', () => {
    render(
      <Select defaultValue="">
        <option value="" disabled>Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    );
    
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('');
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });
});