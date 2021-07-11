import React from "react";
import PatientInfo from "../../components/patient-info.jsx";
import SearchNav from "../../components/searchNavigation.jsx";
import "./style.scss";
import ClaimInfo from "../components/ClaimInformation.jsx";
import ClaimInfoTable from "./claiminfo-table";
import Comments from "../components/Comments.jsx";

const ClaimInfoContent = (props) => {
    return (
        <div className="claimInfo text-left">
            <SearchNav {...props} />
            <PatientInfo {...props} />
            <ClaimInfo {...props}/>
            <ClaimInfoTable {...props}/>
            <Comments {...props}/>
        </div>
    );
}

export default ClaimInfoContent;
