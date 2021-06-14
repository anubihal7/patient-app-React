import React, { useState } from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Button, Table } from "react-bootstrap";
import PaginationBlock from "./Pagination";

const tabledata = [
  {
    tdata1: "Name A",
    tdata2: "Relationship1",
    tdata3: "Phone7",
  },
  {
    tdata1: "Name B",
    tdata2: "Relationship2",
    tdata3: "Phone6",
  },
  {
    tdata1: "Name C",
    tdata2: "Relationship3",
    tdata3: "Phone5",
  },
  {
    tdata1: "Name D",
    tdata2: "Relationship4",
    tdata3: "Phone4",
  },
  {
    tdata1: "Name E",
    tdata2: "Relationship5",
    tdata3: "Phone3",
  },
  {
    tdata1: "Name F",
    tdata2: "Relationship6",
    tdata3: "Phone2",
  },
  {
    tdata1: "Name G",
    tdata2: "Relationship7",
    tdata3: "Phone1",
  },
  {
    tdata1: "Name E",
    tdata2: "Relationship5",
    tdata3: "Phone3",
  },
  {
    tdata1: "Name F",
    tdata2: "Relationship6",
    tdata3: "Phone2",
  },
  {
    tdata1: "Name G",
    tdata2: "Relationship7",
    tdata3: "Phone1",
  },
];
const Contacts = () => {
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
        <h5>Contacts</h5>
        <InputWithIcon
          inputIcon={darkSearch}
          inputClass="searchIconInput"
          placeholder="Search Contacts"
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
              <th>Contact Name</th>
              <th>Relationship</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.tdata1}</td>
                  <td>{item.tdata2}</td>
                  <td>{item.tdata3}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <PaginationBlock name="Contacts" />
      </div>
    </div>
  );
};

export default Contacts;
