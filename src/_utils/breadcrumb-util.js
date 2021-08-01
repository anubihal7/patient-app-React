import {updateCrumb} from "../_actions/persist.action";

export function addCrumb(state, crumb, dispatch) {
    let crumbs = state.persist.breadCrumb
    let index = crumbs.findIndex(obj => obj.identifier === crumb.identifier)
    if (index === -1)
        crumbs.push(crumb)
    else {
        crumbs = crumbs.splice(0, index + 1)
    }
    dispatch(updateCrumb(crumbs))
}

export function clearCrumbs(dispatch) {
    dispatch(updateCrumb([]))
}

export function getBreadCrumb(state) {
    return state.persist.breadCrumb
}
