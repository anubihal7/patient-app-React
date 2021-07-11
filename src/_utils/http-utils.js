import config from "../config";
import {decode as jwtDecode} from "jsonwebtoken";

let jwtToken = null;


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
    }  else {
        localStorage.clear()
        window.location="/auth/login"
       return
    }
    return fetch(`${config.app.BASE_API_URL}${url}`, {
        method,
        body,
        headers
    }).then(response => {
        switch (response.status) {
            case 401:
                //move to login page here and log user out
                localStorage.clear()
                window.location="/auth/login"
                return
            case 200:
                return Promise.resolve(response.json())
            default:
                return Promise.reject({error: response.json(), status: response.status})
        }

    }).catch(err => {
        console.log("err>>", err)
        return Promise.reject({error: err, status: 503})
    });
};

export const setJwtToken = token => {
    jwtToken = token;
};
