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

    useEffect(async () => {
        let userProf = await getUserProfile()
        if (userProf && userProf.items && userProf.items.length > 0) {
            props.saveProfiles(userProf.items)
            setSearchKey("")
        }
        if (props.user && props.user.meta && props.user.meta.selectedProfile) {
            setSelectedProfile(props.user.meta.selectedProfile)
        }
        if (props.location.search && props.location.search.includes("searchKey") && selectedProfile) {
            let search = props.location.search;
            let key = search.substr(search.indexOf("=") + 1);
            setSearchKey(key);
        }
    }, [props.user.meta.selectedProfile]);

    return (
        <div className="dashboardMainBlock">
            <div className="dashboardLeftBlock">
                <LeftSidebar {...props} />
            </div>
            <div className="dashboardRightBlock">
                <HeaderBar {...props}/>
                <SearchBlock setSearch={(searchText) => {
                    setSearchKey(searchText)
                }} {...props} />
                {searchKey === "" || !selectedProfile ? (
                    <DashboardContent/>
                ) : (
                    <SearchResultsContent searchKey={searchKey} {...props} selectedProfile={selectedProfile}/>
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
const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
