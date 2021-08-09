import React, {useEffect, useState} from "react";
import {InputWithIcon} from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import {Button, Table} from "react-bootstrap";
import darkArrow from "../../images/darkArrow.svg";
import PaginationBlock from "./Pagination";
import {getPatientClaims} from "../patient-details/api";
import {getFormattedDate} from "../../_utils/common-utils";
import {useDispatch} from "react-redux";
import {setLoadingState} from "../../_actions/User.action";

const Claims = (props) => {
    let [searchData, setSearchData] = useState([]);
    let [limit, setLimit] = useState(10);
    let [currentPage, setCurrentPage] = useState(0);
    let [lastKeys, setLastKeys] = useState([]);
    const dispatch = useDispatch()

    let patientId = props.match.params.patientId;
    let practiceId = props.match.params.practiceId;

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

    const performSearch = async (nextPage, searchKey) => {

        setCurrentPage(nextPage)
        let last = lastKeys[nextPage - 1]
        if (!last&&nextPage>0)
            return
        dispatch(setLoadingState(true))

        let filterData = await getPatientClaims(practiceId, patientId, searchKey, limit, last)

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

    const goToDetails = (item) => {
        props.history.push(`/practice/${practiceId}/patient/${patientId}/details/claims/` + item.claimId);
    };

    return (
        <div className="Demographics text-left">
            <div className="claimHeader">
                <h5>Claims</h5>
                <InputWithIcon
                    inputIcon={darkSearch}
                    inputClass="searchIconInput"
                    placeholder="Search claims"
                    type="text"
                    onKeyUp={onKeyUp}
                />
            </div>
            <div className="sectionOne">
                <div className="buttonTabs">
                    <Button variant="primary" className="tabButton active">
                        Open Balance
                    </Button>
                    <Button variant="primary" className="tabButton">
                        Show All
                    </Button>
                </div>
                <Table className="customTable" responsive hover>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Provider</th>
                        <th>Location</th>
                        <th>Total Charges</th>
                        <th>Applied Payments</th>
                        <th>Adjustments</th>
                        <th>Billed to</th>
                        <th>Balance</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {searchData?.map((item, index) => {
                        return (
                            <tr key={index} onClick={() => {
                                goToDetails(item)
                            }}>
                                <td>{getFormattedDate(item.claimDate)}</td>
                                <td>{item.provider}</td>
                                <td>{item.location}</td>
                                <td>{item.totalCharges}</td>
                                <td>{item.appliedPayments}</td>
                                <td>{item.adjustments}</td>
                                <td>{item.billedTo}</td>
                                <td>{item.balance}</td>

                                <td>
                                    <img src={darkArrow} alt="rightArrow"/>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
                <PaginationBlock name="Claims" currentPage={currentPage} nextClick={nextPage}
                                 prevClick={prevPage}
                                 limit={limit} currentLength={searchData.length}/>
            </div>
        </div>
    );
};

export default Claims;
