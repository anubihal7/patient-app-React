import {fetchApi} from "../../_utils/http-utils";


export function getPatientDetails(patientId) {
    return fetchApi({url: "/practice/123/patient/" + patientId, method: "get"}).then(data => {
        if (!data)
            return Promise.resolve([])
        else {
            return Promise.resolve(data)
        }
    }).catch(error => {
        return Promise.resolve([])
    })

}

export function getPatientContacts(patientId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : ""},
        limit: limit || 10,
        lastKey: nextPage || "1"
    }
    return fetchApi({
        url: "/practice/123/patient/" + patientId + "/contacts",
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

export function getPatientDocuments(patientId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : "", additonal: true},
        limit: limit || 10,
        lastKey: nextPage || "1"
    }
    return fetchApi({
        url: "/practice/123/patient/" + patientId + "/documents",
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

export function getPatientInsurances(patientId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : "", additonal: true},
        limit: limit || 10,
        lastKey: nextPage || "1"
    }
    return fetchApi({
        url: "/practice/123/patient/" + patientId + "/insurances",
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

export function getPatientAppointments(patientId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : ""},
        limit: limit || 10,
        lastKey: nextPage || "1"
    }
    return fetchApi({
        url: "/practice/123/patient/" + patientId + "/appointments",
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

export function getPatientClaims(patientId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : ""},
        limit: limit || 10,
        lastKey: nextPage || "1"
    }
    return fetchApi({
        url: "/practice/123/patient/" + patientId + "/claims",
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

export function getPatientClinicals(patientId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : ""},
        limit: limit || 10,
        lastKey: nextPage || "1"
    }
    return fetchApi({
        url: "/practice/123/patient/" + patientId + "/clinicals",
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
