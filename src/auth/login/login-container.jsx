import React, { useState } from "react";
import LoginForm from "./login-form.jsx";
import AuthRightSection from "../../components/auth-rightSection.jsx";
import "./loginStyle.scss";
import "../authStyle.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { isEqual } from "lodash";
import { connect } from "react-redux";
import { saveUserToken } from "../../_actions/persist.action.js";
import { Redirect } from "react-router-dom";

let creds = {
  username: "randy",
  password: "123456",
};

const LoginContainer = (props) => {
  let { token } = props;
  const [err, setErr] = useState(false);
  const handleSubmit = (e) => {
    setErr(false);

    if (isEqual(e, creds)) {
      props.loginUser("tokendemo");
      props.history.push("/patient/dashboard");
    } else {
      setErr(true);
    }
  };

  if (token["JwtToken"].length > 0) {
    return <Redirect to={"/patient/dashboard"} />;
  }
  return (
    <div className="authPagesmainBlock">
      <div className="leftBlock">
        <div className="logoWrap text-left">
          <img src={logo} alt="Logo" />
        </div>

        <LoginForm isError={err} onSubmit={handleSubmit} />
        <div className="bottomLinks text-left">
          <Link className="forget" to="/auth/forgot-password">
            Forgot My Password
          </Link>
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
// export default LoginContainer;

const mapStateToProps = (state) => {
  return {
    token: state.persist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (values) => dispatch(saveUserToken(values)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
