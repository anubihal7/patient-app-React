import moment from "moment";
import { useState } from "react";

export const getFullName = (user) => {
    return user ? `${user.lastName ? user.lastName + ", " : ""}${user.firstName ? user.firstName + " " : ""}${user.middleName ? user.middleName : ""}` : "N/A"
}


export const getFormattedDate = (date) => {
    return moment(date).format("MM/DD/YYYY")
}

export const getDateForDocs = (dateObj) => {
    return dateObj[0] + "/" + dateObj[1] + "/" + dateObj[2]
}
export const getSpecificFormatDate = (dateObj) => {
    if(!dateObj)
        return ""
    let split = dateObj.split('-')
    return split[1] + "/" + split[2] + "/" + split[0]
}


export const getTimeForAppointments = (time) => {
    return moment(time).format("h:MM A")
}

export const getNameFromEmail = (email) => {
    if (!email)
        return ""
    return email.slice(0, email.indexOf("@"))
}
export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    };
};
