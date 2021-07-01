import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {setJwtToken} from "../_utils/http-utils";

const AuthGuard = ({ component: Component, ...rest }) => {
  const { token } = rest;
  const isAuthenticated = Object.keys(token).length !== 0 ? true : false;
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
              pathname: "/auth/login",
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
