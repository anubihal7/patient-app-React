import React, { useState } from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Button, Table } from "react-bootstrap";

const tabledata = [
  {
    tdata1:
      "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName sjdbm",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName",
  },
  {
    tdata1:
      "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName shgdv",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName",
  },
  {
    tdata1:
      "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName sdj,vd",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName",
  },
  {
    tdata1:
      "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName sjd,hbm",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName",
  },
  {
    tdata1:
      "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName skgd",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName",
  },
  {
    tdata1:
      "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName sgfdc",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName",
  },
  {
    tdata1:
      "Comment one lorem ipsum dolor sit amet Comment one lorem ipsum dolor sit amet",
    tdata2: "MM/DD/YYYY",
    tdata3: "FirstName LastName gjc",
    tdata4: "MM/DD/YYYY",
    tdata5: "FirstName LastName",
  },
];
const Comments = () => {
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
  return (
    <div className="Demographics text-left">
      <div className="claimHeader">
        <h5>Comments</h5>
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
            {tableData?.map((item, index) => {
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
};

export default Comments;
