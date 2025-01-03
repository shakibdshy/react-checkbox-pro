"use client";
import React from "react";
import { CheckboxProps } from "./checkbox.types";
import { useCheckbox } from "./use-checkbox";
import { CheckboxPrimitive } from "./checkbox-primitive";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const checkboxProps = useCheckbox(props);
    
    if (typeof props.children === "function") {
      return props.children(checkboxProps);
    }

    return (
      <CheckboxPrimitive 
        ref={ref} 
        {...checkboxProps}
        icon={props.icon}
        checkedIcon={props.checkedIcon}
      >
        {props.children}
      </CheckboxPrimitive>
    );
  }
);

Checkbox.displayName = "Checkbox"; 