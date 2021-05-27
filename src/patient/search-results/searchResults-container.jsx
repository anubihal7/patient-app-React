import React from "react";
import HeaderBar from "../../components/headerBar";
import LeftSidebar from "../../components/leftSidebar";
import SearchBlock from "../../components/searchBlock";
import SearchResultsContant from "./searchResults-content";
import "../patient-dashboard/style.scss";
const SearchResultsContainer = (props) => {
  const onKeyUp = (e) => {};
  return (
    <div className="dashboardMainBlock">
      <div className="dashboardLeftBlock">
        <LeftSidebar />
      </div>
      <div className="dashboardRightBlock">
        <HeaderBar />
        <SearchBlock onKeyUpMethod={onKeyUp} {...props} />
        <SearchResultsContant />
      </div>
    </div>
  );
};

export default SearchResultsContainer;
