import React, {useEffect, useState} from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Table } from "react-bootstrap";
import darkArrow from "../../images/darkArrow.svg";
import { Link } from "react-router-dom";
import PaginationBlock from "./Pagination";
import {getPatientDocuments} from "../patient-details/api";

const Documents = (props) => {
  let [searchData, setSearchData] = useState([]);
  let [nextPageNum, setNextPage] = useState("1");
  let [limit, setLimit] = useState(10);
  let patientId = props.match.params.patientId;

  const onKeyUp = async (e) => {
    let text = e.target.value.toLowerCase();
    if (!text) {
      text=""
    }
    await performSearch("1", text)
  };
  useEffect(async () => {
    await performSearch("1");
  }, []);
  const performSearch = async (nextPage, searchKey) => {
    let filterData = await getPatientDocuments(patientId, searchKey, limit, nextPage)
    setSearchData(filterData.items);
    setNextPage(filterData.lastKey?filterData.lastKey:"1")
  }
  const nextPage = async () => {
    await performSearch(nextPageNum)
  }
  const prevPage = async () => {
    let last = parseInt(nextPageNum) - 2
    await performSearch(last.toString())
  }

  const openPdf = () => {
    props.history.push("/patient/view/pdf");
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
                <tr key={index} onClick={openPdf}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>-</td>
                  <td>{item.description}</td>
                  <td>
                    <Link to="">
                      <img src={darkArrow} alt="rightArrow" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <PaginationBlock name="Documents" nextPage={nextPageNum} nextClick={nextPage}
                         prevClick={prevPage}
                         limit={limit} currentLength={searchData.length}/>
      </div>
    </div>
  );
};

export default Documents;
