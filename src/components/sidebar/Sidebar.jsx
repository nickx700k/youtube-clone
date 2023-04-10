import React, { useContext, useState } from "react";
import "./Sidebar.scss";
import Categories from "../../json/categories.json";
import { UtilityContext } from "../utility/Provider";

export default function Sidebar() {
  const { handleCategory, handleCate, theme, color } =
    useContext(UtilityContext);
  const [active, setActive] = useState("");

  const handleCat = (e) => {
    handleCategory(e.currentTarget.id);
    handleCate(e.currentTarget.title);
    setActive(e.currentTarget.title);
  };

  return (
    <div className={`sidebar ${theme}`}>
      <div className="sidebar--container">
        <div className="sidebar--container--head">
          <img
            src="https://up.20script.ir/file/edb5-nickx700k.jpg"
            alt="profile image"
            className="sidebar--container--head--profile"
          />
        </div>
        <div className="sidebar--container--body">
          <div className="sidebar--container--body--category">
            {Categories.map((item) => (
              <>
                {theme === "dark" ? (
                  <div
                    onClick={handleCat}
                    key={item?.id}
                    id={item?.title}
                    title={item?.cat}
                    className={`sidebar--container--body--category--item dark-border ${
                      item?.cat === active && color
                    }`}
                  >
                    <span className="sidebar--container--body--category--item--title">
                      {item?.title}
                    </span>
                    <i
                      className={`sidebar--container--body--category--item--icon ${item?.icon}`}
                    ></i>
                  </div>
                ) : (
                  <div
                    onClick={handleCat}
                    key={item?.id}
                    id={item?.title}
                    title={item?.cat}
                    className="sidebar--container--body--category--item"
                  >
                    <span className="sidebar--container--body--category--item--title">
                      {item?.title}
                    </span>
                    <i
                      className={`sidebar--container--body--category--item--icon ${item?.icon}`}
                    ></i>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}