import React, {useEffect, useState} from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Button, Table } from "react-bootstrap";
import PaginationBlock from "./Pagination";
import {getPatientInsurances} from "../patient-details/api";

const Insurances = (props) => {
  let [searchData, setSearchData] = useState([]);
  let [nextPageNum, setNextPage] = useState("1");
  let [limit, setLimit] = useState(10);
  let patientId = props.match.params.patientId;
  let practiceId = props.match.params.practiceId;
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
    let filterData = await getPatientInsurances(practiceId,patientId, searchKey, limit, nextPage)
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

  return (
    <div className="Demographics text-left">
      <div className="claimHeader">
        <h5>Insurances</h5>
        <InputWithIcon
          inputIcon={darkSearch}
          inputClass="searchIconInput"
          placeholder="Search Insurances"
          type="text"
          onKeyUp={onKeyUp}
        />
      </div>
      <div className="sectionOne">
        <div className="buttonTabs">
          <Button variant="primary" className="tabButton">
            Active Only
          </Button>
          <Button variant="primary" className="tabButton active">
            Show All
          </Button>
        </div>
        <Table className="customTable" responsive hover>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Type</th>
              <th>Plan</th>
              <th>Start</th>
              <th>End</th>
              <th>Policy</th>
              <th>Group</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {searchData?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.rank}</td>
                  <td>{item.type}</td>
                  <td>{item.plan}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>{item.policy}</td>
                  <td>{item.group}</td>
                  <td>-</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <PaginationBlock name="Insurances" nextPage={nextPageNum} nextClick={nextPage}
                         prevClick={prevPage}
                         limit={limit} currentLength={searchData.length}/>
      </div>
    </div>
  );
};

export default Insurances;
