import config from "../config";
import {decode as jwtDecode} from "jsonwebtoken";
import {Auth} from "aws-amplify";
import {errorOccurred} from "../_actions/persist.action";

let jwtToken = null;
let localDispatch

export const fetchApi = async (params) => {
    const {url, method} = params;

    let headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    };

    let body = params.body ? JSON.stringify(params.body) : null;

    const decodedToken = jwtToken ? jwtDecode(jwtToken) : null;
    const tokenExpiresAt = decodedToken ? decodedToken.exp * 1000 : null;
    if (jwtToken && tokenExpiresAt && tokenExpiresAt > new Date().getTime()) {
        headers["smauthorization"] = jwtToken;
    } else {
        let session = await Auth.currentSession()
        if (!session) {
            localStorage.clear()
            window.location = "/auth/login"
            return
        }
        jwtToken = session.idToken.jwtToken
        headers["smauthorization"] = jwtToken;
    }
    return fetch(`${config.app.BASE_API_URL}${url}`, {
        method,
        body,
        headers
    }).then(async response => {
        let error
        switch (response.status) {
            case 401:
                //move to login page here and log user out
                localStorage.clear()
                window.location = "/auth/login"
                return
            case 403:
                error = await response.json()
                if (localDispatch) {
                    localDispatch(errorOccurred(error.Error))
                }
                return Promise.reject({error: error, status: response.status})
            case 200:
                return Promise.resolve(response.json())
            default:
                error = await response.json()
                if (localDispatch) {
                    localDispatch(errorOccurred(error.Error))
                }
                return Promise.reject({error: error, status: response.status})
        }

    }).catch(err => {
        return Promise.reject({
            error: err.error ? err.error : "Unknown error occurred.",
            status: err.status ? err.status : 503
        })
    });
};

export const setJwtToken = (token, dispatch) => {
    jwtToken = token;
    localDispatch = dispatch
};
