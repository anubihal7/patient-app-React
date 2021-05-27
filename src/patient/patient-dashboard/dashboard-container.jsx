import React, { useState } from "react";
import HeaderBar from "../../components/headerBar";
import LeftSidebar from "../../components/leftSidebar";
import SearchBlock from "../../components/searchBlock";
import DashboardContent from "./dashboard-content";
import SearchResultsContent from "../search-results/searchResults-content";
import "../patient-dashboard/style.scss";
import "./style.scss";
const DashboardContainer = (props) => {
  const [searchKey, setSearchKey] = useState("");
  const onKeyUp = (e) => {
    setSearchKey(e.target.value);
  };
  return (
    <div className="dashboardMainBlock">
      <div className="dashboardLeftBlock">
        <LeftSidebar {...props} />
      </div>
      <div className="dashboardRightBlock">
        <HeaderBar {...props} />
        <SearchBlock onKeyUpMethod={onKeyUp} {...props} />
        {searchKey === "" ? (
          <DashboardContent />
        ) : (
          <SearchResultsContent searchKey={searchKey} {...props} />
        )}
      </div>
    </div>
  );
};

export default DashboardContainer;
