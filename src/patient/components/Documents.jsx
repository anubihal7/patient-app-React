import React, {useEffect, useState} from "react";
import {InputWithIcon} from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import {Table} from "react-bootstrap";
import darkArrow from "../../images/darkArrow.svg";
import PaginationBlock from "./Pagination";
import {getPatientDocuments} from "../patient-details/api";
import {useDispatch} from "react-redux";
import {setLoadingState} from "../../_actions/User.action";
import {getDateForDocs} from "../../_utils/common-utils";

const Documents = (props) => {
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
        if (!last&&currentPage>0)
            return
        dispatch(setLoadingState(true))
        let filterData = await getPatientDocuments(practiceId, patientId, searchKey, limit, last)

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
    const openPdf = (item) => {
        props.history.push(`/practice/${practiceId}/patient/${patientId}/details/documents/` + item.documentId);
    };
    return (
        <div className="Demographics text-left">
            <div className="claimHeader">
                <h5>Documents</h5>
                <InputWithIcon
                    inputIcon={darkSearch}
                    inputClass="searchIconInput"
                    placeholder="Search Documents"
                    type="text"
                    onKeyUp={onKeyUp}
                />
            </div>
            <div className="sectionOne">
                <Table className="customTable" responsive hover>
                    <thead>
                    <tr>
                        <th>Document Title</th>
                        <th>Category</th>
                        <th>Date Created</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {searchData?.map((item, index) => {
                        return (
                            <tr key={index} onClick={() => {
                                openPdf(item)
                            }}>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{getDateForDocs(item.dateCreated)}</td>
                                <td>{item.description}</td>
                                <td>
                                    <img src={darkArrow} alt="rightArrow"/>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
                <PaginationBlock name="Documents" currentPage={currentPage} nextClick={nextPage}
                                 prevClick={prevPage}
                                 limit={limit} currentLength={searchData.length}/>
            </div>
        </div>
    );
};

export default Documents;
