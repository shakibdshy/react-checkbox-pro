"use client";

import React, { createContext, useContext, useCallback, useState } from "react";
import { CheckboxGroupProps, LabelPlacement } from "./checkbox.types";
import { cn } from "@/lib/utils";

/**
 * Context interface for sharing checkbox group state with child checkboxes
 */
interface CheckboxGroupContextValue {
  name?: string;
  value: string[];
  disabled?: boolean;
  labelPlacement?: LabelPlacement;
  onChange: (value: string) => void;
}

/**
 * Context for managing shared state between CheckboxGroup and child Checkboxes
 */
export const CheckboxGroupContext = createContext<
  CheckboxGroupContextValue | undefined
>(undefined);

/**
 * Hook to access CheckboxGroup context from child components
 */
export const useCheckboxGroup = () => {
  const context = useContext(CheckboxGroupContext);
  return context;
};

/**
 * CheckboxGroup Component
 *
 * A container component that manages a group of related checkboxes.
 * Provides shared state and behavior for multiple checkbox inputs.
 *
 * @features
 * - Controlled & uncontrolled modes
 * - Vertical/horizontal orientation
 * - Customizable spacing
 * - Shared disabled state
 * - Accessible group labeling
 *
 * @example
 * ```tsx
 * <CheckboxGroup
 *   value={['option1', 'option2']}
 *   onChange={(values) => console.log(values)}
 *   orientation="vertical"
 * >
 *   <Checkbox value="option1">Option 1</Checkbox>
 *   <Checkbox value="option2">Option 2</Checkbox>
 * </CheckboxGroup>
 * ```
 */
export const CheckboxGroup = React.forwardRef<
  HTMLDivElement,
  CheckboxGroupProps
>((props, ref) => {
  const {
    children,
    value: controlledValue,
    defaultValue = [],
    onChange,
    disabled,
    name,
    orientation = "vertical",
    spacing = "md",
    labelPlacement = "right",
    className,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    ...rest
  } = props;

  const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleChange = useCallback(
    (itemValue: string) => {
      const newValue = value.includes(itemValue)
        ? value.filter((v) => v !== itemValue)
        : [...value, itemValue];

      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [value, onChange, isControlled]
  );

  return (
    <CheckboxGroupContext.Provider
      value={{
        name,
        value,
        disabled,
        labelPlacement,
        onChange: handleChange,
      }}
    >
      <div
        ref={ref}
        role="group"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        className={cn(
          "flex gap-2",
          orientation === "horizontal" ? "flex-row" : "flex-col",
          {
            "gap-1": spacing === "sm",
            "gap-2": spacing === "md",
            "gap-3": spacing === "lg",
          },
          className
        )}
        {...rest}
      >
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  );
});

CheckboxGroup.displayName = "CheckboxGroup";
