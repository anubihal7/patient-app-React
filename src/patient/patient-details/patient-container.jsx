import React from "react";
import HeaderBar from "../../components/headerBar";
import LeftSidebar from "../../components/leftSidebar";
import SearchBlock from "../../components/searchBlock";
import PatientContant from "./patient-contant";
import "../patient-dashboard/style.scss";
import ErrorBlock from "../../components/errorBlock";

const PatientContainer = (props) => (
  <div className="dashboardMainBlock">
    <div className="dashboardLeftBlock">
      <LeftSidebar {...props} />
    </div>
    <div className="dashboardRightBlock">
      <HeaderBar {...props} />
      <SearchBlock {...props} />
        <ErrorBlock {...props}/>
      <PatientContant {...props} />
    </div>
  </div>
);

export default PatientContainer;
