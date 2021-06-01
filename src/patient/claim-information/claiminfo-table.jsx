import React from "react";
import { Col, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

import "./style.scss";

const products = [
  {
    id: 1,
    service: "76512 - Name of service",
    modifiers: "50",
    dx: "A B C D",
    units: "1",
    charge: "380",
    ttlcharge: "380",
    ttlallowed: "380",
    payments: "380",
    adjustments: "193.53",
    balance: "0.00",
  },
  {
    id: 2,
    service: "76512 - Name of service",
    modifiers: "50",
    dx: "A B C D",
    units: "1",
    charge: "380",
    ttlcharge: "380",
    ttlallowed: "380",
    payments: "380",
    adjustments: "193.53",
    balance: "0.00",
  },
  {
    id: 3,
    service: "76512 - Name of service",
    modifiers: "50",
    dx: "A B C D",
    units: "1",
    charge: "380",
    ttlcharge: "380",
    ttlallowed: "380",
    payments: "380",
    adjustments: "193.53",
    balance: "0.00",
  },
  {
    id: 4,
    service: "76512 - Name of service",
    modifiers: "50",
    dx: "A B C D",
    units: "1",
    charge: "380",
    ttlcharge: "380",
    ttlallowed: "380",
    payments: "380",
    adjustments: "193.53",
    balance: "0.00",
  },
];

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
  },
  {
    dataField: "service",
    text: "Service",
    sort: true,
  },
  {
    dataField: "modifiers",
    text: "Modifiers",
    sort: true,
  },
  {
    dataField: "dx",
    text: "DX Links",
    sort: true,
    formatter: (cellContent, row) => {
      return (
        <div className="badge dxLinks">
          {" "}
          <span>A</span> <span> B</span> <span>C</span>{" "}
        </div>
      );
    },
  },
  {
    dataField: "units",
    text: "Units",
    sort: true,
  },
  {
    dataField: "charge",
    text: "Charge",
    sort: true,
  },
  {
    dataField: "ttlcharge",
    text: "TTL Charge",
    sort: true,
  },
  {
    dataField: "ttlallowed",
    text: "TTL Allowed",
    sort: true,
  },
  {
    dataField: "payments",
    text: "Payments",
    sort: true,
  },
  {
    dataField: "adjustments",
    text: "Adjustments",
    sort: true,
  },
  {
    dataField: "balance",
    text: "Balance",
    sort: true,
  },
];

const expandRow = {
  renderer: (row) => (
    <Col xs={11} className="tableExpandData ">
      <Row xs={5} className="tableEpandAreaLine">
        <Col>
          <label>Date</label>
          <h6>11/29/2018</h6>
        </Col>
        <Col>
          <label>Payor</label>
          <h6>Walker, Karen A.</h6>
        </Col>
        <Col>
          <label>Amount</label>
          <h6>380.00</h6>
        </Col>
        <Col>
          <label>Reference</label>
          <h6>Check #2465</h6>
        </Col>
        <Col>
          <label>Remark</label>
          <h6>None</h6>
        </Col>
      </Row>
      <Row xs={5} className="tableEpandAreaLine">
        <Col>
          <label>Date</label>
          <h6>11/29/2018</h6>
        </Col>
        <Col>
          <label>Payor</label>
          <h6>Walker, Karen A.</h6>
        </Col>
        <Col>
          <label>Amount</label>
          <h6>380.00</h6>
        </Col>
        <Col>
          <label>Reference</label>
          <h6>Check #2465</h6>
        </Col>
        <Col>
          <label>Remark</label>
          <h6>None</h6>
        </Col>
      </Row>
      <Row xs={5}>
        <Col xs={12}>
          <label>Comments</label>
          <h6>N4:12345678901 CTP 3 UN</h6>
        </Col>
      </Row>
    </Col>
  ),
  showExpandColumn: true,
  // expandHeaderColumnRenderer: ({ isAnyExpands }) => {
  //   if (isAnyExpands) {
  //     return <p className="reduce-table-row">--</p>;
  //   }
  //   return <p className="expand-table-row">++</p>;
  // },
  expandColumnRenderer: ({ expanded }) => {
    console.log(expanded);
    if (expanded) {
      return <p className="reduce-table-row">--</p>;
    } else {
      return <p className="expand-table-row">++</p>;
    }
  },
};

const ClaimInfoTable = () => {
  return (
    <div className="claimInfoTable claimInfo text-left">
      <div className="Demographics">
        <BootstrapTable
          keyField="id"
          data={products}
          columns={columns}
          expandRow={expandRow}
          bordered={false}
          responsive={true}
        />
      </div>
    </div>
  );
};

export default ClaimInfoTable;
