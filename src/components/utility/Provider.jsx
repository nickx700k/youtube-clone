import { createContext, useState } from "react";

export const UtilityContext = createContext({
  cat: "New",
  handleCategory: (cate) => {},
  cats: "new",
  handleCate: (cat) => {},
  theme: "light",
  handleThemeMode: (mode) => {},
  color: "red",
  handleThemeColor: (color) => {},
  active: "0",
  handleActive: (index) => {},
});

export default function Provider({ children }) {
  const [cat, setCat] = useState("New");
  const [cats, setCats] = useState("new");
  const [theme, setTheme] = useState("dark");
  const [color, setColor] = useState("red");

  const handleCategory = (cate) => {
    setCat(cate);
  };

  const handleCate = (cat) => {
    setCats(cat);
  };

  const handleThemeMode = (mode) => {
    setTheme(mode);
  };

  const handleThemeColor = (color) => {
    setColor(color);
  };

  return (
    <UtilityContext.Provider
      value={{
        cat,
        handleCategory,
        cats,
        handleCate,
        theme,
        handleThemeMode,
        color,
        handleThemeColor,
      }}
    >
      {children}
    </UtilityContext.Provider>
  );
}
