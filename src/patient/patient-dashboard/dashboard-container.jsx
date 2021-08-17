import React, {useState, useEffect} from "react";
import HeaderBar from "../../components/headerBar";
import LeftSidebar from "../../components/leftSidebar";
import SearchBlock from "../../components/searchBlock";
import ErrorBlock from "../../components/errorBlock";
import DashboardContent from "./dashboard-content";
import SearchResultsContent from "../search-results/searchResults-content";
import "../patient-dashboard/style.scss";
import "./style.scss";
import {getUserProfile} from "./api";
import {connect, useDispatch} from "react-redux";
import {saveUserProfiles, setLoadingState} from "../../_actions/User.action";
import {clearCrumbs} from "../../_utils/breadcrumb-util";
import {errorOccurred} from "../../_actions/persist.action";

const DashboardContainer = (props) => {
    const [searchKey, setSearchKey] = useState("");
    const [selectedProfile, setSelectedProfile] = useState(null);
    const dispatch = useDispatch()

    useEffect(async () => {
        dispatch(errorOccurred(""))
        dispatch(setLoadingState(true))
        let userProf = await getUserProfile()
        dispatch(setLoadingState(false))
        if (userProf && userProf.items && userProf.items.length > 0) {
            props.saveProfiles(userProf.items)
            setSearchKey("")
        }
        if (props.user && props.user.meta && props.user.meta.selectedProfile) {
            setSelectedProfile(props.user.meta.selectedProfile)
        }
        if (props.location.search && props.location.search.includes("searchKey")) {

            let search = props.location.search;
            let key = search.substr(search.indexOf("=") + 1);
            setSearchKey(key);
        }
        clearCrumbs(dispatch)
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
                <ErrorBlock {...props}/>
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
