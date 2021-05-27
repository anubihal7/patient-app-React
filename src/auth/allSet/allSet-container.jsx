import React from "react";
import AllSetForm from "./allSet-form.jsx";
import AuthRightSection from "../../components/auth-rightSection.jsx";
import "../login/loginStyle.scss";
import "../authStyle.scss";
import logo from "../../images/logo.svg";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AllSetContainer = (props) => {
  let { token } = props;
  if (token["JwtToken"].length > 0) {
    return <Redirect to={"/patient/dashboard"} />;
  }
  return (
    <div className="authPagesmainBlock">
      <div className="leftBlock">
        <div className="logoWrap text-left">
          <img src={logo} alt="Logo" />
        </div>

        <AllSetForm />
        <div className="bottomLinks text-left ">
          <a className="forget">Forgot password?</a>
          <span className="account">
            <a>Don’t have an account?</a>Request an invite.
          </span>
        </div>
      </div>
      <div className="rightBlock">
        <AuthRightSection />
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AllSetContainer);
