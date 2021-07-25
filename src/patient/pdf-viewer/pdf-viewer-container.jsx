import React, {useEffect, useState} from "react";
import "../patient-dashboard/style.scss";
import PDFViewerComponent from "../../components/pdf-viewer";
import arrowWhite from "../../images/arrow-leftWhite.svg";
import pdfDownlode from "../../images/downlodPdf.svg";
import pdfPrint from "../../images/pdfPrint.svg";
import {Button} from "react-bootstrap";
import printJS from "print-js";
import {getDownloadableLink} from "./api";
import {setLoadingState} from "../../_actions/User.action";
import {useDispatch} from "react-redux";
import {getDateForDocs} from "../../_utils/common-utils";

const PDFViewerContainer = (props) => {
    let [pdfLink, setPdfLink] = useState(null)
    let [docDetails, setDocDetails] = useState(null)
    let prevSearchData = props.location.state.detail
    let prevSearchKey = props.location.search
    const dispatch = useDispatch()

    let patientId = props.match.params.patientId;
    let practiceId = props.match.params.practiceId;
    let documentId = props.match.params.documentId;
    const printPage = () => {
        if (pdfLink)
            printJS({
                printable: pdfLink,
                type: "pdf",
                showModal: true,
            });
    };
    const goBack = () => {
        props.history.push(
            {
                pathname: `/practice/${practiceId}/patient/${patientId}/details/documents/`,
                search: prevSearchKey,
                state: {detail: prevSearchData}
            }
        );
    };
    useEffect(async () => {
        dispatch(setLoadingState(true))
        let pdfResp = await getDownloadableLink(practiceId, patientId, documentId);
        dispatch(setLoadingState(false))
        setPdfLink(pdfResp.url)
        setDocDetails(pdfResp)

    }, []);
    return (
        <div className="pdfViewrBlock">
            <div className="pdfHeader">
                <div className="pdfName">
                    <img onClick={goBack} src={arrowWhite} alt="arrowWhite"/>
                    <div className="pdfNameBlock">
                        <p>{docDetails ? docDetails.description : "-"}</p>
                        <div className="pdfInfoBlock">
                            <p>{docDetails ? docDetails.name : "-"}</p>
                            <p>—</p>
                            <p>{docDetails ? `[${docDetails.category}]` : ""}</p>
                            <p>—</p>
                            <p>{docDetails ? `[${docDetails.dateCreated}]` : ""}</p>
                        </div>
                    </div>
                </div>
                <div className="pdfBtns d-flex align-items-center">
                    <Button
                        variant="primary"
                        className="pdfDownlode "
                        onClick={printPage}
                    >
                        <img src={pdfDownlode} alt="Sign in" className="signInImage"/>
                        Download
                    </Button>
                    <Button variant="primary" className="pdfPrint" onClick={printPage}>
                        <img src={pdfPrint} alt="Sign in" className="signInImage"/>
                        Print
                    </Button>
                </div>
            </div>
            <PDFViewerComponent link={pdfLink}/>
        </div>
    );
};

export default PDFViewerContainer;
