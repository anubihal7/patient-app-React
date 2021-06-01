import React, { useEffect, useState } from "react";
import PatientInfo from "../../components/patient-info.jsx";
import SearchNav from "../../components/searchNavigation.jsx";
import Claims from "../components/Claims.jsx";
import Tab from "../../components/tabs.jsx";
import Demographies from "../components/Demographies.jsx";
import "./style.scss";

const PatientContent = (props) => {
  let [tabSelection, setTabSelection] = useState("demographics");

  useEffect(() => {
    console.log(props);
    let pageType = props.match.params.type;
    setTabSelection(pageType);
  }, []);

  const getTabSelection = (tab) => {
    setTabSelection(tab);
  };
  return (
    <div className="patientContant text-left">
      <SearchNav />
      <PatientInfo />
      <Tab
        {...props}
        tabSelection={tabSelection}
        getTabSelection={getTabSelection}
      />
      {tabSelection == "demographics" && <Demographies />}
      {tabSelection == "claims" && <Claims />}
    </div>
  );
};

export default PatientContent;
