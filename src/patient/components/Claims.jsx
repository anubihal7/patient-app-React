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
    tdata2: "Kristi Sommer, MD",
    tdata3: "Sommer Retina Clinic bsdm",
    tdata4: "$150.00",
    tdata5: "$75.00",
    tdata6: "$75.00",
    tdata7: "Primary",
    tdata8: "$0.00",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "Kristi Sommer, MD",
    tdata3: "Sommer Retina Clinic sjdb",
    tdata4: "$150.00",
    tdata5: "$75.00",
    tdata6: "$75.00",
    tdata7: "Primary",
    tdata8: "$0.00",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "Kristi Sommer, MD",
    tdata3: "Sommer Retina Clinic sjbhm",
    tdata4: "$150.00",
    tdata5: "$75.00",
    tdata6: "$75.00",
    tdata7: "Primary",
    tdata8: "$0.00",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "Kristi Sommer, MD",
    tdata3: "Sommer Retina Clinic skh",
    tdata4: "$150.00",
    tdata5: "$75.00",
    tdata6: "$75.00",
    tdata7: "Primary",
    tdata8: "$0.00",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "Kristi Sommer, MD",
    tdata3: "Sommer Retina Clinic hsd,bm",
    tdata4: "$150.00",
    tdata5: "$75.00",
    tdata6: "$75.00",
    tdata7: "Primary",
    tdata8: "$0.00",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "Kristi Sommer, MD",
    tdata3: "Sommer Retina Clinic slkhd",
    tdata4: "$150.00",
    tdata5: "$75.00",
    tdata6: "$75.00",
    tdata7: "Primary",
    tdata8: "$0.00",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "Kristi Sommer, MD",
    tdata3: "Sommer Retina Clinic sbm",
    tdata4: "$150.00",
    tdata5: "$75.00",
    tdata6: "$75.00",
    tdata7: "Primary",
    tdata8: "$0.00",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "Kristi Sommer, MD",
    tdata3: "Sommer Retina Clinic ksh.",
    tdata4: "$150.00",
    tdata5: "$75.00",
    tdata6: "$75.00",
    tdata7: "Primary",
    tdata8: "$0.00",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "Kristi Sommer, MD",
    tdata3: "Sommer Retina Clinic shdk.",
    tdata4: "$150.00",
    tdata5: "$75.00",
    tdata6: "$75.00",
    tdata7: "Primary",
    tdata8: "$0.00",
  },
  {
    tdata1: "10/22/2020",
    tdata2: "Kristi Sommer, MD",
    tdata3: "Sommer Retina Clinicafscbv ",
    tdata4: "$150.00",
    tdata5: "$75.00",
    tdata6: "$75.00",
    tdata7: "Primary",
    tdata8: "$0.00",
  },
  // {
  //   tdata1: "10/22/2020",
  //   tdata2: "Kristi Sommer, MD",
  //   tdata3: "Sommer Retina Clinic gfcb",
  //   tdata4: "$150.00",
  //   tdata5: "$75.00",
  //   tdata6: "$75.00",
  //   tdata7: "Primary",
  //   tdata8: "$0.00",
  // },
];
const Claims = (props) => {
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
  const goToDetails = () => {
    props.history.push("/patient/claiminfo");
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
            {tableData?.map((item, index) => {
              return (
                <tr key={index} onClick={goToDetails}>
                  <td>{item.tdata1}</td>
                  <td>{item.tdata2}</td>
                  <td>{item.tdata3}</td>
                  <td>{item.tdata4}</td>
                  <td>{item.tdata5}</td>
                  <td>{item.tdata6}</td>
                  <td>{item.tdata7}</td>
                  <td>{item.tdata8}</td>

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
        <PaginationBlock name="Claims" />
      </div>
    </div>
  );
};

export default Claims;
