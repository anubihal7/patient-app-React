import {fetchApi} from "../../_utils/http-utils";


export function getDownloadableLink(practiceId,patientId,docId) {

    return fetchApi({url:`/practice/${practiceId}/patient/${patientId}/documents/${docId}`, method: "get"}).then(data => {
        if (!data)
            return Promise.resolve({})
        else {
            return Promise.resolve(data)
        }
    }).catch(error => {
        return Promise.resolve({})
    })

}

