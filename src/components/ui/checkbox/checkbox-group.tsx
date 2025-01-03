"use client";

import React, { createContext, useContext, useCallback, useState } from 'react';
import { CheckboxGroupProps, LabelPlacement } from './checkbox.types';
import { cn } from '@/lib/utils';

interface CheckboxGroupContextValue {
  name?: string;
  value: string[];
  disabled?: boolean;
  labelPlacement?: LabelPlacement;
  onChange: (value: string) => void;
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextValue | undefined>(undefined);

export const useCheckboxGroup = () => {
  const context = useContext(CheckboxGroupContext);
  return context;
};

export const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props, ref) => {
    const {
      children,
      value: controlledValue,
      defaultValue = [],
      onChange,
      disabled,
      name,
      orientation = 'vertical',
      spacing = 'md',
      labelPlacement = 'right',
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...rest
    } = props;

    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;

    const handleChange = useCallback((itemValue: string) => {
      const newValue = value.includes(itemValue)
        ? value.filter(v => v !== itemValue)
        : [...value, itemValue];

      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    }, [value, onChange, isControlled]);

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
            'flex gap-2',
            orientation === 'horizontal' ? 'flex-row' : 'flex-col',
            {
              'gap-1': spacing === 'sm',
              'gap-2': spacing === 'md',
              'gap-3': spacing === 'lg',
            }
          )}
          {...rest}
        >
          {children}
        </div>
      </CheckboxGroupContext.Provider>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup'; 