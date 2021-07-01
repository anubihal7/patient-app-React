import React, { useEffect, useState } from "react";
import "./style.scss";
import smallArrow from "../images/smallArrow.svg";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

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

      {props.searchKey && (
        <React.Fragment>
          <a href="" className="active">
              Search results for “{props.searchKey}”
          </a>
        </React.Fragment>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
    return {
        searchKey: state.persist.searchKey,
    };
};

export default connect(mapStateToProps, null)(SearchNav);
