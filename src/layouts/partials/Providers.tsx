"use client";

import config from "@/config/config.json";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { UiContextProvider } from "@/app/context/UiContext";

const Providers = ({ children }: { children: ReactNode }) => {
  const { default_theme } = config.settings;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={default_theme}
      enableColorScheme={false}
    >
      <UiContextProvider>{children}</UiContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
