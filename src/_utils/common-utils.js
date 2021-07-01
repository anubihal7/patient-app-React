export const getFullName = (user) => {
    return user ? `${user.lastName ? user.lastName + ", " : ""}${user.firstName ? user.firstName + " " : ""}${user.middleName ? user.middleName : ""}` : "-"
}

export const getFormattedDate = (date) => {

}
