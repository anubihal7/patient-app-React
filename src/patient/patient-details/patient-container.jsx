import React from "react";
import HeaderBar from "../../components/headerBar";
import LeftSidebar from "../../components/leftSidebar";
import SearchBlock from "../../components/searchBlock";
import PatientContant from "./patient-contant";
import "../patient-dashboard/style.scss";

const PatientContainer = (props) => (
  <div className="dashboardMainBlock">
    <div className="dashboardLeftBlock">
      <LeftSidebar {...props} />
    </div>
    <div className="dashboardRightBlock">
      <HeaderBar />
      <SearchBlock />
      <PatientContant {...props} />
    </div>
  </div>
);

export default PatientContainer;
