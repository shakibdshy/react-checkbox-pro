import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isWithoutTailwind?: boolean;
}

export const DefaultCheckIcon = ({
  isWithoutTailwind,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={
      isWithoutTailwind
        ? "react-checkbox-pro-icon--check"
        : "transition-transform duration-200"
    }
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IndeterminateIcon = ({
  isWithoutTailwind,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={
      isWithoutTailwind
        ? "react-checkbox-pro-icon--indeterminate"
        : "transition-transform duration-200"
    }
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
