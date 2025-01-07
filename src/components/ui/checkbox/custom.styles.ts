/**
 * Custom CSS styles that exactly match Tailwind classes
 * Used when isWithoutTailwind is true
 */

export const customStyles = `
/* Base styles matching Tailwind classes */
.react-checkbox-pro-base {
  /* peer appearance-none transition-all duration-200 */
  appearance: none;
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  /* disabled:cursor-not-allowed disabled:opacity-50 */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* relative flex items-center justify-center */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  /* border-2 focus:outline-none focus:ring-2 */
  border-width: 2px;
  border-style: solid;
  border-color: var(--checkbox-border-color, #d1d5db);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--checkbox-ring-color, rgb(59 130 246 / 0.2));
  }

  /* before:content-[''] before:absolute before:inset-0 */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    transform: scale(0);
    transition: transform 200ms;
  }

  /* checked:before:scale-100 */
  &:checked::before {
    transform: scale(1);
  }
}

/* Size variants matching Tailwind classes */
.react-checkbox-pro-base--xs {
  width: 0.75rem;  /* h-3 w-3 */
  height: 0.75rem;
}

.react-checkbox-pro-base--sm {
  width: 1rem;     /* h-4 w-4 */
  height: 1rem;
}

.react-checkbox-pro-base--md {
  width: 1.25rem;  /* h-5 w-5 */
  height: 1.25rem;
}

.react-checkbox-pro-base--lg {
  width: 1.5rem;   /* h-6 w-6 */
  height: 1.5rem;
}

/* Color variants matching Tailwind classes */
.react-checkbox-pro-base--default {
  border-color: #d1d5db;
  &:checked {
    border-color: #6b7280;
    background-color: #6b7280;
  }
  &:focus {
    box-shadow: 0 0 0 2px rgb(107 114 128 / 0.2);
  }
}

.react-checkbox-pro-base--primary {
  border-color: #d1d5db;
  &:checked {
    border-color: var(--primary);
    background-color: var(--primary);
  }
  &:focus {
    box-shadow: 0 0 0 2px rgb(var(--primary-rgb) / 0.2);
  }
}

.react-checkbox-pro-base--secondary {
  border-color: #d1d5db;
  &:checked {
    border-color: var(--secondary);
    background-color: var(--secondary);
  }
  &:focus {
    box-shadow: 0 0 0 2px rgb(var(--secondary-rgb) / 0.2);
  }
}

.react-checkbox-pro-base--success {
  border-color: #d1d5db;
  &:checked {
    border-color: var(--success);
    background-color: var(--success);
  }
  &:focus {
    box-shadow: 0 0 0 2px rgb(var(--success-rgb) / 0.2);
  }
}

.react-checkbox-pro-base--warning {
  border-color: #d1d5db;
  &:checked {
    border-color: var(--warning);
    background-color: var(--warning);
  }
  &:focus {
    box-shadow: 0 0 0 2px rgb(var(--warning-rgb) / 0.2);
  }
}

.react-checkbox-pro-base--danger {
  border-color: #d1d5db;
  &:checked {
    border-color: var(--danger);
    background-color: var(--danger);
  }
  &:focus {
    box-shadow: 0 0 0 2px rgb(var(--danger-rgb) / 0.2);
  }
}

/* Radius variants matching Tailwind classes */
.react-checkbox-pro-base--radius-none {
  border-radius: 0;
}

.react-checkbox-pro-base--radius-sm {
  border-radius: 0.125rem;
}

.react-checkbox-pro-base--radius-md {
  border-radius: 0.25rem;
}

.react-checkbox-pro-base--radius-lg {
  border-radius: 0.5rem;
}

.react-checkbox-pro-base--radius-full {
  border-radius: 9999px;
}

/* Error state matching Tailwind classes */
.react-checkbox-pro-base--error {
  border-color: var(--danger);
  &:focus {
    box-shadow: 0 0 0 2px rgb(var(--danger-rgb) / 0.2);
  }
  &:hover {
    border-color: var(--danger);
  }
  &:checked {
    border-color: var(--danger);
    background-color: var(--danger);
  }
}

/* Wrapper styles matching Tailwind classes */
.react-checkbox-pro-wrapper {
  /* inline-flex items-center gap-2 */
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  /* Label placement variants */
  &[data-label-placement="left"] {
    flex-direction: row-reverse;
  }

  &[data-label-placement="right"] {
    flex-direction: row;
  }

  &[data-label-placement="top"] {
    flex-direction: column-reverse;
    align-items: center;
  }

  &[data-label-placement="bottom"] {
    flex-direction: column;
    align-items: center;
  }
}

/* Icon styles matching Tailwind classes */
.react-checkbox-pro-icon {
  /* pointer-events-none absolute inset-0 flex items-center justify-center */
  pointer-events: none;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  /* text-white opacity-0 scale-90 transition-all duration-200 */
  color: white;
  opacity: 0;
  transform: scale(0.9);
  transition: all 200ms;
}

/* Icon state classes matching Tailwind */
.react-checkbox-pro-base:checked + .react-checkbox-pro-icon {
  /* peer-checked:opacity-100 peer-checked:scale-100 */
  opacity: 1;
  transform: scale(1);
}

.react-checkbox-pro-icon--disabled {
  /* peer-disabled:cursor-not-allowed */
  cursor: not-allowed;
}

/* Label text styles matching Tailwind classes */
.react-checkbox-pro-label {
  /* select-none transition-colors */
  user-select: none;
  transition: color 200ms;
  color: var(--foreground);

  &.react-checkbox-pro-label--disabled {
    /* peer-disabled:opacity-50 */
    opacity: 0.5;
  }
}

/* Helper text styles matching Tailwind classes */
.react-checkbox-pro-helper {
  /* mt-1.5 text-sm transition-colors */
  margin-top: 0.375rem;
  font-size: 0.875rem;
  transition: color 200ms;
}

.react-checkbox-pro-helper--error {
  /* text-[var(--danger)] */
  color: var(--danger);
}

.react-checkbox-pro-helper--default {
  /* text-gray-500 */
  color: #6b7280;
}

/* Group styles matching Tailwind classes */
.react-checkbox-pro-group {
  /* flex gap-2 */
  display: flex;
  gap: 0.5rem;
}

.react-checkbox-pro-group--horizontal {
  /* flex-row */
  flex-direction: row;
}

.react-checkbox-pro-group--vertical {
  /* flex-col */
  flex-direction: column;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .react-checkbox-pro-base {
    border-color: var(--checkbox-dark-border, #374151);
  }

  .react-checkbox-pro-label {
    color: var(--checkbox-dark-label, var(--foreground));
  }

  .react-checkbox-pro-helper--default {
    color: #9ca3af;
  }
}
`; 