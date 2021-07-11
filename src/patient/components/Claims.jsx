import React, {useEffect, useState} from "react";
import {InputWithIcon} from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import {Button, Table} from "react-bootstrap";
import darkArrow from "../../images/darkArrow.svg";
import PaginationBlock from "./Pagination";
import {getPatientClaims} from "../patient-details/api";
import {getFormattedDate} from "../../_utils/common-utils";

const Claims = (props) => {
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
    let filterData = await getPatientClaims(practiceId,patientId, searchKey, limit, nextPage)
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
                      <img src={darkArrow} alt="rightArrow" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <PaginationBlock name="Claims" nextPage={nextPageNum} nextClick={nextPage}
                         prevClick={prevPage}
                         limit={limit} currentLength={searchData.length}/>
      </div>
    </div>
  );
};

export default Claims;
