import React from "react";
import HeaderBar from "../../components/headerBar";
import LeftSidebar from "../../components/leftSidebar";
import SearchBlock from "../../components/searchBlock";
import ClaimInfoContent from "./claimInfo-content.jsx";
import "../patient-dashboard/style.scss";
import ErrorBlock from "../../components/errorBlock";

const ClaimInfoContainer = (props) => (

    <div className="dashboardMainBlock">
        <div className="dashboardLeftBlock">
            <LeftSidebar {...props} />
        </div>
        <div className="dashboardRightBlock">
            <HeaderBar {...props}/>
            <SearchBlock {...props} />
            <ErrorBlock {...props}/>
            <ClaimInfoContent {...props} />
        </div>
    </div>
);

export default ClaimInfoContainer;
