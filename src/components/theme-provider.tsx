"use client";

import { ThemeProvider } from "next-themes";

export default function Provider({
  children,
  ...props
}: React.ComponentProps<typeof ThemeProvider>) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
