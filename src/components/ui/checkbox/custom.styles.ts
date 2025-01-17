/**
 * Custom CSS styles that exactly match Tailwind classes
 * Used when isWithoutTailwind is true
 */

export const customStyles = `
.react-checkbox-pro-base {
  appearance: none;
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  border-width: 2px;
  border-style: solid;
  border-color: var(--checkbox-border-color, #d1d5db);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--checkbox-ring-color, rgb(59 130 246 / 0.2));
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--checkbox-ring-color, rgb(59 130 246 / 0.2));
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    transform: scale(0);
    transition: transform 200ms;
  }

  &:checked::before {
    transform: scale(1);
  }
}

.react-checkbox-pro-base--xs {
  width: 0.75rem;
  height: 0.75rem;
}

.react-checkbox-pro-base--sm {
  width: 1rem;
  height: 1rem;
}

.react-checkbox-pro-base--md {
  width: 1.25rem;
  height: 1.25rem;
}

.react-checkbox-pro-base--lg {
  width: 1.5rem;
  height: 1.5rem;
}

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

.react-checkbox-pro-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

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

.react-checkbox-pro-icon {
  pointer-events: none;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transform: scale(0.9);
  transition: all 200ms;
}

.react-checkbox-pro-base:checked + .react-checkbox-pro-icon {
  opacity: 1;
  transform: scale(1);
}

.react-checkbox-pro-icon--disabled {
  cursor: not-allowed;
}

.react-checkbox-pro-label {
  user-select: none;
  transition: color 200ms;
  color: var(--foreground);

  &.react-checkbox-pro-label--disabled {
    opacity: 0.5;
  }
}

.react-checkbox-pro-helper {
  margin-top: 0.375rem;
  font-size: 0.875rem;
  transition: color 200ms;
}

.react-checkbox-pro-helper--error {
  color: var(--danger);
}

.react-checkbox-pro-helper--default {
  color: #6b7280;
}

.react-checkbox-pro-group {
  display: flex;
  gap: 0.5rem;
}

.react-checkbox-pro-group--horizontal {
  flex-direction: row;
}

.react-checkbox-pro-group--vertical {
  flex-direction: column;
}

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
