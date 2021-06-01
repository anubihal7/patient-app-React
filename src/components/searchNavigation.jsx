import React from "react";
import "./style.scss";
import smallArrow from "../images/smallArrow.svg";
const SearchNav = () => (
    <div className="componentTree text-left">
        <a href="">Home</a>
        <img src={smallArrow} alt="arrow" />
        <a href="" className="active">Search results for “Walker”</a>
    </div>
);

export default SearchNav;
