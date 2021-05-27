import React from "react";
import NewPasswordForm from "./newPassword-form.jsx";
import AuthRightSection from "../../components/auth-rightSection.jsx";
import "../login/loginStyle.scss";
import "../authStyle.scss";
import logo from "../../images/logo.svg";
// import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const NewPasswordContainer = (props) => {
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
        <NewPasswordForm />
        <div className="bottomLinks text-left">
          <a href="#" className="forget">
            Forgot password?
          </a>
          <span className="account">
            <a href="#">Don’t have an account?</a>Request an invite.
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPasswordContainer);

// export default ;
