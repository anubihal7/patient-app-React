import React, {useState} from "react";
import LoginForm from "./login-form.jsx";
import AuthRightSection from "../../components/auth-rightSection.jsx";
import "./loginStyle.scss";
import "../authStyle.scss";
import logo from "../../images/logo.svg";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {saveUserToken} from "../../_actions/persist.action.js";
import {Auth} from "aws-amplify";
import {setLoadingState} from "../../_actions/User.action";

const LoginContainer = (props) => {
    let {token} = props;
    const [err, setErr] = useState("");
    const handleSubmit = async (formObj) => {
        setErr("");

        try {
            props.setLoading(true)
            let data = await Auth.signIn(formObj.username, formObj.password);
            props.setLoading(false)
            props.loginUser({token: data.signInUserSession.idToken.jwtToken});
            props.history.push("/patient/dashboard");
        } catch (e) {
            setErr(e.message)
        }

    };

    if (token["JwtToken"].length > 0) {
        if (props.location.search && props.location.search.includes("redirectUrl")) {
            let search = props.location.search;
            let key = search.substr(search.indexOf("=") + 1);
            console.log("key>>>", key)
            return <Redirect to={key}/>;
        }
        return <Redirect to={"/patient/dashboard"}/>;
    }
    return (
        <div className="authPagesmainBlock">
            <div className="leftBlock">
                <div className="logoWrap text-left">
                    <img src={logo} alt="Logo"/>
                </div>

                <LoginForm errorMessage={err} onSubmit={handleSubmit}/>
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
                <AuthRightSection/>
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
        loginUser: (values) => {
            dispatch(saveUserToken(values.token))
        },
        setLoading: (values) => {
            dispatch(setLoadingState(values))
        },
        dispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
