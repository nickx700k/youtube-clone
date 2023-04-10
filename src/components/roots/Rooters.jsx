import React from "react";
import "./Rooters.scss";
import SideBar from "../sidebar/Sidebar";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Search from "../../pages/search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "../theme/Theme";
export default function Rooters() {
  return (
    <div className="rooters">
      <BrowserRouter>
        <SideBar />
        <Theme />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
