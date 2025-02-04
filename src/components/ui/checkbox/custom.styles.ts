/**
 * Custom CSS styles that exactly match Tailwind classes
 * Used when isWithoutTailwind is true
 */

export const customStyles = `
.react-checkbox-pro-base {
  appearance: none;
  transition-property: color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: hsl(var(--color-neutral-300));

  &:focus {
    outline: none;
  }

  &:focus-visible {
    ring-width: 2px;
    ring-offset-width: 2px;
    ring-color: hsl(var(--color-primary-950));
    ring-offset-color: hsl(var(--color-primary-950));
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

/* Disabled state */
.react-checkbox-pro-base:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  border-color: hsl(var(--color-neutral-200));
}

.react-checkbox-pro-base:disabled + .react-checkbox-pro-icon {
  opacity: 0.5;
  cursor: not-allowed;
}

.react-checkbox-pro-wrapper:has(input:disabled) {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Dark mode disabled state */
@media (prefers-color-scheme: dark) {
  .react-checkbox-pro-base:disabled {
    border-color: hsl(var(--color-neutral-700));
  }
}

/* Size variants */
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

/* Color variants */
.react-checkbox-pro-base--default {
  &:checked {
    border-color: #6b7280;
    background-color: #6b7280;
  }
}

.react-checkbox-pro-base--primary {
  &:checked {
    border-color: hsl(var(--color-primary-950));
    background-color: hsl(var(--color-primary-950));
  }
}

.react-checkbox-pro-base--secondary {
  &:checked {
    border-color: hsl(var(--color-secondary-400));
    background-color: hsl(var(--color-secondary-400));
  }
}

.react-checkbox-pro-base--info {
  &:checked {
    border-color: hsl(var(--color-info-950));
    background-color: hsl(var(--color-info-950));
  }
}

.react-checkbox-pro-base--neutral {
  &:checked {
    border-color: hsl(var(--color-neutral-950));
    background-color: hsl(var(--color-neutral-950));
  }
}

.react-checkbox-pro-base--warning {
  &:checked {
    border-color: hsl(var(--color-warning-950));
    background-color: hsl(var(--color-warning-950));
  }
}

.react-checkbox-pro-base--success {
  &:checked {
    border-color: hsl(var(--color-success-950));
    background-color: hsl(var(--color-success-950));
  }
}

.react-checkbox-pro-base--error {
  &:checked {
    border-color: hsl(var(--color-error-950));
    background-color: hsl(var(--color-error-950));
  }
}

/* Radius variants */
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

/* Icon styles */
.react-checkbox-pro-icon {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-center: center;
  color: hsl(var(--color-base-white));
  opacity: 0;
  scale: 0.9;
  transition-property: color;
  transition-duration: 200ms;
}

.react-checkbox-pro-base:checked + .react-checkbox-pro-icon {
  opacity: 1;
  scale: 1;
}

/* Icon sizes */
.react-checkbox-pro-icon--xs {
  width: 0.625rem;
  height: 0.625rem;
}

.react-checkbox-pro-icon--sm {
  width: 0.75rem;
  height: 0.75rem;
}

.react-checkbox-pro-icon--md {
  width: 1rem;
  height: 1rem;
}

.react-checkbox-pro-icon--lg {
  width: 1.25rem;
  height: 1.25rem;
}

/* Wrapper styles */
.react-checkbox-pro-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

/* Label styles */
.react-checkbox-pro-label {
  user-select: none;
  transition-property: color;
  transition-duration: 200ms;
  color: hsl(var(--color-neutral-900));
}

/* Disabled label styles */
.react-checkbox-pro-wrapper:has(input:disabled) .react-checkbox-pro-label {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Helper text styles */
.react-checkbox-pro-helper {
  margin-top: 0.375rem;
  font-size: 0.875rem;
  transition-property: color;
  transition-duration: 200ms;
  color: hsl(var(--color-neutral-950));
}

.react-checkbox-pro-helper--error {
  color: hsl(var(--color-error-950));
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .react-checkbox-pro-base {
    border-color: hsl(var(--color-neutral-700));
  }

  .react-checkbox-pro-label {
    color: hsl(var(--color-neutral-200));
  }

  .react-checkbox-pro-helper {
    color: hsl(var(--color-neutral-400));
  }
}

/* Indeterminate state */
.react-checkbox-pro-base:indeterminate {
  background-color: hsl(var(--color-primary-950));
  border-color: hsl(var(--color-primary-950));
}

.react-checkbox-pro-base:indeterminate + .react-checkbox-pro-icon,
.react-checkbox-pro-base:checked + .react-checkbox-pro-icon {
  opacity: 1;
  scale: 1;
}

.react-checkbox-pro-icon--indeterminate {
  color: hsl(var(--color-base-white));
}
`;
