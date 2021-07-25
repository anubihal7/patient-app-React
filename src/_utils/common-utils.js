import moment from "moment";
import { useState } from "react";

export const getFullName = (user) => {
    return user ? `${user.lastName ? user.lastName + ", " : ""}${user.firstName ? user.firstName + " " : ""}${user.middleName ? user.middleName : ""}` : "-"
}

export const getFormattedDate = (date) => {
return moment(date).format("DD/MM/YYYY")
}

export const getDateForDocs= (dateObj) => {
    return dateObj[0]+"/"+dateObj[1]+"/"+dateObj[2]
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
