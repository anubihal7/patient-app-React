import {fetchApi} from "../../_utils/http-utils";


export function getUserProfile() {

    return fetchApi({url: "/profile", method: "get"}).then(data => {
        if (!data)
            return Promise.resolve([])
        else {
            return Promise.resolve(data)
        }
    }).catch(error => {
        return Promise.resolve([])
    })

}

