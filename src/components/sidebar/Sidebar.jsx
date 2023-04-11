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
    <div
      className={
        theme === "dark"
          ? `sidebar dark-box-shadow ${theme}`
          : `sidebar light-box-shadow ${theme}`
      }
    >
      <div className="sidebar--container">
        <div className="sidebar--container--head">
          <img
            src={`${url}edb5-nickx700k.jpg`}
            alt="profile image"
            className="sidebar--container--head--profile"
          />
        </div>
        <div className="sidebar--container--body">
          <div className="sidebar--container--body--category">
            {Categories.map((item, index) => (
              <>
                {theme === "dark" ? (
                  <div
                    onClick={handleCat}
                    key={index}
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
                    key={index}
                    id={item?.title}
                    title={item?.cat}
                    className={
                      item?.cat === active
                        ? `sidebar--container--body--category--item white-color ${
                            item?.cat === active && color
                          }`
                        : `sidebar--container--body--category--item ${
                            item?.cat === active && color
                          }`
                    }
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
