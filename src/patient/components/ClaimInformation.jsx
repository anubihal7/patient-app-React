import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.scss";

const ClaimInfo = () => (
  <div className="Demographics text-left">
      <h5>Claim Information</h5>
      <div className="claiminfoBlock">
        <Row>
            <Col sm={12} md={4} lg={3}>
                <div className="claimID">
                    <h5><span>Claim ID</span>32867</h5>
                </div>
            </Col>
            <Col sm={12} md={8} lg={9} className="claiminfoblocks">
                <Row xs={1} sm={2} md={2} lg={3} xl={4}>
                    <Col>
                        <label>Date of Service</label>
                        <h6>10/15/2018</h6>
                    </Col>
                    <Col>
                        <label>Claim Type</label>
                        <h6>Professional</h6>
                    </Col>
                    <Col>
                        <label>Billed To</label>
                        <h6>XXXXXX</h6>
                    </Col>
                    <Col>
                        <label>POS</label>
                        <h6>XXXXXX</h6>
                    </Col>
                    <Col>
                        <label>Scheduled</label>
                        <h6>RGO</h6>
                    </Col>
                    <Col>
                        <label>Rendering</label>
                        <h6>RGO - Office-RGO</h6>
                    </Col>
                    <Col>
                        <label>Referring Providers</label>
                        <h6>Rafael Ortiz (1225186067)</h6>
                    </Col>
                    <Col>
                        <label>Service Location</label>
                        <h6>Office-RGO</h6>
                    </Col>
                </Row>
            </Col>
        </Row>
      
       </div>
  </div>
);

export default ClaimInfo;
