import React from "react";
import PatientInfo from "../../components/patient-info.jsx";
import SearchNav from "../../components/searchNavigation.jsx";
import "./style.scss";
import ClaimInfo from "../components/ClaimInformation.jsx";
import PrintButton from "../components/print-buttons";
import ClaimInfoTable from "./claiminfo-table";
import Comments from "../components/Comments.jsx";
import previous from "../../images/ArrowRight.svg";
import { Button } from "react-bootstrap";

const ClaimInfoContent = (props) => (
  <div className="claimInfo text-left">
    <SearchNav {...props} />
    <PatientInfo />
    <ClaimInfo />
    <ClaimInfoTable />
    <PrintButton />
    <Comments />
    <div className="nextBtnWrap" style={{ padding: "20px" }}>
      <Button className="btn previous" disabled>
        <img src={previous} alt="previous" /> Previous Claim
      </Button>
      <Button className="btn next">
        Next Claim <img src={previous} alt="previous" />
      </Button>
    </div>
  </div>
);

export default ClaimInfoContent;
