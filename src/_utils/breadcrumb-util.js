import {updateCrumb} from "../_actions/persist.action";

export function addCrumb(crumb, dispatch, updateName) {
    let crumbs = JSON.parse(JSON.parse(localStorage["persist:root"]).persist).breadCrumb
    let index = crumbs.findIndex(obj => obj.identifier === crumb.identifier)
    if (index === -1)
        crumbs.push(crumb)
    else if (!crumb.keepPos) {
        crumbs = crumbs.splice(0, index + 1)
    }
    if (updateName&&index !== -1) {
        crumbs[index].name = crumb.name
    }
    dispatch(updateCrumb(crumbs))

}


export function clearCrumbs(dispatch) {
    dispatch(updateCrumb([]))

}

export function getBreadCrumb() {
    return JSON.parse(JSON.parse(localStorage["persist:root"]).persist).breadCrumb
}
