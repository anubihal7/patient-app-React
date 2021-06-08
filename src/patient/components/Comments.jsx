import React from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Button, Table } from "react-bootstrap";

const data = [
  {
    tdata1: "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName"
  },
  {
    tdata1: "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName"
  },
  {
    tdata1: "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName"
  },
  {
    tdata1: "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName"
  },
  {
    tdata1: "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName"
  },
  {
    tdata1: "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName"
  },
  {
    tdata1: "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName"
  },
];
const Comments = () => (
  <div className="Demographics text-left">
    <div className="claimHeader">
      <h5>Comments</h5>
      <InputWithIcon
        inputIcon={darkSearch}
        inputClass="searchIconInput"
        placeholder="Search claims"
        type="text"
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
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                <td className="commentTD">{item.tdata1}</td>
                <td>{item.tdata2}</td>
                <td>{item.tdata3}</td>
                <td>{item.tdata4}</td>
                <td>{item.tdata5}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  </div>
);

export default Comments;
