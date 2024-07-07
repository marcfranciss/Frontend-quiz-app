import React, { createContext, useState } from "react";

export const ThemeContext = createContext<any>({
  theme: "light-theme",
  undefined,
}); //undefined will be the switch theme function

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light-theme");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
