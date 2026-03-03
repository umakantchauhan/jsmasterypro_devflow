"use client";

import { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

// The ThemeProvider wrapper is a client component which allows next-themes
// to manage the `class` attribute on the <html> element and read the
// user's system preference. The directive above ensures this file is
// treated as a client component; otherwise the dark mode logic would be
// skipped during hydration.

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
