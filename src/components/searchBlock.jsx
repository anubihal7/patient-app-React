import React, {useState} from "react";
import "./style.scss";
import {Input, InputWithIcon} from "./input.jsx";
import search from "../images/search.svg";
import MagnifyingGlass from "../images/MagnifyingGlass.svg";
import {Button, Col, Row} from "react-bootstrap";
import pdfPrint from "../images/pdfPrint.svg";
import pdfDownlode from "../images/downlodPdf.svg";

const SearchBlock = (props) => {
    let [advanceSearch, setAdvanceSearch] = useState(false);
    let {searchKey}=props

    const onKeyUp = (e) => {
        if (e.key === "Enter") {
            if (props.onKeyUpMethod) {
                props.onKeyUpMethod(e);
            } else {
                props.history.push(`/patient/dashboard?searchKey=${e.target.value}`);
            }
        }
    };
    const showAdvanceSearch = () => {
        //   let search = !advanceSearch
        setAdvanceSearch(!advanceSearch);
    };

    const printPage = () => {
        window.print();
    };

    return (
        <>
            <div className="searchBlock">
                <div className="searchinputblock">
                    <InputWithIcon
                        inputIcon={search}
                        inputClass="searchIconInput"
                        placeholder="Search by name, ID number, or date of birth"
                        type="text"
                        onKeyUp={onKeyUp}
                    />
                    <a
                        className="searchBtn"
                        style={{cursor: "pointer"}}
                        onClick={showAdvanceSearch}
                    >
                        Advanced Search
                    </a>
                </div>
                <div className="pdfActionBtns d-flex align-items-center">
                    <Button variant="primary" className="pdfDownlode" onClick={printPage}>
                        <img src={pdfDownlode} alt="Sign in" className="signInImage"/>
                        Download
                    </Button>
                    <Button variant="primary" className="pdfPrint" onClick={printPage}>
                        <img src={pdfPrint} alt="Sign in" className="signInImage"/>
                        Print
                    </Button>
                </div>
            </div>
            {/* this block only show when click on advanced search button */}
            {advanceSearch && (
                <div className="advancedSearch text-left">
                    <h5>Advanced Search</h5>
                    <Row xs={1} sm={1} md={1} lg={1} xl={2}>
                        <Col>
                            <Row xs={1} sm={1} md={2} lg={3}>
                                <Col className="advancedInputBlock">
                                    <Input
                                        placeholder="New ID"
                                        type="text"
                                        inputClass="advancedInput"
                                        label="New ID"
                                        onKeyUp={onKeyUp}
                                    />
                                </Col>
                                <Col className="advancedInputBlock">
                                    <Input
                                        placeholder="Old ID"
                                        type="text"
                                        inputClass="advancedInput"
                                        label="Old ID"
                                        onKeyUp={onKeyUp}
                                    />
                                </Col>
                                <Col className="advancedInputBlock">
                                    <Input
                                        placeholder="Date of birth"
                                        type="text"
                                        inputClass="advancedInput"
                                        label="Date of birth"
                                        onKeyUp={onKeyUp}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row xs={1} sm={1} md={2} lg={2}>
                                <Col className="advancedInputBlock">
                                    <Input
                                        placeholder="First name"
                                        type="text"
                                        inputClass="advancedInput"
                                        label="First name"
                                        onKeyUp={onKeyUp}
                                    />
                                </Col>
                                <Col className="advancedInputBlock">
                                    <Input
                                        placeholder="Last name"
                                        type="text"
                                        inputClass="advancedInput"
                                        label="Last name"
                                        onKeyUp={onKeyUp}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className="text-right">
                        <Button variant="primary" className="MagnifyingGlass">
                            <img
                                src={MagnifyingGlass}
                                alt="Sign in"
                                className="signInImage"
                            />
                            Search
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SearchBlock;
