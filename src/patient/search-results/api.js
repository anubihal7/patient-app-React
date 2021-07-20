import {fetchApi} from "../../_utils/http-utils";


export function getPatientSearchResults(practiceId,searchText, limit, nextPage) {
    let body = {
        searchText: searchText,
        limit: limit || 10,
    }
    if(nextPage){
        body.lastKey=nextPage
    }
    return fetchApi({url: `/practice/${practiceId}/patient/search`, method: "post", body: body}).then(data => {
        if (!data)
            return Promise.resolve([])
        else {
            return Promise.resolve(data)
        }
    }).catch(error => {
        return Promise.resolve([])
    })

}

