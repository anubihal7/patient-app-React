import React, {useEffect, useState} from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Button, Table } from "react-bootstrap";
import PaginationBlock from "./Pagination";
import {getPatientInsurances} from "../patient-details/api";
import {useDispatch} from "react-redux";
import {setLoadingState} from "../../_actions/User.action";

const Insurances = (props) => {
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

    let filterData = await getPatientInsurances(practiceId,patientId, searchKey, limit, last)

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
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <PaginationBlock name="Insurances" currentPage={currentPage} nextClick={nextPage}
                         prevClick={prevPage}
                         limit={limit} currentLength={searchData.length}/>
      </div>
    </div>
  );
};

export default Insurances;
