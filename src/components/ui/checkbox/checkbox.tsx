"use client";
import React from "react";
import { CheckboxProps } from "./checkbox.types";
import { useCheckbox } from "./use-checkbox";
import { CheckboxPrimitive } from "./checkbox-primitive";

/**
 * Checkbox Component
 * 
 * A high-level checkbox component that combines CheckboxPrimitive with useCheckbox hook.
 * Provides a simpler API for common checkbox use cases while maintaining all functionality.
 * 
 * @features
 * - Supports render prop pattern for custom rendering
 * - Maintains all CheckboxPrimitive features
 * - Integrates with CheckboxGroup when nested
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Checkbox>Label</Checkbox>
 * 
 * // With custom rendering
 * <Checkbox>
 *   {(props) => <CustomCheckbox {...props} />}
 * </Checkbox>
 * ```
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const checkboxProps = useCheckbox(props);
    
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