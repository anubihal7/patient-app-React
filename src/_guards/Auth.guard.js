import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {setJwtToken} from "../_utils/http-utils";

const AuthGuard = ({component: Component, ...rest}) => {
    let {token} = rest;
    let redirectUrl = ""
    try {
        if (Object.keys(token).length === 0) {
            token = JSON.parse(JSON.parse(localStorage["persist:root"]).persist).JwtToken
        }
    } catch (e) {
        localStorage.clear()
        window.location = "/auth/login"
    }
    const isAuthenticated = Object.keys(token).length !== 0;
    if (!isAuthenticated) {
        redirectUrl = `${window.location.pathname}`;
    }
    setJwtToken(token)
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: `/auth/login`,
                            search: `${redirectUrl !== "" ? "?redirectUrl=" + redirectUrl : ""}`,
                            state: {
                                from: props.location,
                            },
                        }}
                    />
                )
            }
        />
    );
};

const mapStateToProps = (state) => {

    return {
        token: state.persist.JwtToken,
    };
};

export default connect(mapStateToProps, null)(AuthGuard);
