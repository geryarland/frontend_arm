import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Stack, IconButton, Divider } from '@mui/material';
import {
  Printer,
  Download,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
} from 'feather-icons-react';

const ControlPanel = (props) => {
  const { file, pageNumber, numPages, setPageNumber, scale, setScale } = props;

  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages;

  // const firstPageClass = isFirstPage ? 'disabled' : 'clickable';
  // const lastPageClass = isLastPage ? 'disabled' : 'clickable';

  // const goToFirstPage = () => {
  //   if (!isFirstPage) setPageNumber(1);
  // };
  const goToPreviousPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    if (!isLastPage) setPageNumber(pageNumber + 1);
  };
  // const goToLastPage = () => {
  //   if (!isLastPage) setPageNumber(numPages);
  // };

  const onPageChange = (e) => {
    const { value } = e.target;
    setPageNumber(Number(value));
  };

  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 2.0;

  // const zoomOutClass = isMinZoom ? 'disabled' : 'clickable';
  // const zoomInClass = isMaxZoom ? 'disabled' : 'clickable';

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  const handleDownload = () => {
    if (!file) {
      console.error("File object is not provided.");
      return;
    }
  
    // Membuat blob dari file
    const blob = new Blob([file], { type: 'application/pdf' });
  
    // Membuat URL objek dari blob
    const url = URL.createObjectURL(blob);
  
    // Membuat anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.pdf';
    
    // Menambahkan anchor ke body dan melakukan klik
    document.body.appendChild(a);
    a.click();
  
    // Membersihkan URL objek
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const handlePrint = () => {
    const pdfFrame = document.createElement('iframe');
    pdfFrame.style.visibility = 'hidden';
    pdfFrame.src = file;

    document.body.appendChild(pdfFrame);

    pdfFrame.contentWindow.focus();
    pdfFrame.contentWindow.print();
  };

  return (
    <Box
      position='fixed'
      display='flex'
      width='-webkit-fill-available'
      height='70px'
      alignItems='center'
      backgroundColor='#323639'
      padding='24px'
      zIndex='3'
      color='white'
      justifyContent='space-between'
    >
      <Stack direction='row' columnGap='24px'>
        <Typography fontSize='16px'>Judul</Typography>
      </Stack>
      <Stack direction='row' columnGap='8px'>
      <Stack direction='row' columnGap='16px' alignItems='center'>
        <IconButton sx={{ color: 'white' }} onClick={goToPreviousPage}>
          <ChevronLeft />
        </IconButton>
        <span>
          <input
            name='pageNumber'
            type='number'
            min={1}
            max={numPages || 1}
            className='p-0 pl-1 mx-2'
            value={pageNumber}
            onChange={onPageChange}
          />{' '}
          / {numPages}
        </span>
        <IconButton sx={{ color: 'white' }} onClick={goToNextPage}>
          <ChevronRight />
        </IconButton>
      </Stack>
      <Divider orientation='vertical' flexItem sx={{ backgroundColor: 'grey' }}  />
      <Stack direction='row' columnGap='16px' alignItems='center'>
        <IconButton sx={{ color: 'white' }} onClick={zoomOut} >
          <Minus />
        </IconButton>
        <span>{(scale * 100).toFixed()}%</span>
        <IconButton sx={{ color: 'white' }} onClick={zoomIn}>
          <Plus />
        </IconButton>
      </Stack>
      </Stack>
      <Stack direction='row' columnGap='24px' alignItems='center'>
        <IconButton sx={{ color: 'white' }} onClick={handleDownload}>
          <Download />
        </IconButton>
        <IconButton sx={{ color: 'white' }} onClick={handlePrint}>
          <Printer />
        </IconButton>
      </Stack>
    </Box>
  );
};

ControlPanel.propTypes = {
  file: PropTypes.object.isRequired,
  pageNumber: PropTypes.number,
  numPages: PropTypes.number,
  setPageNumber: PropTypes.number,
  scale: PropTypes.number,
  setScale: PropTypes.number,
};

export default ControlPanel;
