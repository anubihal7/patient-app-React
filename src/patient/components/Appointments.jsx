import React from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Button, Table } from "react-bootstrap";

const data = [
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: " ",
    tdata8: "Comments maximum of 255 characters"
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: " ",
    tdata8: "Comments maximum of 255 characters"
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: " ",
    tdata8: "Comments maximum of 255 characters"
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: " ",
    tdata8: "Comments maximum of 255 characters"
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: " ",
    tdata8: "Comments maximum of 255 characters"
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: " ",
    tdata8: "Comments maximum of 255 characters"
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: " ",
    tdata8: "Comments maximum of 255 characters"
  },
];
const Appointments = () => (
  <div className="Demographics text-left">
    <div className="claimHeader">
      <h5>Appointments</h5>
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
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.tdata1}</td>
                <td>{item.tdata2}</td>
                <td>{item.tdata3}</td>
                <td>{item.tdata4}</td>
                <td>{item.tdata5}</td>
                <td>{item.tdata6}</td>
                <td>{item.tdata7}</td>
                <td>{item.tdata8}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  </div>
);

export default Appointments;
