import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import "./style.scss";
import {getClaimInfo} from "../claim-information/api";
import PrintButton from "./print-buttons";
import {addCrumb} from "../../_utils/breadcrumb-util";
import {useDispatch} from "react-redux";

const ClaimInfo = (props) => {
    let [claimInfo, setClaimInfo] = useState(null);
    let patientId = props.match.params.patientId;
    let practiceId = props.match.params.practiceId;
    let claimId = props.match.params.claimId;
    const dispatch = useDispatch()
    useEffect(async () => {
        let claimData = await getClaimInfo(practiceId, patientId, claimId)
        setClaimInfo(claimData)
        let crumb = {
            name: `Claim No. ${claimId}`,
            link: window.location.pathname,
            identifier:"claimInfo"
        }
        addCrumb( crumb, dispatch,true)
    }, [])
    return (
        <div className="claimInfo text-left">
            <div className="Demographics text-left">
                <h5>Claim Information</h5>
                <div className="claiminfoBlock">
                    {claimInfo &&
                    <Row>
                        <Col sm={12} md={4} lg={3}>
                            <div className="claimID">
                                <h5><span>Claim ID</span>{claimInfo.claimId}</h5>
                            </div>
                        </Col>
                        <Col sm={12} md={8} lg={9} className="claiminfoblocks">
                            <Row xs={1} sm={2} md={2} lg={3} xl={4}>
                                <Col>
                                    <label>Date of Service</label>
                                    <h6>{claimInfo.claimDate}</h6>
                                </Col>
                                <Col>
                                    <label>Claim Type</label>
                                    <h6>{claimInfo.claimType}</h6>
                                </Col>
                                <Col>
                                    <label>Billed To</label>
                                    <h6>{claimInfo.billedTo}</h6>
                                </Col>
                                <Col>
                                    <label>POS</label>
                                    <h6>{claimInfo.pos}</h6>
                                </Col>
                                <Col>
                                    <label>Scheduled</label>
                                    <h6>{claimInfo.scheduled}</h6>
                                </Col>
                                <Col>
                                    <label>Rendering</label>
                                    <h6>{claimInfo.rendering}</h6>
                                </Col>
                                <Col>
                                    <label>Referring Providers</label>
                                    <h6>{claimInfo.provider}</h6>
                                </Col>
                                <Col>
                                    <label>Service Location</label>
                                    <h6>{claimInfo.location}</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>}
                </div>
            </div>
            <PrintButton types={claimInfo ? claimInfo.types : []}/>
        </div>
    );
}

export default ClaimInfo;
