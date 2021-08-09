import React, {useEffect, useState} from "react";
import {InputWithIcon} from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import {Button, Table} from "react-bootstrap";
import PaginationBlock from "./Pagination";
import {getClaimComments} from "../claim-information/api";
import {useDispatch} from "react-redux";
import {setLoadingState} from "../../_actions/User.action";

const Comments = (props) => {
    let [searchData, setSearchData] = useState([]);
    let [limit, setLimit] = useState(10);
    let [currentPage, setCurrentPage] = useState(0);
    let [lastKeys, setLastKeys] = useState([]);
    const dispatch = useDispatch()

    let patientId = props.match.params.patientId;
    let practiceId = props.match.params.practiceId;
    let claimId = props.match.params.claimId;
    let [searchTab, setSearchTab] = useState("Default View");
    const changeTab = async (event) => {
        let targetTab = event.target.innerHTML.toString()
        setSearchTab(targetTab)
        await performSearch(currentPage, "", targetTab)
    }
    const getButtonClass = (innerHTML) => {
        let baseClass = "tabButton"
        if (searchTab === innerHTML)
            baseClass = baseClass + " active"
        return baseClass
    }
    const onKeyUp = async (e) => {
        if (e.key === "Enter") {
            let text = e.target.value.toLowerCase();
            if (!text) {
                text = ""
            }
            await performSearch(0, text)
        }
    };

    useEffect(async () => {
        await performSearch(0);
    }, []);

    const performSearch = async (nextPage, searchKey, additional = searchTab) => {
        setCurrentPage(nextPage)
        let last = lastKeys[nextPage - 1]
        if (!last && nextPage > 0)
            return
        dispatch(setLoadingState(true))
        let filterData = await getClaimComments(practiceId, patientId, claimId, searchKey, limit, last, additional)
        dispatch(setLoadingState(false))
        setSearchData(filterData.items);
        if (!lastKeys.includes(filterData.lastKey)) {
            lastKeys.push(filterData.lastKey)
            setLastKeys(lastKeys)
        }
    }
    const nextPage = async () => {
        await performSearch(currentPage + 1)

    }
    const prevPage = async () => {
        await performSearch(currentPage > 0 ? currentPage - 1 : 0)
    }

    return (
        <div className="Demographics text-left">
            <div className="claimHeader">
                <h5>Comments</h5>
                <InputWithIcon
                    inputIcon={darkSearch}
                    inputClass="searchIconInput"
                    placeholder="Search Comments"
                    type="text"
                    onKeyUp={onKeyUp}
                />
            </div>
            <div className="sectionOne">
                <div className="buttonTabs">
                    <Button variant="primary" className={getButtonClass("Default View")} onClick={changeTab}>
                        Default View
                    </Button>
                    <Button variant="primary" className={getButtonClass("Show All")} onClick={changeTab}>
                        Show All
                    </Button>
                </div>
                <Table className="customTable" responsive hover>
                    <thead>
                    <tr>
                        <th>Comment</th>
                        <th>last updated</th>
                        <th>Last updated by</th>
                        <th>Date Created</th>
                        <th>Created by</th>
                    </tr>
                    </thead>
                    <tbody>
                    {searchData?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="commentTD">{item.comment}</td>
                                <td>{item.lastUpdated}</td>
                                <td>{item.updatedBy}</td>
                                <td>{item.created}</td>
                                <td>{item.createdBy}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
                {searchData && <PaginationBlock name="Comments" currentPage={currentPage} nextClick={nextPage}
                                                prevClick={prevPage}
                                                limit={limit} currentLength={searchData.length}/>}
            </div>
        </div>
    );
};

export default Comments;
