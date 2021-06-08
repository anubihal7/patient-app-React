import React from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Table } from "react-bootstrap";
import darkArrow from "../../images/darkArrow.svg";
import { Link } from "react-router-dom";

const data = [
  {
    tdata1: "Name",
    tdata2: "Relationship",
    tdata3: "Phone"
  },
  {
    tdata1: "Name",
    tdata2: "Relationship",
    tdata3: "Phone"
  },
  {
    tdata1: "Name",
    tdata2: "Relationship",
    tdata3: "Phone"
  },
  {
    tdata1: "Name",
    tdata2: "Relationship",
    tdata3: "Phone"
  },
  {
    tdata1: "Name",
    tdata2: "Relationship",
    tdata3: "Phone"
  },
  {
    tdata1: "Name",
    tdata2: "Relationship",
    tdata3: "Phone"
  },
  {
    tdata1: "Name",
    tdata2: "Relationship",
    tdata3: "Phone"
  },
];
const Documents = () => (
  <div className="Demographics text-left">
    <div className="claimHeader">
      <h5>Documents</h5>
      <InputWithIcon
        inputIcon={darkSearch}
        inputClass="searchIconInput"
        placeholder="Search claims"
        type="text"
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
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.tdata1}</td>
                <td>{item.tdata2}</td>
                <td>{item.tdata3}</td>
                <td>{item.tdata3}</td>
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
    </div>
  </div>
);

export default Documents;
