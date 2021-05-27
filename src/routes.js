import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AppLoading from "./components/app-loading.jsx";
import AuthGuard from "./_guards/Auth.guard";
const LoginContainer = React.lazy(() =>
  import("./auth/login/login-container.jsx")
);
const ResetContainer = React.lazy(() =>
  import("./auth/resetPassword/resetPassword-container.jsx")
);
const EmailContainer = React.lazy(() =>
  import("./auth/email/email-container.jsx")
);
const NewPasswordContainer = React.lazy(() =>
  import("./auth/newPassword/newPassword-container.jsx")
);
const AllSetContainer = React.lazy(() =>
  import("./auth/allSet/allSet-container.jsx")
);
const DashboardContainer = React.lazy(() =>
  import("./patient/patient-dashboard/dashboard-container.jsx")
);
const SearchResultsContainer = React.lazy(() =>
  import("./patient/search-results/searchResults-container.jsx")
);

function Routes() {
  return (
    <React.Fragment>
      <Suspense fallback={<AppLoading />}>
        <Switch>
          <Route exact path="/auth/login" component={LoginContainer} />
          <Route
            exact
            path="/auth/forgot-password"
            component={ResetContainer}
          />
          <Route exact path="/auth/email" component={EmailContainer} />
          <Route
            exact
            path="/auth/new-password"
            component={NewPasswordContainer}
          />
          <Route exact path="/auth/allset" component={AllSetContainer} />
          <AuthGuard
            exact
            path="/patient/dashboard"
            component={DashboardContainer}
          />
           <AuthGuard
            exact
            path="/patient/result"
            component={SearchResultsContainer}
          />
          <Redirect exact from="/" to="auth/login" />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default Routes;
