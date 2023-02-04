import React, { useEffect, useState } from 'react';
// import { Document, Page, pdfjs } from "react-pdf";
import { getURL } from '../firebase';
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// import PDFViewer from 'pdf-viewer-reactjs'
import { Viewer  } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
export function Reader1() {
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





console.log(download);
//   return (
//     <div>
// {download &&       <Document
//         file={download}
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>}
   
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//       <button
//           type="button"
//           disabled={pageNumber <= 1}
//           onClick={previousPage}
//         >
//           Previous
//         </button>
//         <button
//           type="button"
//           disabled={pageNumber >= numPages}
//           onClick={nextPage}
//         >
//           Next
//         </button>
//     </div>
//   );

return (
  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
  {download && <div
    style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        height: '750px',
    }}
>
    <Viewer fileUrl={download} />
</div>}
</Worker>
)
}
