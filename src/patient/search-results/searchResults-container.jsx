import React from "react";
import HeaderBar from "../../components/headerBar";
import LeftSidebar from "../../components/leftSidebar";
import SearchBlock from "../../components/searchBlock";
import SearchResultsContant from "./searchResults-content";
import "../patient-dashboard/style.scss";
import ErrorBlock from "../../components/errorBlock";
const SearchResultsContainer = (props) => {
  const onKeyUp = (e) => {};
  return (
    <div className="dashboardMainBlock">
      <div className="dashboardLeftBlock">
        <LeftSidebar {...props} />
      </div>
      <div className="dashboardRightBlock">
        <HeaderBar {...props}/>
        <SearchBlock onKeyUpMethod={onKeyUp} {...props} />
          <ErrorBlock {...props}/>
        <SearchResultsContant />
      </div>
    </div>
  );
};

export default SearchResultsContainer;
