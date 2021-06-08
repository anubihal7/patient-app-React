import React from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Button, Table } from "react-bootstrap";

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
const Contacts = () => (
  <div className="Demographics text-left">
    <div className="claimHeader">
      <h5>Contacts</h5>
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
          {data?.map((item, index) => {
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
    </div>
  </div>
);

export default Contacts;
