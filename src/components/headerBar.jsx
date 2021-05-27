import React from "react";
import { Dropdown } from "react-bootstrap";
import "./style.scss";
import { logoutUser } from "../_actions/persist.action";
import { connect } from "react-redux";

const HeaderBar = (props) => {
  const logout = () => {
    // props.logoutUser();
    // props.history.push("/auth/login");
  };
  return (
    <div className="headerBlock text-left">
      <Dropdown className="headerDropdown">
        <Dropdown.Toggle id="dropdown-basic">Randy</Dropdown.Toggle>
        <Dropdown.Menu>
          {/* <Dropdown.Item onClick={logout}>Logout</Dropdown.Item> */}
          <Dropdown.Item href="#/action-2">Hospital 1</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Hospital 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Hospital 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);

// export default HeaderBar;
