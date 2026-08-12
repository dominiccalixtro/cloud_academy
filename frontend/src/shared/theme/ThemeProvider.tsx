import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


type Theme = "dark" | "light";


interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}


const ThemeContext =
  createContext<ThemeContextType | null>(null);



export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {


  const [theme, setTheme] =
    useState<Theme>(() => {

      const saved =
        localStorage.getItem("theme");

      return saved === "light"
        ? "light"
        : "dark";

    });



  useEffect(() => {

    const root =
      document.documentElement;


    if (theme === "dark") {

      root.classList.add(
        "dark"
      );

    } else {

      root.classList.remove(
        "dark"
      );

    }


    localStorage.setItem(
      "theme",
      theme
    );


  }, [theme]);





  function toggleTheme() {

    setTheme(
      current =>
        current === "dark"
          ? "light"
          : "dark"
    );

  }





  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>

  );

}




export function useTheme() {

  const context =
    useContext(
      ThemeContext
    );


  if (!context) {

    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );

  }


  return context;

}