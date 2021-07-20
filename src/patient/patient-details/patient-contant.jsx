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
import {useDispatch} from "react-redux";
import {setLoadingState} from "../../_actions/User.action";

const PatientContent = (props) => {
    let [tabSelection, setTabSelection] = useState("demographics");
    let [patientInfo, setPatientInfo] = useState(null);
    const dispatch = useDispatch()
    useEffect(async () => {
        let pageType = props.match.params.type;
        let patientId = props.match.params.patientId;
        let practiceId = props.match.params.practiceId;
        setTabSelection(pageType);
        dispatch(setLoadingState(true))
        let patientData = await getPatientDetails(practiceId, patientId)
        dispatch(setLoadingState(false))
        setPatientInfo(patientData)
    }, []);

    const getTabSelection = (tab) => {
        setTabSelection(tab);
    };
    return (
        <div className="patientContant text-left">
            <SearchNav {...props} />
            <PatientInfo {...props}/>
            <Tab
                {...props}
                tabSelection={tabSelection}
                getTabSelection={getTabSelection}
            />
            {tabSelection == "demographics" && patientInfo && <Demographies {...props} patientInfo={patientInfo}/>}
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
