import React, {useEffect, useState} from "react";
import "./style.scss";
import smallArrow from "../../images/smallArrow.svg";
import {Table} from "react-bootstrap";
import darkArrow from "../../images/darkArrow.svg";
import {Link} from "react-router-dom";
import {getPatientSearchResults} from "./api";
import PaginationBlock from "../components/Pagination";
import {saveSearchKey} from "../../_actions/persist.action";
import {connect} from "react-redux";
import {getFullName} from "../../_utils/common-utils";

const SearchResultsContent = (props) => {
    let {searchKey, selectedProfile} = props;
    let [searchData, setSearchData] = useState([]);
    let [nextPageNum, setNextPage] = useState("1");
    let [limit, setLimit] = useState(10);

    useEffect(async () => {
        searchKey = searchKey.toLowerCase();
        if (searchKey && searchKey !== "" && selectedProfile) {
            await performSearch("1");
        }
    }, [searchKey]);
    const performSearch = async (nextPage) => {
        if(!selectedProfile)
            return ;
        let filterData = await getPatientSearchResults(selectedProfile.practiceId, searchKey, limit, nextPage)
        setSearchData(filterData.items);
        setNextPage(filterData.lastKey)
    }
    const goToDetails = (item) => {
        props.setSearchKey(item.lastName)
        props.history.push(`/practice/${selectedProfile.practiceId}/patient/${item.newId}/details/demographics`);
    };
    const nextPage = async () => {
        await performSearch(nextPageNum)
    }
    const prevPage = async () => {
        let last = parseInt(nextPageNum) - 2
        await performSearch(last.toString())
    }
    return (
        <div className="searchResultsBlock">
            <div className="componentTree text-left">
                <a href="">Home</a>
                <img src={smallArrow} alt="arrow"/>
                <a href="" className="active">
                    Search results for “{searchKey}”
                </a>
            </div>
            {/* Search no results */}
            {searchData.length === 0 && (
                <div className="noResult text-left">
                    <h6>Sorry, there are no results for “{searchKey}”</h6>
                    <p>Try searching by name, date of birth, or ID number.</p>
                </div>
            )}

            {/* Search user results */}
            {searchData.length > 0 && (
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
                                    <td>{item.DOB}</td>
                                    <td>{getFullName(item)}</td>
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
                    <PaginationBlock name="Patient Records" nextPage={nextPageNum} nextClick={nextPage}
                                     prevClick={prevPage}
                                     limit={limit} currentLength={searchData.length}/>
                </div>
            )}
        </div>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        setSearchKey: (values) => {
            dispatch(saveSearchKey(values))
        },
        dispatch,
    };
};
export default connect(null, mapDispatchToProps)(SearchResultsContent);
