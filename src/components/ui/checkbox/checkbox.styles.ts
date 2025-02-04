import { cva, type VariantProps } from "class-variance-authority";

/**
 * Core checkbox input styles
 * Handles the main checkbox appearance, states, and variants
 *
 * @variants
 * size - Controls checkbox dimensions (xs, sm, md, lg)
 * color - Theme color variants (default, primary, secondary, etc.)
 * radius - Border radius options (none, sm, md, lg, full)
 * error - Error state styling
 * indeterminate - Styling for indeterminate state
 * isChecked - Styling specific to checked state
 */
export const checkbox = cva(
  [
    "peer appearance-none transition-color duration-200",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "relative flex items-center justify-center",
  ],
  {
    variants: {
      isWithoutTailwind: {
        true: "react-checkbox-pro-base",
        false: [
          "border-2",
          "focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-primary",
          "before:content-[''] before:absolute before:inset-0",
          "before:transform before:scale-0 before:transition-transform",
          "checked:before:scale-100",
        ],
      },
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      color: {
        default: "checked:border-gray-500 checked:bg-gray-500",
        primary: "checked:border-primary checked:bg-primary",
        secondary: "checked:border-secondary checked:bg-secondary",
        info: "checked:border-info checked:bg-info",
        neutral: "checked:border-neutral checked:bg-neutral",
        warning: "checked:border-warning checked:bg-warning",
        success: "checked:border-success checked:bg-success",
        error: "checked:border-error checked:bg-error",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded",
        lg: "rounded-md",
        full: "rounded-full",
      },
      indeterminate: {
        true: [
          "bg-primary border-primary",
          "before:transform before:scale-100",
        ],
      },
      isChecked: {
        true: "checked:scale-100",
      },
      error: {
        true: "border-danger focus:ring-danger/20 hover:border-danger checked:border-danger checked:bg-danger",
      },
    },
    defaultVariants: {
      size: "md",
      color: "primary",
      radius: "md",
      isWithoutTailwind: false,
    },
  }
);

/**
 * Wrapper styles for the checkbox and label container
 * Controls the layout and spacing of the checkbox relative to its label
 *
 * @variants
 * labelPlacement - Label position relative to checkbox (left, right, top, bottom)
 */
export const checkboxWrapper = cva("inline-flex items-center gap-2", {
  variants: {
    isWithoutTailwind: {
      true: "react-checkbox-pro-wrapper",
      false: [
        "cursor-pointer",
        "disabled:cursor-not-allowed disabled:opacity-50",
      ],
    },
    labelPlacement: {
      left: "flex-row-reverse",
      right: "flex-row",
      top: "flex-col-reverse items-center",
      bottom: "flex-col items-center",
    },
  },
  defaultVariants: {
    labelPlacement: "right",
    isWithoutTailwind: false,
  },
});

/**
 * Styles for the checkbox label container
 */
export const checkboxLabel = cva("flex items-center gap-2");

/**
 * Styles for the checkbox icon container
 * Handles positioning and transitions for the check/indeterminate icons
 *
 * @variants
 * size - Matches the checkbox size variants
 */
export const checkboxIcon = cva(
  [
    "pointer-events-none cursor-pointer absolute inset-1/2 transition-color duration-200 -translate-y-1/2 -translate-x-1/2",
    "flex items-center justify-center",
  ],
  {
    variants: {
      isWithoutTailwind: {
        true: "react-checkbox-pro-icon",
        false: [
          "text-white",
          "opacity-0 scale-90 transition-color duration-200",
          "peer-checked:opacity-100 peer-checked:scale-100",
          "peer-indeterminate:opacity-100 peer-indeterminate:scale-100",
          "peer-disabled:cursor-not-allowed",
        ],
      },
      size: {
        xs: "h-2.5 w-2.5",
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5",
      },
    },
    defaultVariants: {
      isWithoutTailwind: false,
      size: "md",
    },
  }
);

/**
 * Styles for the checkbox label text
 *
 * @variants
 * size - Text size variants matching checkbox sizes
 * disabled - Styling for disabled state
 */
export const checkboxText = cva("select-none transition-colors", {
  variants: {
    isWithoutTailwind: {
      true: "react-checkbox-pro-label",
      false: [
        "text-foreground",
        "group-disabled:opacity-50",
        "group-disabled:cursor-not-allowed",
      ],
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    isWithoutTailwind: false,
    size: "md",
  },
});

/**
 * Styles for helper and error text below the checkbox
 *
 * @variants
 * error - Switches between helper text and error message styling
 */
export const helperText = cva("mt-1.5 text-sm transition-colors", {
  variants: {
    isWithoutTailwind: {
      true: "react-checkbox-pro-helper",
      false: "",
    },
    error: {
      true: {
        true: "react-checkbox-pro-helper--error",
        false: "text-[var(--danger)]",
      },
      false: {
        true: "",
        false: "text-gray-500",
      },
    },
  },
  defaultVariants: {
    error: false,
    isWithoutTailwind: false,
  },
});

export const checkboxGroup = cva("flex gap-2", {
  variants: {
    isWithoutTailwind: {
      true: "react-checkbox-pro-group",
      false: "",
    },
    orientation: {
      horizontal: {
        true: "react-checkbox-pro-group--horizontal",
        false: "flex-row",
      },
      vertical: {
        true: "react-checkbox-pro-group--vertical",
        false: "flex-col",
      },
    },
  },
  defaultVariants: {
    orientation: "vertical",
    isWithoutTailwind: false,
  },
});

export type CheckboxVariants = VariantProps<typeof checkbox>;
