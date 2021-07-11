import React, {useEffect, useState} from "react";
import {InputWithIcon} from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import {Button, Table} from "react-bootstrap";
import PaginationBlock from "./Pagination";
import {getClaimComments} from "../claim-information/api";

const Comments = (props) => {
  let [searchData, setSearchData] = useState([]);
  let [nextPageNum, setNextPage] = useState("1");
  let [limit, setLimit] = useState(10);
  let patientId = props.match.params.patientId;
  let practiceId = props.match.params.practiceId;
  let claimId = props.match.params.claimId;
  const onKeyUp = async (e) => {
    let text = e.target.value.toLowerCase();
    if (!text) {
      text="";
    }
    await performSearch("1",text)
  };
  useEffect(async () => {
    await performSearch("1");
  }, []);
  const performSearch = async (nextPage, searchKey) => {
    let filterData = await getClaimComments(practiceId,patientId,claimId, searchKey, limit, nextPage)
    setSearchData(filterData.items);
    setNextPage(filterData.lastKey)
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
        {searchData&&<PaginationBlock name="Comments" nextPage={nextPageNum} nextClick={nextPage}
                         prevClick={prevPage}
                         limit={limit} currentLength={searchData.length}/>}
      </div>
    </div>
  );
};

export default Comments;
