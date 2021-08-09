import React, {useEffect, useState} from "react";
import {InputWithIcon} from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import {Button, Table} from "react-bootstrap";
import PaginationBlock from "./Pagination";
import {getPatientAppointments} from "../patient-details/api";
import {useDispatch} from "react-redux";
import {setLoadingState} from "../../_actions/User.action";

const Appointments = (props) => {
    let [searchData, setSearchData] = useState([]);
    let [limit, setLimit] = useState(10);
    let [currentPage, setCurrentPage] = useState(0);
    let [lastKeys, setLastKeys] = useState([]);
    const dispatch = useDispatch()

    let patientId = props.match.params.patientId;
    let practiceId = props.match.params.practiceId;

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
        let filterData = await getPatientAppointments(practiceId, patientId, searchKey, limit, last, additional)

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
                <h5>Appointments</h5>
                <InputWithIcon
                    inputIcon={darkSearch}
                    inputClass="searchIconInput"
                    placeholder="Search Appointments"
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
                        <th>Date</th>
                        <th>Time</th>
                        <th>Type</th>
                        <th>Reason</th>
                        <th>Resource</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Comments</th>
                    </tr>
                    </thead>
                    <tbody>
                    {searchData?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.appointmentDate}</td>
                                <td>{item.appointmentTime}</td>
                                <td>{item.type}</td>
                                <td>{item.reason}</td>
                                <td>{item.resource}</td>
                                <td>{item.location}</td>
                                <td>{item.status}</td>
                                <td>{item.comments}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
                <PaginationBlock name="Appointments" currentPage={currentPage} nextClick={nextPage}
                                 prevClick={prevPage}
                                 limit={limit} currentLength={searchData.length}/>
            </div>
        </div>
    );
};

export default Appointments;
