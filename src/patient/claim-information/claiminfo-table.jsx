import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

import "./style.scss";
import {getClaimServices} from "./api";


const columns = [
    {
        dataField: "serviceId",
        text: "ID",
        sort: true,
    },
    {
        dataField: "serviceName",
        text: "Service",
        sort: true,
    },
    {
        dataField: "modifiers",
        text: "Modifiers",
        sort: true,
    },
    {
        dataField: "dxLinks",
        text: "DX Links",
        sort: false,
        formatter: (cellContent, row) => {
            return (
                <div className="badge dxLinks">
                    {cellContent?.map((item, index) => {
                        return (<span>{item}</span>)
                    })}
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
        dataField: "ttlCharge",
        text: "TTL Charge",
        sort: true,
    },
    {
        dataField: "ttlAllowed",
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
    renderer: (row) => {
        return (
            <Col xs={11} className="tableExpandData ">
                {row.lines?.map((item, index) => {
                    return (<Row xs={5} className="tableEpandAreaLine">
                        <Col>
                            <label>Date</label>
                            <h6>{item.date}</h6>
                        </Col>
                        <Col>
                            <label>Payor</label>
                            <h6>{item.payor}</h6>
                        </Col>
                        <Col>
                            <label>Amount</label>
                            <h6>{item.amount}</h6>
                        </Col>
                        <Col>
                            <label>Reference</label>
                            <h6>{item.reference}</h6>
                        </Col>
                        <Col>
                            <label>Remark</label>
                            <h6>{item.remark}</h6>
                        </Col>
                    </Row>)
                })}
                <Row xs={5}>
                    <Col xs={12}>
                        <label>Comments</label>
                        <h6>{row.comment}</h6>
                    </Col>
                </Row>
            </Col>
        )
    },
    showExpandColumn: true,
    expandHeaderColumnRenderer: ({isAnyExpands}) => {
        if (isAnyExpands) {
            return <p className="reduce-table-row">--</p>;
        }
        return <p className="expand-table-row">++</p>;
    },
    expandColumnRenderer: ({expanded}) => {
        if (expanded) {
            return <p className="reduce-table-row">--</p>;
        } else {
            return <p className="expand-table-row">++</p>;
        }
    },
};

const ClaimInfoTable = (props) => {
    let [searchData, setSearchData] = useState([]);
    let [limit, setLimit] = useState(10);
    let patientId = props.match.params.patientId;
    let practiceId = props.match.params.practiceId;
    let claimId = props.match.params.claimId;

    useEffect(async () => {
        await performSearch("1");
    }, []);
    const performSearch = async (nextPage, searchKey) => {
        let filterData = await getClaimServices(practiceId, patientId, claimId, searchKey, limit, nextPage)
        setSearchData(filterData.items);
    }

    return (
        <div className="claimInfoTable claimInfo text-left">
            <div className="Demographics">
                <BootstrapTable
                    keyField="serviceId"
                    data={searchData}
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
