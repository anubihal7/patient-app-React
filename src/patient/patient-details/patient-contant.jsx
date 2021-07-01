import React, {useEffect, useState} from "react";
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
import {getPatientDetails} from "../patient-details/api";

const PatientContent = (props) => {
    let [tabSelection, setTabSelection] = useState("demographics");
    let [patientInfo, setPatientInfo] = useState(null);

    useEffect(async () => {
        let pageType = props.match.params.type;
        let patientId = props.match.params.patientId;
        setTabSelection(pageType);
        let patientData = await getPatientDetails(patientId)
        setPatientInfo(patientData)
    }, []);

    const getTabSelection = (tab) => {
        setTabSelection(tab);
    };
    return (
        <div className="patientContant text-left">
            <SearchNav {...props} />
            {patientInfo && <PatientInfo patientInfo={patientInfo}/>}
            <Tab
                {...props}
                tabSelection={tabSelection}
                getTabSelection={getTabSelection}
            />
            {tabSelection == "demographics" && patientInfo&&<Demographies {...props} patientInfo={patientInfo}/>}
            {tabSelection == "claims" && <Claims {...props} />}
            {tabSelection == "contacts" && <Contacts {...props} />}
            {tabSelection == "documents" && <Documents {...props} />}
            {tabSelection == "insurances" && <Insurances {...props} />}
            {tabSelection == "appointment" && <Appointments {...props} />}
            {tabSelection == "clinicals" && <Clinicals {...props} />}
        </div>
    );
};

export default PatientContent;
