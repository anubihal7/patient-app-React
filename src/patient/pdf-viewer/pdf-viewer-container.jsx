import React from "react";
import "../patient-dashboard/style.scss";
import PDFViewerComponent from "../../components/pdf-viewer";
import arrowWhite from "../../images/arrow-leftWhite.svg";
import pdfDownlode from "../../images/downlodPdf.svg";
import pdfPrint from "../../images/pdfPrint.svg";
import { Button } from "react-bootstrap";
import printJS from "print-js";

const PDFViewerContainer = (props) => {
  const printPage = () => {
    printJS({
      printable: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
      type: "pdf",
      showModal: true,
    });
  };
  const goBack = () => {
    props.history.push("/patient/details/documents");
  };
  return (
    <div className="pdfViewrBlock">
      <div className="pdfHeader">
        <div className="pdfName">
          <img onClick={goBack} src={arrowWhite} alt="arrowWhite" />
          <div className="pdfNameBlock">
            <p>Description lorem ipsum dolor sit amet</p>
            <div className="pdfInfoBlock">
              <p>Document-Name.PDF</p>
              <p>—</p>
              <p>[Category]</p>
              <p>—</p>
              <p>[MM/DD/YYYY]</p>
            </div>
          </div>
        </div>
        <div className="pdfBtns d-flex align-items-center">
          <Button
            variant="primary"
            className="pdfDownlode "
            onClick={printPage}
          >
            <img src={pdfDownlode} alt="Sign in" className="signInImage" />
            Download
          </Button>
          <Button variant="primary" className="pdfPrint" onClick={printPage}>
            <img src={pdfPrint} alt="Sign in" className="signInImage" />
            Print
          </Button>
        </div>
      </div>
      <PDFViewerComponent />
    </div>
  );
};

export default PDFViewerContainer;
