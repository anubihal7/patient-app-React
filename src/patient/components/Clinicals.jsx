import React, { useState } from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Button, Table } from "react-bootstrap";
import darkArrow from "../../images/darkArrow.svg";
import { Link } from "react-router-dom";
import PaginationBlock from "./Pagination";

const tabledata = [
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry jsdhb",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: "Comments maximum of 255 characters",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry dgjhbs",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: "Comments maximum of 255 characters",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry sjhb",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: "Comments maximum of 255 characters",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry sjdlhb",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: "Comments maximum of 255 characters",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry sjkdhb",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: "Comments maximum of 255 characters",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry sluhkn",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: "Comments maximum of 255 characters",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entryajn k.n",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: "Comments maximum of 255 characters",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry sjkdhb",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: "Comments maximum of 255 characters",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entry sluhkn",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: "Comments maximum of 255 characters",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "10:00-10:20 AM",
    tdata3: "FU",
    tdata4: "Reason entryajn k.n",
    tdata5: "JRO",
    tdata6: "Office",
    tdata7: "Comments maximum of 255 characters",
  },
];
const Clinicals = () => {
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
        <h5>Clinicals</h5>
        <InputWithIcon
          inputIcon={darkSearch}
          inputClass="searchIconInput"
          placeholder="Search Clinicals"
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
              <th>Date</th>
              <th>Time</th>
              <th>Type</th>
              <th>Reason</th>
              <th>Resource</th>
              <th>Location</th>
              <th>Comments</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.tdata1}</td>
                  <td>{item.tdata2}</td>
                  <td>{item.tdata3}</td>
                  <td>{item.tdata4}</td>
                  <td>{item.tdata5}</td>
                  <td>{item.tdata6}</td>
                  <td>{item.tdata7}</td>
                  <td>
                    <Link to="/patient/claiminfo">
                      <img src={darkArrow} alt="rightArrow" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <PaginationBlock name="Clinicals" />
      </div>
    </div>
  );
};

export default Clinicals;
