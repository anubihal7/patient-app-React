import {fetchApi} from "../../_utils/http-utils";


export function getPatientDetails(practiceId,patientId) {
    return fetchApi({url: `/practice/${practiceId}/patient/${patientId}`, method: "get"}).then(data => {
        if (!data)
            return Promise.resolve([])
        else {
            return Promise.resolve(data)
        }
    }).catch(error => {
        return Promise.resolve([])
    })

}

export function getPatientContacts(practiceId,patientId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : ""},
        limit: limit || 10,
        lastKey: nextPage || null
    }
    return fetchApi({
        url: `/practice/${practiceId}/patient/${patientId}` + "/contacts",
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

export function getPatientDocuments(practiceId,patientId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : "", additonal: true},
        limit: limit || 10,
        lastKey: nextPage || null
    }
    return fetchApi({
        url: `/practice/${practiceId}/patient/${patientId}` + "/documents",
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

export function getPatientInsurances(practiceId,patientId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : "", additonal: true},
        limit: limit || 10,
        lastKey: nextPage || null
    }
    return fetchApi({
        url: `/practice/${practiceId}/patient/${patientId}`+ "/insurances",
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

export function getPatientAppointments(practiceId,patientId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : ""},
        limit: limit || 10,
        lastKey: nextPage || null
    }
    return fetchApi({
        url: `/practice/${practiceId}/patient/${patientId}`+ "/appointments",
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

export function getPatientClaims(practiceId,patientId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : ""},
        limit: limit || 10,
        lastKey: nextPage || null
    }
    return fetchApi({
        url: `/practice/${practiceId}/patient/${patientId}`+ "/claims",
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

export function getPatientClinicals(practiceId,patientId, searchText, limit, nextPage) {
    let body = {
        filters: {searchText: searchText ? searchText : ""},
        limit: limit || 10,
        lastKey: nextPage || null
    }
    return fetchApi({
        url: `/practice/${practiceId}/patient/${patientId}` + "/clinicals",
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
