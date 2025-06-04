import { render, screen } from '@testing-library/react';
import { FormField } from '../FormField';
import { Input } from '../../Input';

describe('FormField', () => {
  it('renders with label', () => {
    render(
      <FormField label="Email Address">
        <Input type="email" />
      </FormField>
    );
    
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
  });

  it('renders with helper text', () => {
    render(
      <FormField label="Email" helperText="We'll never share your email">
        <Input type="email" />
      </FormField>
    );
    
    expect(screen.getByText("We'll never share your email")).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(
      <FormField label="Email" error errorMessage="Email is required">
        <Input type="email" />
      </FormField>
    );
    
    const errorText = screen.getByText('Email is required');
    expect(errorText).toBeInTheDocument();
    expect(errorText).toHaveAttribute('role', 'alert');
    
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows error message instead of helper text when both provided', () => {
    render(
      <FormField 
        label="Email" 
        helperText="Enter your email"
        error 
        errorMessage="Email is invalid"
      >
        <Input type="email" />
      </FormField>
    );
    
    expect(screen.getByText('Email is invalid')).toBeInTheDocument();
    expect(screen.queryByText('Enter your email')).not.toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(
      <FormField label="Email" required>
        <Input type="email" />
      </FormField>
    );
    
    const requiredIndicator = screen.getByLabelText('required');
    expect(requiredIndicator).toHaveTextContent('*');
    
    const input = screen.getByLabelText(/Email/);
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  it('handles disabled state', () => {
    render(
      <FormField label="Email" disabled>
        <Input type="email" />
      </FormField>
    );
    
    const input = screen.getByLabelText('Email');
    expect(input).toBeDisabled();
  });

  it('generates unique IDs for accessibility', () => {
    render(
      <FormField label="Email" helperText="Enter email" errorMessage="Invalid">
        <Input type="email" />
      </FormField>
    );
    
    const input = screen.getByLabelText('Email');
    const inputId = input.getAttribute('id');
    expect(inputId).toBeTruthy();
    
    const helperText = screen.getByText('Enter email');
    expect(helperText).toHaveAttribute('id', `${inputId}-helper`);
  });

  it('preserves child component ID if provided', () => {
    render(
      <FormField label="Email">
        <Input id="custom-email-input" type="email" />
      </FormField>
    );
    
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('id', 'custom-email-input');
  });

  it('sets proper aria-describedby', () => {
    render(
      <FormField label="Email" helperText="Helper" errorMessage="Error">
        <Input type="email" />
      </FormField>
    );
    
    const input = screen.getByLabelText('Email');
    const describedBy = input.getAttribute('aria-describedby');
    expect(describedBy).toContain('-helper');
    expect(describedBy).toContain('-error');
  });

  it('forwards ref', () => {
    const ref = jest.fn();
    render(
      <FormField ref={ref} label="Email">
        <Input type="email" />
      </FormField>
    );
    
    expect(ref).toHaveBeenCalled();
  });

  it('accepts custom className', () => {
    const { container } = render(
      <FormField className="custom-field" label="Email">
        <Input type="email" />
      </FormField>
    );
    
    expect(container.firstChild).toHaveClass('custom-field');
  });

  it('passes error prop to child component', () => {
    render(
      <FormField label="Email" error>
        <Input type="email" />
      </FormField>
    );
    
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
});