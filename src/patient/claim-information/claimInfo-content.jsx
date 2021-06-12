import React from "react";
import PatientInfo from "../../components/patient-info.jsx";
import SearchNav from "../../components/searchNavigation.jsx";
import "./style.scss";
import ClaimInfo from "../components/ClaimInformation.jsx";
import PrintButton from "../components/print-buttons";
import ClaimInfoTable from "./claiminfo-table";
import Comments from "../components/Comments.jsx";

const ClaimInfoContent = (props) => (
  <div className="claimInfo text-left">
    <SearchNav {...props} />
    <PatientInfo />
    <ClaimInfo />
    <ClaimInfoTable />
    <PrintButton />
    <Comments />
  </div>
);

export default ClaimInfoContent;
