import React, { useState } from "react";
import "./style.scss";
import { Input, InputWithIcon } from "./input.jsx";
import search from "../images/search.svg";
import MagnifyingGlass from "../images/MagnifyingGlass.svg";
import { Row, Col, Button } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import printJS from "print-js";
import pdfPrint from "../images/pdfPrint.svg";
import pdfDownlode from "../images/downlodPdf.svg";
const SearchBlock = (props) => {
  let [advanceSearch, setAdvanceSearch] = useState(false);
  let [searchKey, setSearchKey] = useState("");

  const onKeyUp = (e) => {
    console.log(props);
    if (e.key === "Enter") {
      props.history.push(`/patient/dashboard?searchKey=${searchKey}`);
      return;
    }
    setSearchKey(e.target.value);
    if (props.onKeyUpMethod) {
      props.onKeyUpMethod(e);
    }
    console.log(e);
  };
  const showAdvanceSearch = () => {
    //   let search = !advanceSearch
    setAdvanceSearch(!advanceSearch);
  };

  const downloadPage = () => {
    html2canvas(document.querySelector(".Demographics")).then((canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      console.log(imgData);
      const pdf = new jsPDF();
      console.log(pdf);
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };

  const printPage = () => {
    // printJS({
    //   printable: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
    //   type: "pdf",
    //   showModal: true,
    // });
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
            style={{ cursor: "pointer" }}
            onClick={showAdvanceSearch}
          >
            Advanced Search
          </a>
        </div>
        <div className="pdfActionBtns d-flex align-items-center">
          <Button variant="primary" className="pdfDownlode" onClick={printPage}>
            <img src={pdfDownlode} alt="Sign in" className="signInImage" />
            Download
          </Button>
          <Button variant="primary" className="pdfPrint" onClick={printPage}>
            <img src={pdfPrint} alt="Sign in" className="signInImage" />
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
