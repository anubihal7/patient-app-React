import React, { useEffect, useState } from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Button, Table } from "react-bootstrap";
import darkArrow from "../../images/darkArrow.svg";
import { Link } from "react-router-dom";

const data = [
  {
    date: "11/20/2020",
    provider: "Kristi Sommer, MD",
    location: "Sommer Retina Clinic",
    tcharges: "$35.00",
    appliedPayment: "$7.00",
    adjustment: "$5.00",
    billedTo: "Primary",
    balance: "$0.00",
  },
  {
    date: "10/21/2020",
    provider: "Sam, MD",
    location: "Sam Retina Clinic",
    tcharges: "$150.00",
    appliedPayment: "$75.00",
    adjustment: "$75.00",
    billedTo: "Primary",
    balance: "$0.00",
  },
  {
    date: "10/22/2020",
    provider: "Tom Sommer, MD",
    location: "Tom Clinic",
    tcharges: "$150.00",
    appliedPayment: "$75.00",
    adjustment: "$75.00",
    billedTo: "Primary",
    balance: "$0.00",
  },
  {
    date: "10/23/2020",
    provider: "Jerry, MD",
    location: "Jerry Retina Clinic",
    tcharges: "$150.00",
    appliedPayment: "$75.00",
    adjustment: "$75.00",
    billedTo: "Primary",
    balance: "$0.00",
  },
  {
    date: "10/24/2020",
    provider: "Ben, MD",
    location: "Ben Retina Clinic",
    tcharges: "$150.00",
    appliedPayment: "$75.00",
    adjustment: "$75.00",
    billedTo: "Primary",
    balance: "$0.00",
  },
  {
    date: "10/25/2020",
    provider: "Harvey, MD",
    location: "Harvey Clinic",
    tcharges: "$150.00",
    appliedPayment: "$75.00",
    adjustment: "$75.00",
    billedTo: "Primary",
    balance: "$0.00",
  },
  {
    date: "10/26/2020",
    provider: "Murphy, MD",
    location: "Murphy Clinic",
    tcharges: "$150.00",
    appliedPayment: "$75.00",
    adjustment: "$75.00",
    billedTo: "Primary",
    balance: "$0.00",
  },
  {
    date: "10/27/2020",
    provider: "Will, MD",
    location: "Will Clinic",
    tcharges: "$150.00",
    appliedPayment: "$75.00",
    adjustment: "$75.00",
    billedTo: "Primary",
    balance: "$0.00",
  },
  {
    date: "10/28/2020",
    provider: "Smith, MD",
    location: "Smith Clinic",
    tcharges: "$150.00",
    appliedPayment: "$75.00",
    adjustment: "$75.00",
    billedTo: "Primary",
    balance: "$0.00",
  },
  {
    date: "10/29/2020",
    provider: "Hanks, MD",
    location: "Hanks Clinic",
    tcharges: "$150.00",
    appliedPayment: "$75.00",
    adjustment: "$75.00",
    billedTo: "Primary",
    balance: "$0.00",
  },
  {
    date: "10/30/2020",
    provider: "Cruise, MD",
    location: "Cruise Clinic",
    tcharges: "$150.00",
    appliedPayment: "$75.00",
    adjustment: "$75.00",
    billedTo: "Primary",
    balance: "$0.00",
  },
];
const Claims = () => {
  let [claimsData, setClaimsData] = useState([]);
  useEffect(() => {
    setClaimsData(data);
  }, []);

  const onKeyUp = (e) => {
    let searchKey = e.target.value.toLowerCase();
    if (searchKey == "") {
      setClaimsData(data);
      return;
    }
    let filteredData = claimsData.filter((clData) => {
      for (let key in clData) {
        if (clData[key].toLowerCase().includes(searchKey)) {
          return true;
        }
      }
    });
    setClaimsData(filteredData);
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
            {claimsData?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.provider}</td>
                  <td>{item.location}</td>
                  <td>{item.tcharges}</td>
                  <td>{item.appliedPayment}</td>
                  <td>{item.adjustment}</td>
                  <td>{item.billedTo}</td>
                  <td>{item.balance}</td>

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
      </div>
    </div>
  );
};

export default Claims;
