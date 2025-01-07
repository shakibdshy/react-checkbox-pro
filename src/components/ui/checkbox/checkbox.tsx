"use client";

import React, { useEffect } from "react";
import { CheckboxProps } from "./checkbox.types";
import { useCheckbox } from "./use-checkbox";
import { CheckboxPrimitive } from "./checkbox-primitive";
import { customStyles } from "./custom.styles";

/**
 * Checkbox Component
 * 
 * A high-level checkbox component that supports both Tailwind and custom CSS styling.
 * 
 * @features
 * - Supports both Tailwind and custom CSS modes
 * - Maintains all CheckboxPrimitive features
 * - Integrates with CheckboxGroup
 * - Full keyboard navigation and shortcuts
 * - Accessible by default
 * 
 * @example
 * ```tsx
 * // With Tailwind (default)
 * <Checkbox checked={isChecked} onChange={setIsChecked}>
 *   Tailwind Checkbox
 * </Checkbox>
 * 
 * // Without Tailwind (using custom CSS)
 * <Checkbox isWithoutTailwind checked={isChecked} onChange={setIsChecked}>
 *   Custom CSS Checkbox
 * </Checkbox>
 * ```
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const checkboxProps = useCheckbox(props);
    
    // Inject custom styles when isWithoutTailwind is true
    useEffect(() => {
      if (props.isWithoutTailwind) {
        const styleId = 'react-checkbox-pro-styles';
        if (!document.getElementById(styleId)) {
          const styleElement = document.createElement('style');
          styleElement.id = styleId;
          styleElement.textContent = customStyles;
          document.head.appendChild(styleElement);
          return () => {
            // Only remove styles if no other checkboxes are using them
            if (!document.querySelector('[class*="react-checkbox-pro-"]')) {
              document.getElementById(styleId)?.remove();
            }
          };
        }
      }
    }, [props.isWithoutTailwind]);

    if (typeof props.children === "function") {
      return props.children({
        ...checkboxProps,
        checked: checkboxProps.checked ?? false,
        onChange: checkboxProps.onChange
      });
    }

    return (
      <CheckboxPrimitive 
        ref={ref} 
        {...props}
      >
        {props.children}
      </CheckboxPrimitive>
    );
  }
);

Checkbox.displayName = "Checkbox"; 