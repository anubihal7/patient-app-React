import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    console.log("called", props);
    if (props.location.search && props.location.search.includes("searchKey")) {
      let search = props.location.search;
      let key = search.substr(search.indexOf("=") + 1);
      setSearchKey(key);
    }
  }, []);

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
