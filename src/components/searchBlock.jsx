import React, { useState } from "react";
import "./style.scss";
import { Input, InputWithIcon } from "./input.jsx";
import search from "../images/search.svg";
import MagnifyingGlass from "../images/MagnifyingGlass.svg";
import { Row, Col, Button } from "react-bootstrap";
const SearchBlock = (props) => {
  let [advanceSearch, setAdvanceSearch] = useState(false);

  const onKeyUp = (e) => {
    if (props.onKeyUpMethod) {
      props.onKeyUpMethod(e);
    }
  };
  const showAdvanceSearch = () => {
    //   let search = !advanceSearch
    setAdvanceSearch(!advanceSearch);
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
            style={{ cursor: "pointer" }}
            onClick={showAdvanceSearch}
          >
            Advanced Search
          </a>
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
                    placeholder="Username"
                    type="text"
                    inputClass="advancedInput"
                    label="New ID"
                  />
                </Col>
                <Col className="advancedInputBlock">
                  <Input
                    placeholder="Username"
                    type="text"
                    inputClass="advancedInput"
                    label="Old ID"
                  />
                </Col>
                <Col className="advancedInputBlock">
                  <Input
                    placeholder="Username"
                    type="text"
                    inputClass="advancedInput"
                    label="Date of birth"
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row xs={1} sm={1} md={2} lg={2}>
                <Col className="advancedInputBlock">
                  <Input
                    placeholder="Username"
                    type="text"
                    inputClass="advancedInput"
                    label="First name"
                  />
                </Col>
                <Col className="advancedInputBlock">
                  <Input
                    placeholder="Username"
                    type="text"
                    inputClass="advancedInput"
                    label="Last name"
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
