"use client";

import { useCallback, useState, ChangeEvent } from "react";
import type { CheckboxProps } from "./checkbox.types";

export const useCheckbox = (props: CheckboxProps) => {
  const [internalChecked, setInternalChecked] = useState(
    props.defaultChecked ?? false
  );
  
  const isControlled = props.checked !== undefined;
  const checked = isControlled ? props.checked : internalChecked;
  
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement> | boolean) => {
      const newChecked = typeof e === 'boolean' ? e : e.target.checked;
      
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      
      if (props.onChange) {
        if (typeof props.onChange === 'function' && props.onChange.length === 1) {
          (props.onChange as (checked: boolean) => void)(newChecked);
        } else if (typeof e !== 'boolean') {
          (props.onChange as (event: ChangeEvent<HTMLInputElement>) => void)(e);
        }
      }
    },
    [isControlled, props.onChange]
  );

  return {
    checked,
    onChange: handleChange,
    disabled: props.disabled,
    required: props.required,
    name: props.name,
    value: props.value,
    size: props.size,
    color: props.color,
    radius: props.radius,
    error: props.error,
    helperText: props.helperText,
    errorMessage: props.errorMessage,
    indeterminate: props.indeterminate,
    icon: props.icon,
    checkedIcon: props.checkedIcon,
    labelPlacement: props.labelPlacement,
    shortcut: props.shortcut,
    onShortcut: props.onShortcut,
    id: props.id,
    'aria-label': props['aria-label'],
    'aria-labelledby': props['aria-labelledby'],
    'aria-describedby': props['aria-describedby'],
    'aria-invalid': props['aria-invalid'] ?? props.error
  };
}; 