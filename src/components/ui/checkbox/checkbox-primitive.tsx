"use client";
import React, { useEffect, useRef } from "react";
import { CheckboxRenderProps } from "./checkbox.types";
import { checkbox, checkboxWrapper, checkboxLabel } from "./checkbox.styles";
import { DefaultCheckIcon, IndeterminateIcon } from "./checkbox-icon";
import { cn } from "@/lib/utils";

const sizeStyles = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6'
};

export const CheckboxPrimitive = React.forwardRef<
  HTMLInputElement,
  CheckboxRenderProps & { 
    children?: React.ReactNode;
    'aria-invalid'?: boolean;
    icon?: React.ReactNode;
    checkedIcon?: React.ReactNode;
  }
>(({ 
  checked,
  disabled,
  onChange,
  children,
  size = "md",
  color = "primary",
  radius = "md",
  error,
  helperText: helperTextProp,
  errorMessage,
  indeterminate,
  required,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  id,
  icon,
  checkedIcon,
  ...props 
}, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const helperTextId = id ? `${id}-helper-text` : undefined;
  const labelId = id ? `${id}-label` : undefined;
  
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

  // Combine aria-describedby values
  const ariaDescribedByValues = [
    helperTextId,
    ariaDescribedBy,
  ].filter(Boolean).join(" ") || undefined;

  return (
    <div className="space-y-1.5" role="group">
      <label className={checkboxLabel()}>
        <div className={checkboxWrapper()}>
          <input
            type="checkbox"
            ref={mergedRef}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            required={required}
            id={id}
            className={checkbox({ 
              size, 
              color: error ? 'danger' : color, 
              radius,
              error,
              indeterminate 
            })}
            aria-label={ariaLabel}
            aria-labelledby={children ? labelId : ariaLabelledBy}
            aria-describedby={ariaDescribedByValues}
            aria-invalid={ariaInvalid ?? error}
            aria-required={required}
            aria-checked={indeterminate ? "mixed" : checked}
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
            aria-hidden="true"
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
            id={labelId}
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
      {(helperTextProp || errorMessage) && (
        <p
          id={helperTextId}
          className={cn(
            "text-sm",
            error ? "text-danger" : "text-gray-500"
          )}
        >
          {error ? errorMessage : helperTextProp}
        </p>
      )}
    </div>
  );
});

CheckboxPrimitive.displayName = "CheckboxPrimitive";
