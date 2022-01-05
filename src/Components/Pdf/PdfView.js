import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import pdf from "./whitepaper.pdf";
import "./pdf.css";

export default function PdfViewer(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>

      <a
        href="https://github.com/Saiyam1899/Coming/raw/96f6c2c280c44c6c2717daaac6142cc545d03c2f/public/assets/final-white-paper_compressed.pdf"
        id="raw-url"
        data-view-component="true"
        class="btn-sm btn BtnGroup-item"
      >
        <Button>Download</Button>
      </a>
    </>
  );
}
