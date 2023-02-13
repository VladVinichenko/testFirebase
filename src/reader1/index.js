import React, { useEffect, useState } from 'react';
import { getURL } from '../firebase';

import { Viewer  } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
export function Reader1() {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  const [download, setDownload] = useState(null);

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  // };

  // function changePage(offset) {
  //   setPageNumber(prevPageNumber => prevPageNumber + offset);
  // }

  // function previousPage() {
  //   changePage(-1);
  // }

  // function nextPage() {
  //   changePage(1);
  // }
// console.log(download);
useEffect(() => {
console.log('i fire once');
  getURL(async function(res){await setDownload(res)})

}, [])




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
