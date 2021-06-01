import React from "react";
import PatientInfo from "../../components/patient-info.jsx";
import SearchNav from "../../components/searchNavigation.jsx";
import "./style.scss";
import ClaimInfo from "../components/ClaimInformation.jsx";
import PrintButton from "../components/print-buttons";
import ClaimInfoTable from "./claiminfo-table";

const ClaimInfoContent = () => (
  <div className="claimInfo text-left">
    <SearchNav />
    <PatientInfo />
    <ClaimInfo />
    <ClaimInfoTable />
    <PrintButton/>
  </div>
);

export default ClaimInfoContent;
