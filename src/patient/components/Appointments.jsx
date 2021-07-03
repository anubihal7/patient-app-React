import React, {useEffect, useState} from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Button, Table } from "react-bootstrap";
import PaginationBlock from "./Pagination";
import {getPatientAppointments} from "../patient-details/api";

const Appointments = (props) => {
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
    let filterData = await getPatientAppointments(practiceId,patientId, searchKey, limit, nextPage)
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
          <Button variant="primary" className="tabButton active">
            Default View
          </Button>
          <Button variant="primary" className="tabButton ">
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
        <PaginationBlock name="Appointments" nextPage={nextPageNum} nextClick={nextPage}
                         prevClick={prevPage}
                         limit={limit} currentLength={searchData.length}/>
      </div>
    </div>
  );
};

export default Appointments;
