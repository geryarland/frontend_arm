import React from 'react';
import { Box, Grid } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';

const PdfCard = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();
  return (
    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          border: '1px solid #D8D8D8',
          minHeight: '1209px',
          minWidth: '821px',
        }}
      >
        <Document width={'fit-content'} file={require('../../../../modules/suratKeluar/perluTindakLanjut/Preview Surat.pdf')}>
          <Page pageNumber={1} />
        </Document>
      </Box>
    </Grid>
  );
};
export default PdfCard;
