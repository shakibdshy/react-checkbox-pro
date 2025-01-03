"use client";
import React from "react";
import { CheckboxProps } from "./checkbox.types";
import { useCheckbox } from "./use-checkbox";
import { CheckboxPrimitive } from "./checkbox-primitive";

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