import React, { useContext } from "react";
import "./Theme.scss";
import { UtilityContext } from "../utility/Provider";

const Theme = () => {
  const { theme, handleThemeMode, handleThemeColor } =
    useContext(UtilityContext);

  const themeModeCallection = [
    {
      name: "light",
      background: "#fff",
    },
    {
      name: "dark",
      background: "var(--black-color)",
    },
  ];

  const themeColorCallection = [
    {
      name: "blue",
      color: "var(--blue-color)",
    },
    {
      name: "red",
      color: "var(--red-color)",
    },
    {
      name: "green",
      color: "var(--green-color)",
    },
    {
      name: "orange",
      color: "var(--orange-color)",
    },
    {
      name: "pink",
      color: "var(--pink-color)",
    },
  ];

  const handleMode = (mode) => {
    handleThemeMode(mode);
  };

  const handleColor = (color) => {
    handleThemeColor(color);
  };

  return (
    <div className="theme">
      <div className="theme--container">
        <div className="theme--container--mode">
          <h2
            className={
              theme === "light"
                ? `theme--container--mode--h2`
                : `theme--container--mode--h2 white-color`
            }
          >
            Theme Mode
          </h2>
          <div className="theme--container--mode--items">
            {themeModeCallection.map((item, index) => (
              <input
                key={index}
                type="button"
                onClick={() => handleMode(item.name)}
                style={{ backgroundColor: item.background }}
                className="theme--container--mode--items--button"
              />
            ))}
          </div>
        </div>
        <div className="theme--container--color">
          <h2
            className={
              theme === "light"
                ? `theme--container--color--h2`
                : `theme--container--color--h2 white-color`
            }
          >
            Theme Color
          </h2>
          <div className="theme--container--color--items">
            {themeColorCallection.map((item, index) => (
              <input
                key={index}
                type="button"
                onClick={() => handleColor(item.name)}
                style={{ backgroundColor: item.color }}
                className="theme--container--color--items--button"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
