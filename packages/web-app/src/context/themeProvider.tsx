import {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children?: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Get theme from DOM data-theme or fallback to system preference or light
  const getInitialTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") return "light";

    const domTheme = document.documentElement.getAttribute("data-theme");
    if (domTheme === "dark" || domTheme === "light") return domTheme;

    // fallback to system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  // Update DOM data-theme when theme state changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  // Listen for system preference changes and sync theme
  useEffect(() => {
    if (!window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const systemThemeChangeHandler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", systemThemeChangeHandler);

    return () => {
      mediaQuery.removeEventListener("change", systemThemeChangeHandler);
    };
  }, []);

  // Toggle theme manually
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};
