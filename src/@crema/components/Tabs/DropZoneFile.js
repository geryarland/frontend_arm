import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import UploadFile from '../../../assets/icon/uploadfile.svg';
import PdfVector from '../../../assets/vector/PdfVector.svg';
import AppScrollbar from '@crema/components/AppScrollbar';
const DropZoneFile = () => {
  const [file, setFile] = useState([]);
  const [upload, setUpload] = useState(true);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const Buttons = styled(Button)(({ theme }) => ({
    borderRadius: '8px',
    backgroundColor: theme.palette.coofis.primary.main,
    fontSize: '14px',
    boxShadow: 'none',
    padding: '8px 16px',
    minWidth: '90px',
    lineHeight: 1.5,
    '&:hover': {
      backgroundColor: theme.palette.coofis.primary.main,
      borderColor: theme.palette.coofis.primary.main,
      boxShadow: 'none',
    },
  }));

  const handleFileSelected = (event) => {
    const files = event.target.files;
    setFile([...file, ...files]);
    setUpload(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setFile([...file, ...files]);
    setUpload(false);
  };

  const handleDeleteFile = (index) => {
    const newFiles = [...file];
    newFiles.splice(index, 1);
    setFile(newFiles);
    if (newFiles.length == 0) {
      setUpload(true);
    }
  };
  return (
    <Box position='relative'>
      <AppScrollbar
        sx={{
          height: '330px',
          width: '100%',
          position: 'relative',
          border: '1px dashed #B1B5BA',
          borderRadius: '10px',
          overflowY: 'auto',
        }}
        scrollToTop={false}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {upload && (
          <>
            <Stack
              rowGap='8px'
              justifyContent='center'
              alignItems='center'
              position='absolute'
              top='50%'
              left='50%'
              sx={{ transform: 'translate(-50%, -50%)' }}
            >
              <img
                src={UploadFile}
                alt='Upload File'
                style={{ height: '54px' }}
              />
              <Stack direction='row' columnGap='4px'>
                <Typography fontSize='18px'>Tarik File atau </Typography>
                <Typography
                  fontSize='18px'
                  fontWeight='700'
                  color='#E42313'
                  component='label'
                  sx={{ cursor: 'pointer' }}
                >
                  Cari
                  <VisuallyHiddenInput
                    type='file'
                    multiple
                    onChange={handleFileSelected}
                  />
                </Typography>
              </Stack>
            </Stack>
          </>
        )}
       <Grid container columns={12} spacing={5}>
          {file.map((file, index) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={index} sx={{}}>
              <Stack
                sx={{
                  borderRadius: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: 2,
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.gray[300],
                  },
                }}
              >
                <img
                  src={PdfVector}
                  height={'93px'}
                  width={'80px'}
                  alt='PDF Icon'
                />
                <Typography
                  sx={{
                    pt: 1,
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 1, // Number of lines to show
                  }}
                >
                  {file.name}
                </Typography>
                <Stack
                  direction='row'
                  sx={{ alignItems: 'center', justifyContent: 'center' }}
                  gap={2}
                >
                  <Typography fontSize='12px'>
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </Typography>
                  <Typography fontSize='9px'>Edit</Typography>
                  <Typography
                    fontSize='9px'
                    onClick={() => handleDeleteFile(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    Delete
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </AppScrollbar>
      {!upload && (
        <Box
          position='absolute'
          bottom='0'
          width='100%'
          zIndex='1'
          justifyContent='end'
          display='flex'
        >
          <Buttons
            variant='contained'
            component='label'
            sx={{ margin: '16px', borderRadius: '50px' }}
          >
            Tambah File Lagi
            <VisuallyHiddenInput
              type='file'
              multiple
              onChange={handleFileSelected}
            />
          </Buttons>
        </Box>
      )}
    </Box>
  );
};

export default DropZoneFile;
