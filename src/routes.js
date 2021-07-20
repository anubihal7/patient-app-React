import React, {Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import AppLoading from "./components/app-loading.jsx";
import PDFViewerContainer from "./patient/pdf-viewer/pdf-viewer-container.jsx";
import AuthGuard from "./_guards/Auth.guard";
import LoadingOverlay from "react-loading-overlay";
import {useSelector} from "react-redux";

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
const NewPasswordContainerCognito = React.lazy(() =>
    import("./auth/newPasswordCognito/newPassword-container-cognito.jsx")
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
const PatientContainer = React.lazy(() =>
    import("./patient/patient-details/patient-container.jsx")
);
const ClaimInfoContainer = React.lazy(() =>
    import("./patient/claim-information/claimInfo-container.jsx")
);

function Routes() {

    let loadingState = useSelector((state) => state.user.loading);
    return (
        <React.Fragment>
            <div>
                <LoadingOverlay
                    active={loadingState}
                    spinner
                    text='Please wait...'
                >
                    <Suspense fallback={<AppLoading/>}>
                        <Switch>
                            <Route exact path="/auth/login" component={LoginContainer}/>
                            <Route
                                exact
                                path="/auth/forgot-password"
                                component={ResetContainer}
                            />
                            <Route exact path="/auth/email" component={EmailContainer}/>
                            <Route
                                exact
                                path="/auth/new-password"
                                component={NewPasswordContainer}
                            />
                            <Route
                                exact
                                path="/auth/new-password-cognito"
                                component={NewPasswordContainerCognito}
                            />
                            <Route exact path="/auth/allset" component={AllSetContainer}/>
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
                            <AuthGuard
                                exact
                                path="/practice/:practiceId/patient/:patientId"
                                component={PatientContainer}
                            />
                            <AuthGuard
                                exact
                                path="/practice/:practiceId/patient/:patientId/details/:type"
                                component={PatientContainer}
                            />
                            <AuthGuard
                                exact
                                path="/practice/:practiceId/patient/:patientId/details/claims/:claimId"
                                component={ClaimInfoContainer}
                            />
                            <AuthGuard
                                exact
                                path="/practice/:practiceId/patient/:patientId/details/documents/:documentId"
                                component={PDFViewerContainer}
                            />
                            {/* PDFViewerContainer */}
                            <Redirect exact from="/" to="auth/login"/>
                        </Switch>
                    </Suspense>
                </LoadingOverlay>
            </div>
        </React.Fragment>
    );
}

export default Routes;
