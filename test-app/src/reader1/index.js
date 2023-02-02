import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import { getURL } from '../firebase';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;


export function Reader1() {
  const [pdfString, setPdfString] = useState('');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [download, setDownload] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

useEffect(() => {

  getURL(function(res){setDownload(res)})

}, [])

// useEffect(() => {
//   pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
// }, [])





console.log(download);
  return (
    <div>
{download &&       <Document
        file={download}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>}
   
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
    </div>
  );
}


{/* <Document file={download} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>       <p>
        Page {pageNumber} of {numPages}
      </p>*/}