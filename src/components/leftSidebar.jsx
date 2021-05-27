import React from "react";
import "./style.scss";
import logo from "../images/logo.svg";
import { logoutUser } from "../_actions/persist.action";
import { connect } from "react-redux";
const LeftSidebar = (props) => {
  const logout = () => {
    props.logoutUser();
    props.history.push("/auth/login");
  };

  return (
    <div className="leftSideBar text-left">
      <img src={logo} alt="Logo" />
      <div className="leftSideTabs">
        <ul className="sideBarList">
          <li>
            <a className="active">Patients</a>
          </li>
          <li>
            <a>Reports</a>
          </li>
        </ul>
        <p className="signOutbtn">
          Signed in as Randy
          <a onClick={logout} style={{ cursor: "pointer" }}>
            Sign out
          </a>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.persist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);

// export default LeftSidebar;
