import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";

// 1. Define the Atmosphere (Context Object)
export type Theme = "default" | "midnight" | "emerald" | "solarized";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Define the Ventilation System (Provider)
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("app-theme") as Theme;
    return saved || "default";
  });

  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* 3. Distribute the atmosphere to the entire tree */}
      <div className={`theme-${theme}`} style={{ minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 4. Custom Hook — the "Receiver"
export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useAppTheme must be used within a ThemeProvider");
  return context;
};
