import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
import { Box } from '@mui/material';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = () => {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Box backgroundColor='#525659'>
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          file={require('./pdf-test.pdf')}
        />
        <Box
        sx={{
          border: '1px solid #D8D8D8',
          minHeight: '900px',
        }}
        paddingTop='100px'
        paddingBottom='30px'
        display='flex'
        justifyContent='center'
      >
        <Document
          file={require('./pdf-test.pdf')}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
        </Box>
    </Box>
  );
};

export default PDFReader;
