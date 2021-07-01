import {fetchApi} from "../../_utils/http-utils";


export function getPatientSearchResults(searchText, limit, nextPage) {
    let body = {
        searchText: searchText,
        limit: limit || 10,
        lastKey: nextPage || "1"
    }
    return fetchApi({url: "/practice/123/patient/search", method: "post", body: body}).then(data => {
        if (!data)
            return Promise.resolve([])
        else {
            return Promise.resolve(data)
        }
    }).catch(error => {
        return Promise.resolve([])
    })

}

