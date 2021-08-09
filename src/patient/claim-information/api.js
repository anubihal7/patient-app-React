import {fetchApi} from "../../_utils/http-utils";


export function getClaimInfo(practiceId, patientId, claimId) {

    return fetchApi({
        url: `/practice/${practiceId}/patient/${patientId}/claims/${claimId}`,
        method: "get"
    }).then(data => {
        if (!data)
            return Promise.resolve([])
        else {
            return Promise.resolve(data)
        }
    }).catch(error => {
        return Promise.resolve({})
    })

}


export function getClaimServices(practiceId, patientId, claimId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : ""},
        limit: limit || 10,
        lastKey: nextPage || null
    }
    return fetchApi({
        url: `/practice/${practiceId}/patient/${patientId}/claims/${claimId}/services`,
        method: "post",
        body: body
    }).then(data => {
        if (!data)
            return Promise.resolve([])
        else {
            return Promise.resolve(data)
        }
    }).catch(error => {
        return Promise.resolve([])
    })

}

export function getClaimComments(practiceId, patientId, claimId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : ""},
        limit: limit || 10,
        lastKey: nextPage || null
    }
    return fetchApi({
        url: `/practice/${practiceId}/patient/${patientId}/claims/${claimId}/comments`,
        method: "post",
        body: body
    }).then(data => {
        if (!data)
            return Promise.resolve([])
        else {
            return Promise.resolve(data)
        }
    }).catch(error => {
        return Promise.resolve([])
    })

}
