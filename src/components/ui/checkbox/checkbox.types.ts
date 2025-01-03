import type { ReactNode, ChangeEvent } from "react";

export type CheckboxSize = "xs" | "sm" | "md" | "lg";
export type CheckboxColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
export type CheckboxRadius = "none" | "sm" | "md" | "lg" | "full";

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
  // Form Features
  error?: boolean;
  helperText?: string;
  indeterminate?: boolean;
  errorMessage?: string;
}

export interface CheckboxRenderProps extends Omit<CheckboxProps, 'defaultChecked' | 'onChange' | 'children'> {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} 