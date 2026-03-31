"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme, type ThemeProviderProps } from "next-themes";

const AutoThemeSetter = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // Only auto-set if the user hasn't explicitly set a preference
    if (!localStorage.getItem("theme")) {
      const nigerianHour = parseInt(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Africa/Lagos",
          hour: "numeric",
          hour12: false,
        })
      );
      const isNight = nigerianHour >= 18 || nigerianHour < 6;
      setTheme(isNight ? "dark" : "light");
    }
  }, [setTheme]);

  return null;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider defaultTheme="dark" {...props}>
      <AutoThemeSetter />
      {children}
    </NextThemesProvider>
  );
}
