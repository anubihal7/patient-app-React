import React, { useState } from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Table } from "react-bootstrap";
import darkArrow from "../../images/darkArrow.svg";
import { Link } from "react-router-dom";
import PaginationBlock from "./Pagination";

const tabledata = [
  {
    tdata1: "Name 1",
    tdata2: "Relationship",
    tdata3: "Phone",
  },
  {
    tdata1: "Name 2",
    tdata2: "Relationship t",
    tdata3: "Phone v",
  },
  {
    tdata1: "Name 3",
    tdata2: "Relationship c",
    tdata3: "Phone v",
  },
  {
    tdata1: "Name 4",
    tdata2: "Relationship z",
    tdata3: "Phone e",
  },
  {
    tdata1: "Name 5",
    tdata2: "Relationship b",
    tdata3: "Phone a",
  },
  {
    tdata1: "Name 6",
    tdata2: "Relationship y",
    tdata3: "Phone 2",
  },
  {
    tdata1: "Name 7",
    tdata2: "Relationship x",
    tdata3: "Phone 1",
  },
  {
    tdata1: "Name 5",
    tdata2: "Relationship b",
    tdata3: "Phone a",
  },
  {
    tdata1: "Name 6",
    tdata2: "Relationship y",
    tdata3: "Phone 2",
  },
  {
    tdata1: "Name 7",
    tdata2: "Relationship x",
    tdata3: "Phone 1",
  },
];
const Documents = (props) => {
  const [tableData, setTableData] = useState(tabledata);
  const onKeyUp = (e) => {
    let text = e.target.value.toLowerCase();
    let data = [...tableData];
    if (!text) {
      setTableData(tabledata);
      return;
    }
    data = data.filter((rows) => {
      for (let key in rows) {
        if (rows[key].toLowerCase().includes(text)) {
          return true;
        }
      }
    });
    setTableData(data);
  };
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
            {tableData?.map((item, index) => {
              return (
                <tr key={index} onClick={openPdf}>
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
        <PaginationBlock name="Documents" />
      </div>
    </div>
  );
};

export default Documents;
