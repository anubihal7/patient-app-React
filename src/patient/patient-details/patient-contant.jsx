import React, { useEffect, useState } from "react";
import PatientInfo from "../../components/patient-info.jsx";
import SearchNav from "../../components/searchNavigation.jsx";
import Claims from "../components/Claims.jsx";
import Tab from "../../components/tabs.jsx";
import Demographies from "../components/Demographies.jsx";
import "./style.scss";
import Contacts from "../components/Contacts.jsx";
import Documents from "../components/Documents.jsx";
import Insurances from "../components/Insurances.jsx";
import Appointments from "../components/Appointments.jsx";
import Clinicals from "../components/Clinicals.jsx";
import PaginationBlock from "../components/Pagination.jsx";

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
      <SearchNav {...props} />
      <PatientInfo />
      <Tab
        {...props}
        tabSelection={tabSelection}
        getTabSelection={getTabSelection}
      />
      {tabSelection == "demographics" && <Demographies {...props} />}
      {tabSelection == "claims" && <Claims {...props} />}
      {tabSelection == "contacts" && <Contacts {...props} />}
      {tabSelection == "documents" && <Documents {...props} />}
      {tabSelection == "insurances" && <Insurances {...props} />}
      {tabSelection == "appointment" && <Appointments {...props} />}
      {tabSelection == "clinicals" && <Clinicals {...props} />}
      {/* {tabSelection == "demographics" && <Demographies />}
      {tabSelection == "claims" && <Claims />} */}
    </div>
  );
};

export default PatientContent;
