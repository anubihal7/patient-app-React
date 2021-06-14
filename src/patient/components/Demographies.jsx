import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.scss";

const Demographics = () => (
  <div className="Demographics text-left">
    <h5>Demographics</h5>
    <div className="sectionOne">
      <Row xs={1} sm={2} md={4} lg={5}>
        <Col>
          <label>Nickname</label>
          <h6>Karen</h6>
        </Col>
        <Col>
          <label>Other Last name</label>
          <h6>N/A</h6>
        </Col>
        <Col>
          <label>Social Security Number</label>
          <h6>XXX-XXX-XXXX</h6>
        </Col>
        <Col>
          <label>Current Status</label>
          <h6>
            <span className="badge">Active</span>
          </h6>
        </Col>
        <Col>
          <label>Gender</label>
          <h6>Female</h6>
        </Col>
        <Col>
          <label>Race</label>
          <h6>Decline to provide</h6>
        </Col>
        <Col>
          <label>Ethnicity</label>
          <h6>Decline to state</h6>
        </Col>
        <Col>
          <label>Language</label>
          <h6>English</h6>
        </Col>
        <Col>
          <label>Marital Status</label>
          <h6>Married</h6>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3} lg={6}>
        <Col>
          <label>Address</label>
          <h6>795 Folsom Ave Suite 600 San Francisco, CA 94107</h6>
        </Col>
        <Col>
          <label>Email Address</label>
          <h6>username@email.com</h6>
        </Col>
        <Col>
          <label>Home Phone</label>
          <h6>123-456-7890 (Mobile)</h6>
        </Col>
        <Col>
          <label>Work Phone</label>
          <h6>None</h6>
        </Col>
        <Col>
          <label>Cell Phone</label>
          <h6>None</h6>
        </Col>
        <Col>
          <label>Other Phone</label>
          <h6>None</h6>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={4} lg={5}>
        <Col>
          <label>Preferred Provider</label>
          <h6>Dan Montzka, MD</h6>
        </Col>
        <Col>
          <label>Referring Provider Name</label>
          <h6>Walker, Karen A.</h6>
        </Col>
        <Col>
          <label>Primary Care Physician</label>
          <h6>None</h6>
        </Col>
        <Col>
          <label>Referred source</label>
          <h6>None</h6>
        </Col>
        <Col>
          <label>First contact date</label>
          <h6>MM/DD/YYYY</h6>
        </Col>
        <Col>
          <label>Emergency Contact</label>
          <h6>Walker, Johnny</h6>
        </Col>
        <Col>
          <label>Emergency contact relation</label>
          <h6>Spouse</h6>
        </Col>
        <Col>
          <label>Emergency contact Phone 1</label>
          <h6>123-456-7890 (Mobile)</h6>
        </Col>
        <Col>
          <label>Emergency contact Phone 1</label>
          <h6>123-456-7890 (Office)</h6>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3} lg={3}>
        <Col>
          <label>Custom Field 1</label>
          <h6>Custom entry one</h6>
        </Col>
        <Col>
          <label>Custom Field 2</label>
          <h6>Custom entry two</h6>
        </Col>
        <Col>
          <label>Custom Field 3</label>
          <h6>Custom entry three</h6>
        </Col>
        <Col>
          <label>Custom Field 4</label>
          <h6>Custom entry four</h6>
        </Col>
        <Col>
          <label>Custom Field 5</label>
          <h6>Custom entry five</h6>
        </Col>
        <Col>
          <label>Custom Field 6</label>
          <h6>Custom entry six</h6>
        </Col>
        {/*  <Col>
                <label>Custom Field 7</label>
                <h6>Custom entry seven</h6>
            </Col>
            <Col>
                <label>Custom Field 8</label>
                <h6>Custom entry eight</h6>
            </Col>
            <Col>
                <label>Custom Field 9</label>
                <h6>Custom entry nine</h6>
            </Col>   */}
      </Row>
    </div>
  </div>
);

export default Demographics;
