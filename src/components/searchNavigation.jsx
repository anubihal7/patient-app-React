import React, { useEffect, useState } from "react";
import "./style.scss";
import smallArrow from "../images/smallArrow.svg";
import { Link } from "react-router-dom";

const SearchNav = (props) => {
  const [pathName, setPathName] = useState("");
  useEffect(() => {
    setPathName(props.match.path);
  }, []);

  return (
    <div className="componentTree text-left">
      {/* <a href="">Home</a> */}
      <Link to="/patient/dashboard">Home</Link>
      <img src={smallArrow} alt="arrow" />
      {/* <a
        className={pathName.includes("/patient/claiminfo") ? "" : "active"}
      >
        Search results for “Walker”
      </a> */}
      {!pathName.includes("/patient/claiminfo") && (
        <Link className="active" to="/patient/details/claims">
          Search results for “Walker”
        </Link>
      )}
      {pathName.includes("/patient/claiminfo") && (
        <React.Fragment>
          <Link to="/patient/details/claims">Search results for “Walker”</Link>
          <img src={smallArrow} alt="arrow" />
          <a href="" className="active">
            Clain Information
          </a>
        </React.Fragment>
      )}
    </div>
  );
};

export default SearchNav;
