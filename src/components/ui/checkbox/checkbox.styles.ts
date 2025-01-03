import { tv } from "tailwind-variants";

export const checkbox = tv({
  base: [
    "peer appearance-none border border-gray-300 transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-offset-1",
    "disabled:cursor-not-allowed disabled:opacity-50"
  ],
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    },
    color: {
      default: "checked:border-gray-500 checked:bg-gray-500 focus:ring-gray-500/20",
      primary: "checked:border-primary checked:bg-primary focus:ring-primary/20",
      secondary: "checked:border-secondary checked:bg-secondary focus:ring-secondary/20",
      success: "checked:border-success checked:bg-success focus:ring-success/20",
      warning: "checked:border-warning checked:bg-warning focus:ring-warning/20",
      danger: "checked:border-danger checked:bg-danger focus:ring-danger/20"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-md",
      full: "rounded-full"
    },
    error: {
      true: "border-danger focus:ring-danger/20 hover:border-danger"
    },
    indeterminate: {
      true: "bg-primary border-primary"
    },
    isChecked: {
      true: ""
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    radius: "md",
    isChecked: false
  },
  compoundVariants: [
    {
      error: true,
      isChecked: true,
      class: "bg-danger border-danger"
    }
  ]
});

export const checkboxWrapper = tv({
  base: "flex items-center gap-2",
  variants: {
    labelPlacement: {
      left: "flex-row-reverse",
      right: "flex-row",
      top: "flex-col-reverse items-center",
      bottom: "flex-col items-center"
    },
  },
  defaultVariants: {
    labelPlacement: "right",
  }
});

export const checkboxLabel = tv({
  base: "flex items-center gap-2"
});

export const checkboxIcon = tv({
  base: [
    "pointer-events-none absolute left-0 top-0",
    "flex items-center justify-center text-white",
    "opacity-0 peer-checked:opacity-100",
    "transition-opacity duration-200"
  ],
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const checkboxText = tv({
  base: "text-gray-700 select-none",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    },
    disabled: {
      true: "opacity-50"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const helperText = tv({
  base: "mt-1.5 text-sm",
  variants: {
    error: {
      true: "text-danger",
      false: "text-gray-500"
    }
  },
  defaultVariants: {
    error: false
  }
});

export type CheckboxVariants = typeof checkbox;