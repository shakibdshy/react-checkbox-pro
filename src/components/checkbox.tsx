"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type CheckboxSize = 'xs' | 'sm' | 'md' | 'lg';
type CheckboxColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
type CheckboxRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
  children?: React.ReactNode | ((props: CheckboxRenderProps) => React.ReactNode);
  // Accessibility props
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  // Visual customization
  size?: CheckboxSize;
  color?: CheckboxColor;
  radius?: CheckboxRadius;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  // Form features
  error?: boolean;
  helperText?: string;
  errorMessage?: string;
  indeterminate?: boolean;
}

interface CheckboxRenderProps extends Omit<CheckboxProps, 'defaultChecked' | 'onChange' | 'children'> {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const sizeStyles: Record<CheckboxSize, string> = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6'
};

const colorStyles: Record<CheckboxColor, string> = {
  default: 'checked:border-gray-500 checked:bg-gray-500 focus:ring-gray-500/20',
  primary: 'checked:border-primary checked:bg-primary focus:ring-primary/20',
  secondary: 'checked:border-secondary checked:bg-secondary focus:ring-secondary/20',
  success: 'checked:border-success checked:bg-success focus:ring-success/20',
  warning: 'checked:border-warning checked:bg-warning focus:ring-warning/20',
  danger: 'checked:border-danger checked:bg-danger focus:ring-danger/20'
};

const radiusStyles: Record<CheckboxRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded',
  lg: 'rounded-md',
  full: 'rounded-full'
};

export const useCheckbox = (props: CheckboxProps) => {
  const [checkedState, setCheckedState] = React.useState(
    props.defaultChecked ?? false
  );
  
  const checked = props.checked ?? checkedState;
  
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (props.checked === undefined) {
        setCheckedState(event.target.checked);
      }
      props.onChange?.(event.target.checked);
    },
    [props]
  );

  return {
    checked,
    disabled: props.disabled,
    onChange: handleChange,
    name: props.name,
    value: props.value,
    required: props.required,
    size: props.size,
    color: props.color,
    radius: props.radius,
    error: props.error,
    helperText: props.helperText,
    errorMessage: props.errorMessage,
    indeterminate: props.indeterminate,
    'aria-label': props['aria-label'],
    'aria-labelledby': props['aria-labelledby'],
    'aria-describedby': props['aria-describedby'],
    'aria-invalid': props['aria-invalid'] ?? props.error,
  };
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const checkboxProps = useCheckbox(props);
    
    if (typeof props.children === "function") {
      return props.children(checkboxProps);
    }

    return <CheckboxPrimitive ref={ref} {...checkboxProps}>{props.children}</CheckboxPrimitive>;
  }
);

const CheckboxPrimitive = React.forwardRef<HTMLInputElement, CheckboxRenderProps & { children?: React.ReactNode }>(
  ({ 
    checked,
    disabled,
    onChange,
    children,
    size = 'md',
    color = 'primary',
    radius = 'md',
    error,
    helperText,
    errorMessage,
    indeterminate,
    icon,
    checkedIcon,
    ...props 
  }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const helperTextId = props.id ? `${props.id}-helper-text` : undefined;

    // Handle indeterminate state
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate]);

    // Merge refs
    const mergedRef = (node: HTMLInputElement) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      inputRef.current = node;
    };

    return (
      <div className="space-y-1.5">
        <label className="flex items-center gap-2">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              ref={mergedRef}
              checked={checked}
              disabled={disabled}
              onChange={onChange}
              aria-describedby={helperTextId}
              className={cn(
                "peer appearance-none border transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-offset-1",
                "disabled:cursor-not-allowed disabled:opacity-50",
                sizeStyles[size],
                colorStyles[color],
                radiusStyles[radius],
                error && "border-danger focus:ring-danger/20"
              )}
              {...props}
            />
            <div
              className={cn(
                "pointer-events-none absolute left-0 top-0",
                "flex items-center justify-center text-white",
                "opacity-0 peer-checked:opacity-100",
                "transition-opacity duration-200",
                sizeStyles[size]
              )}
            >
              {indeterminate ? (
                <IndeterminateIcon />
              ) : (
                checkedIcon || icon || <DefaultCheckIcon />
              )}
            </div>
          </div>
          {children && (
            <span
              className={cn(
                "select-none text-gray-700",
                disabled && "opacity-50",
                {
                  'text-xs': size === 'xs',
                  'text-sm': size === 'sm',
                  'text-base': size === 'md',
                  'text-lg': size === 'lg',
                }
              )}
            >
              {children}
            </span>
          )}
        </label>
        {(helperText || errorMessage) && (
          <p
            id={helperTextId}
            className={cn(
              "text-sm",
              error ? "text-danger" : "text-gray-500"
            )}
          >
            {error ? errorMessage : helperText}
          </p>
        )}
      </div>
    );
  }
);

const DefaultCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12l5 5l10 -10" />
  </svg>
);

const IndeterminateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

Checkbox.displayName = "Checkbox";
CheckboxPrimitive.displayName = "CheckboxPrimitive"; 