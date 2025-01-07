"use client";

import React, { useEffect, useCallback, useState } from "react";
import { CheckboxProps, CheckboxRenderProps } from "./checkbox.types";
import { checkbox, checkboxWrapper, checkboxIcon, checkboxText, helperText } from "./checkbox.styles";
import { CheckboxGroupContext } from "./checkbox-group";
import { cn } from "@/lib/utils";
import { DefaultCheckIcon, IndeterminateIcon } from "./checkbox-icon";

/**
 * CheckboxPrimitive Component
 * 
 * A low-level checkbox component that handles all the core functionality.
 * This component manages both standalone checkbox state and group checkbox behavior.
 * 
 * @features
 * - Controlled & uncontrolled modes
 * - Indeterminate state support
 * - Keyboard shortcuts
 * - Custom icons
 * - Error states & helper text
 * - Label placement options
 * - Accessible by default
 * 
 * @example
 * ```tsx
 * <CheckboxPrimitive
 *   checked={checked}
 *   onChange={handleChange}
 *   size="md"
 *   color="primary"
 * >
 *   Label Text
 * </CheckboxPrimitive>
 * ```
 */
export const CheckboxPrimitive = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      children,
      labelPlacement = "right",
      shortcut,
      onShortcut,
      onChange,
      checked,
      defaultChecked,
      size = "md",
      color = "primary",
      radius = "md",
      error,
      indeterminate,
      disabled,
      helperText: helperTextProp,
      errorMessage,
      icon,
      checkedIcon,
      value,
      id,
      ...restProps
    } = props;

    // Internal state for uncontrolled mode
    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
    const isControlled = checked !== undefined;
    const group = React.useContext(CheckboxGroupContext);
    const finalLabelPlacement = group?.labelPlacement || labelPlacement;
    
    // Determine checked state based on group context or local state
    const isChecked = group 
      ? group.value.includes(value || '') 
      : isControlled
        ? checked
        : internalChecked;

    /**
     * Handles checkbox state changes
     * - Updates internal state for uncontrolled mode
     * - Calls group onChange if in a checkbox group
     * - Calls provided onChange handler
     */
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      
      if (group && value) {
        group.onChange(value);
        return;
      }
      
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      
      if (onChange) {
        if (typeof onChange === 'function') {
          if (onChange.length === 1) {
            (onChange as (checked: boolean) => void)(newChecked);
          } else {
            (onChange as (e: React.ChangeEvent<HTMLInputElement>) => void)(e);
          }
        }
      }
    }, [group, value, isControlled, onChange]);

    /**
     * Keyboard shortcut handler
     * Allows custom keyboard combinations to toggle the checkbox
     */
    useEffect(() => {
      if (!shortcut) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        const keys = shortcut.toLowerCase().split('+');
        const isCtrlRequired = keys.includes('ctrl');
        const isShiftRequired = keys.includes('shift');
        const isAltRequired = keys.includes('alt');
        const mainKey = keys[keys.length - 1];

        const isMatch = 
          event.key.toLowerCase() === mainKey &&
          event.ctrlKey === isCtrlRequired &&
          event.shiftKey === isShiftRequired &&
          event.altKey === isAltRequired;

        if (isMatch) {
          event.preventDefault();
          onShortcut?.();
          const newChecked = !isChecked;
          
          if (!isControlled) {
            setInternalChecked(newChecked);
          }
          
          if (onChange) {
            if (typeof onChange === 'function') {
              if (onChange.length === 1) {
                (onChange as (checked: boolean) => void)(newChecked);
              } else {
                const syntheticEvent = {
                  target: {
                    checked: newChecked,
                    type: 'checkbox',
                    value: value || ''
                  }
                } as React.ChangeEvent<HTMLInputElement>;
                (onChange as (e: React.ChangeEvent<HTMLInputElement>) => void)(syntheticEvent);
              }
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [shortcut, onShortcut, isChecked, onChange, isControlled, value]);

    const helperTextId = id ? `${id}-helper-text` : undefined;

    return (
      <div className="space-y-1.5">
        <label
          className={checkboxWrapper({
            labelPlacement: finalLabelPlacement,
          })}
        >
          <div className={cn("relative", "flex items-center", "gap-2")}>
            <input
              type="checkbox"
              ref={ref}
              checked={isChecked}
              onChange={handleChange}
              disabled={disabled || group?.disabled}
              className={checkbox({ 
                size, 
                color, 
                radius, 
                error, 
                indeterminate,
                isChecked: isChecked || false
              })}
              id={id}
              value={value}
              aria-checked={indeterminate ? "mixed" : isChecked}
              {...restProps}
            />
            <div
              className={cn(
                checkboxIcon({ size }),
                "pointer-events-none absolute left-0 top-0",
                "flex items-center justify-center text-white",
                "opacity-0 peer-checked:opacity-100",
                "transition-opacity duration-200"
              )}
            >
              {indeterminate ? (
                <IndeterminateIcon />
              ) : (
                checkedIcon || icon || <DefaultCheckIcon />
              )}
            </div>
          </div>
          {typeof children === 'function' ? 
            (children as (props: CheckboxRenderProps) => React.ReactNode)({
              ...props,
              checked: isChecked || false,
              onChange: handleChange
            }) : 
            children && (
              <span className={checkboxText({ size, disabled: disabled || group?.disabled })}>
                {children}
                {shortcut && (
                  <kbd className="ml-2 rounded bg-gray-100 px-1.5 py-0.5 text-xs font-semibold text-gray-800">
                    {shortcut}
                  </kbd>
                )}
              </span>
            )
          }
        </label>
        {(helperTextProp || errorMessage) && (
          <p
            id={helperTextId}
            className={helperText({ error })}
          >
            {error ? errorMessage : helperTextProp}
          </p>
        )}
      </div>
    );
  }
);

CheckboxPrimitive.displayName = "CheckboxPrimitive";
