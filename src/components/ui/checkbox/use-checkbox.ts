"use client";

import { useCallback, useState, ChangeEvent } from "react";
import type { CheckboxProps } from "./checkbox.types";

export const useCheckbox = (props: CheckboxProps) => {
  const [checkedState, setCheckedState] = useState(
    props.defaultChecked ?? false
  );
  
  const checked = props.checked ?? checkedState;
  
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (props.checked === undefined) {
        setCheckedState(event.target.checked);
      }
      if (props.onChange) {
        if (typeof props.onChange === 'function' && props.onChange.length === 1) {
          (props.onChange as (checked: boolean) => void)(event.target.checked);
        } else {
          (props.onChange as (event: ChangeEvent<HTMLInputElement>) => void)(event);
        }
      }
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
    icon: props.icon,
    checkedIcon: props.checkedIcon
  };
}; 