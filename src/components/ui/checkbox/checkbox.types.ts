import type { ReactNode, ChangeEvent } from "react";

/** Available checkbox sizes */
export type CheckboxSize = "xs" | "sm" | "md" | "lg";

/** Available color variants */
export type CheckboxColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";

/** Border radius options */
export type CheckboxRadius = "none" | "sm" | "md" | "lg" | "full";

/** Label placement options relative to the checkbox */
export type LabelPlacement = 'left' | 'right' | 'top' | 'bottom';

/**
 * Props for the Checkbox component
 * 
 * @property checked - Controlled checked state
 * @property defaultChecked - Initial checked state for uncontrolled mode
 * @property onChange - Change handler (supports both boolean and event handlers)
 * @property disabled - Disables the checkbox
 * @property required - Makes the checkbox required in forms
 * @property name - Form field name
 * @property value - Value for use in checkbox groups
 * @property id - HTML id attribute
 * @property size - Checkbox size variant
 * @property color - Color theme variant
 * @property radius - Border radius variant
 * @property icon - Custom icon for checked state
 * @property checkedIcon - Alternative icon for checked state
 * @property children - Label content or render function
 * @property error - Error state
 * @property helperText - Helper text below checkbox
 * @property indeterminate - Indeterminate state
 * @property errorMessage - Error message text
 * @property labelPlacement - Label position
 * @property shortcut - Keyboard shortcut
 * @property isWithoutTailwind - Use custom CSS classes instead of Tailwind
 */
export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: ((checked: boolean) => void) | ((event: ChangeEvent<HTMLInputElement>) => void);
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
  size?: CheckboxSize;
  color?: CheckboxColor;
  radius?: CheckboxRadius;
  icon?: ReactNode;
  checkedIcon?: ReactNode;
  children?: ReactNode | ((props: CheckboxRenderProps) => ReactNode);
  // Accessibility props
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  // Form Features
  error?: boolean;
  helperText?: string;
  indeterminate?: boolean;
  errorMessage?: string;
  labelPlacement?: LabelPlacement;
  // Keyboard shortcuts
  shortcut?: string;
  onShortcut?: () => void;
  // Styling
  isWithoutTailwind?: boolean;
  className?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  iconClassName?: string;
  helperTextClassName?: string;
}

/**
 * Props passed to render function when using children as a function
 * Extends CheckboxProps but makes checked required and removes some props
 */
export interface CheckboxRenderProps extends Omit<CheckboxProps, 'defaultChecked' | 'onChange' | 'children'> {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Props for the CheckboxGroup component
 * 
 * @property children - Checkbox components to group
 * @property value - Controlled selected values
 * @property defaultValue - Initial values for uncontrolled mode
 * @property onChange - Change handler for group values
 * @property disabled - Disables all checkboxes in group
 * @property name - Form field name for all checkboxes
 * @property orientation - Layout direction
 * @property spacing - Space between checkboxes
 * @property labelPlacement - Label position for all checkboxes
 * @property className - Custom CSS classes
 */
export interface CheckboxGroupProps {
  children: ReactNode;
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  disabled?: boolean;
  name?: string;
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'sm' | 'md' | 'lg';
  labelPlacement?: LabelPlacement;
  className?: string;
  // Accessibility
  'aria-label'?: string;
  'aria-labelledby'?: string;
} 