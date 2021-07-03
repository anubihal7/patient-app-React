import React, {useState, useEffect} from "react";
import HeaderBar from "../../components/headerBar";
import LeftSidebar from "../../components/leftSidebar";
import SearchBlock from "../../components/searchBlock";
import DashboardContent from "./dashboard-content";
import SearchResultsContent from "../search-results/searchResults-content";
import "../patient-dashboard/style.scss";
import "./style.scss";
import {getUserProfile} from "./api";
import {connect} from "react-redux";
import {saveUserProfiles} from "../../_actions/User.action";

const DashboardContainer = (props) => {
    const [searchKey, setSearchKey] = useState("");
    const [selectedProfile, setSelectedProfile] = useState(null);
    const onKeyUp = (e) => {
        setSearchKey(e.target.value);
    };

    useEffect(async () => {
        let userProf = await getUserProfile()
        if (userProf.items.length > 0) {
            props.saveProfiles(userProf.items)
        }
        if (props.location.search && props.location.search.includes("searchKey") && selectedProfile) {
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
                <HeaderBar {...props} selectedProfile={selectedProfile} selectProfile={(selection) => {
                    return setSelectedProfile(selection)
                }}/>
                <SearchBlock onKeyUpMethod={onKeyUp} {...props} />
                {searchKey === "" || !selectedProfile?(
                    <DashboardContent/>
                ) : (
                    <SearchResultsContent searchKey={searchKey} {...props} selectedProfile={selectedProfile} />
                )}
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        saveProfiles: (values) => {
            dispatch(saveUserProfiles(values))
        },
        dispatch,
    };
};

export default connect(null, mapDispatchToProps)(DashboardContainer);
