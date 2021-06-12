import React from "react";
import PDFViewer from "mgr-pdf-viewer-react";
import PropTypes from "prop-types";

const PDFViewerComponent = () => {
  return (
    <PDFViewer
      document={{
        url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
      }}
      scale={true}
    />
  );
};

export default PDFViewerComponent;
