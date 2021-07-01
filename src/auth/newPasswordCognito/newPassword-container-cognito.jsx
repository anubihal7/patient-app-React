import React from "react";
import NewPasswordFormCognito from "./newPassword-form-cognito.jsx";
import AuthRightSection from "../../components/auth-rightSection.jsx";
import "../login/loginStyle.scss";
import "../authStyle.scss";
import logo from "../../images/logo.svg";
import {connect} from "react-redux";

const NewPasswordContainerCognito = (props) => {
  return (
    <div className="authPagesmainBlock">
      <div className="leftBlock">
        <div className="logoWrap text-left">
          <img src={logo} alt="Logo" />
        </div>
        <NewPasswordFormCognito {...props}/>
        <div className="bottomLinks text-left hidd">
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
)(NewPasswordContainerCognito);

// export default ;
