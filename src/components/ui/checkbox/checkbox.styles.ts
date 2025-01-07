import { tv } from "tailwind-variants";

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
export const checkbox = tv({
  base: [
    "peer appearance-none border-2 transition-all duration-200",
    "focus:outline-none focus:ring-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "relative flex items-center justify-center",
    // Custom styles using CSS variables
    "before:content-[''] before:absolute before:inset-0",
    "before:transform before:scale-0 before:transition-transform",
    "checked:before:scale-100",
  ],
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
    color: {
      default:
        "checked:border-gray-500 checked:bg-gray-500",
      primary:
        "checked:border-primary checked:bg-primary",
      secondary:
        "checked:border-secondary checked:bg-secondary",
      success:
        "checked:border-success checked:bg-success",
      warning:
        "checked:border-warning checked:bg-warning",
      danger: "checked:border-danger checked:bg-danger",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-md",
      full: "rounded-full",
    },
    error: {
      true: "border-danger focus:ring-danger/20 hover:border-danger",
    },
    indeterminate: {
      true: "bg-primary border-primary",
    },
    isChecked: {
      true: "",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    radius: "md",
    isChecked: false,
  },
  compoundVariants: [
    {
      error: true,
      isChecked: true,
      class:
        "bg-danger border-danger checked:border-danger checked:bg-danger focus:ring-danger/20 focus:ring-offset-danger/20",
    },
  ],
});

/**
 * Wrapper styles for the checkbox and label container
 * Controls the layout and spacing of the checkbox relative to its label
 *
 * @variants
 * labelPlacement - Label position relative to checkbox (left, right, top, bottom)
 */
export const checkboxWrapper = tv({
  base: "flex items-center gap-2",
  variants: {
    labelPlacement: {
      left: "flex-row-reverse",
      right: "flex-row",
      top: "flex-col-reverse items-center",
      bottom: "flex-col items-center",
    },
  },
  defaultVariants: {
    labelPlacement: "right",
  },
});

/**
 * Styles for the checkbox label container
 */
export const checkboxLabel = tv({
  base: "flex items-center gap-2",
});

/**
 * Styles for the checkbox icon container
 * Handles positioning and transitions for the check/indeterminate icons
 *
 * @variants
 * size - Matches the checkbox size variants
 */
export const checkboxIcon = tv({
  base: [
    "pointer-events-none absolute left-0 top-0",
    "flex items-center justify-center text-white",
    "opacity-0 peer-checked:opacity-100",
    "transition-opacity duration-200",
  ],
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

/**
 * Styles for the checkbox label text
 *
 * @variants
 * size - Text size variants matching checkbox sizes
 * disabled - Styling for disabled state
 */
export const checkboxText = tv({
  base: "text-gray-700 dark:text-white select-none",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    disabled: {
      true: "opacity-50",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

/**
 * Styles for helper and error text below the checkbox
 *
 * @variants
 * error - Switches between helper text and error message styling
 */
export const helperText = tv({
  base: "mt-1.5 text-sm",
  variants: {
    error: {
      true: "text-danger",
      false: "text-gray-500",
    },
  },
  defaultVariants: {
    error: false,
  },
});

export type CheckboxVariants = typeof checkbox;
