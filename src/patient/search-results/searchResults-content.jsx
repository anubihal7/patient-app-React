import React, {useEffect, useState} from "react";
import "./style.scss";
import {Table} from "react-bootstrap";
import darkArrow from "../../images/darkArrow.svg";
import {Link} from "react-router-dom";
import {getPatientSearchResults} from "./api";
import PaginationBlock from "../components/Pagination";
import {saveSearchKey} from "../../_actions/persist.action";
import {connect} from "react-redux";
import {getFormattedDate} from "../../_utils/common-utils";
import {setLoadingState} from "../../_actions/User.action";
import {addCrumb} from "../../_utils/breadcrumb-util";
import SearchNav from "../../components/searchNavigation";

const SearchResultsContent = (props) => {
    let {searchKey, selectedProfile} = props;
    let [searchData, setSearchData] = useState([]);
    let [limit, setLimit] = useState(10);
    let [currentPage, setCurrentPage] = useState(0);
    let [lastKeys, setLastKeys] = useState([]);

    useEffect(async () => {
        searchKey = searchKey.toLowerCase();
        if (searchKey && searchKey !== "" && selectedProfile) {
            await performSearch(0);
        }
    }, [searchKey]);
    useEffect(() => {
        let crumb = {
            name: `Search results for "${searchKey}"`,
            link: window.location.pathname + "?searchKey=" + searchKey,
            identifier: "searchResults"
        }
        addCrumb(crumb, props.dispatch)
    }, [])
    const performSearch = async (nextPage) => {
        if (!selectedProfile)
            return;
        setCurrentPage(nextPage)
        let last = lastKeys[nextPage - 1]
        if (!last && nextPage > 0)
            return
        props.setLoading(true)
        let filterData = await getPatientSearchResults(selectedProfile.practiceId, searchKey, limit, last)
        props.setLoading(false)
        setSearchData(filterData.items);
        if (!lastKeys.includes(filterData.lastKey)) {
            lastKeys.push(filterData.lastKey)
            setLastKeys(lastKeys)
        }
    }
    const goToDetails = (item) => {
        props.setSearchKey(searchKey)
        props.history.push(`/practice/${selectedProfile.practiceId}/patient/${item.patientId}/details/demographics`);
    };
    const nextPage = async () => {
        await performSearch(currentPage + 1)

    }
    const prevPage = async () => {
        await performSearch(currentPage > 0 ? currentPage - 1 : 0)
    }
    return (
        <div className="searchResultsBlock">
            <SearchNav {...props} />
            {/* Search user results */}
            <div className="userSearchResult text-left">
                <h4>Search results for "{searchKey}"</h4>

                <Table className="customTable" responsive hover>
                    <thead>
                    <tr>
                        <th>New ID</th>
                        <th>Prior ID</th>
                        <th>Date of Birth</th>
                        <th>Name (Last, first MI)</th>
                        <th className="transparent">Empty section</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {searchData?.map((item, index) => {
                        return (
                            <tr key={index} onClick={() => {
                                goToDetails(item)
                            }}>
                                <td>{item.newId}</td>
                                <td>{item.oldId}</td>
                                <td>{getFormattedDate(item.dob)}</td>
                                <td>{item.patientName}</td>
                                <td>{" "}</td>
                                <td>
                                    <Link to="/patient/details/demographics">
                                        <img src={darkArrow} alt="rightArrow"/>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
                <PaginationBlock name="Patient Records" currentPage={currentPage} nextClick={nextPage}
                                 prevClick={prevPage}
                                 limit={limit} currentLength={searchData.length}/>
            </div>

        </div>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        setSearchKey: (values) => {
            dispatch(saveSearchKey(values))
        },
        setLoading: (values) => {
            dispatch(setLoadingState(values))
        },
        dispatch,
    };
};
export default connect(null, mapDispatchToProps)(SearchResultsContent);
