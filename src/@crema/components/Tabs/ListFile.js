import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Stack, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppScrollbar from '@crema/components/AppScrollbar';
import PdfVector from '../../../assets/vector/PdfVector.svg';
import { Menu, Grid as IconGrid } from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '../../../redux/actions/tabAction';

const ListFile = ({ files, label }) => {
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #d8d8d8',
    borderRadius: '10px',
    padding: '16px',
  }));

  const [listType, setListType] = useState(0);
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const id = useSelector((state) => state.tab.idCounter);

  const handleDetailList = () => {
    setListType(1);
  };

  const handleImageList = () => {
    setListType(0);
  };

  const bytesConvert = (bytes) => {
    const mb = bytes / (1024 * 1024);
    if (mb < 1) {
      return (bytes / 1024).toFixed(2) + ' Kb';
    } else {
      return (bytes / (1024 * 1024)).toFixed(2) + ' Mb';
    }
  };

  const handleOpenFile = () => {
    dispatch(addTab(id, tabs, 'Buka Surat'));
  };

  return (
    <>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        paddingBottom='16px'
      >
        <Typography fontSize='16px' fontWeight='700'>
          {label}
        </Typography>
        <Stack direction='row' columnGap='24px' alignItems='center'>
          <Typography color='#0F6EB5'>See more</Typography>
          <IconButton onClick={handleDetailList}>
            <Menu />
          </IconButton>
          <IconButton onClick={handleImageList}>
            <IconGrid />
          </IconButton>
        </Stack>
      </Stack>
      <AppScrollbar
        sx={{
          minHeight: '100px',
          maxHeight: '180px',
          overflowY: 'auto',
          border: '1px solid #E0E0E0',
        }}
        scrollToTop={false}
      >
        {listType == 0 ? (
          <Grid container columns={12} spacing={5}>
            {files.map((file, index) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={4}
                lg={3}
                key={index}
                onClick={() => handleOpenFile()}
                alignItems={'center'}
              >
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
                      //   onClick={() => handleDeleteFile(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      Delete
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Stack>
            {files.map((file, index) => (
              <StyledBox
                key={index}
                sx={{
                  border: 'none',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.gray[300],
                    cursor: 'pointer',
                  },
                }}
              >
                <Stack
                  direction='row'
                  columnGap='12px'
                  alignItems='center'
                  onClick={() => handleOpenFile()}
                >
                  <img
                    src={PdfVector}
                    alt='Pdf File'
                    style={{ height: '30px', width: 'fit-content' }}
                  />
                  <Stack>
                    <Typography fontSize='14px'>{file.name}</Typography>
                    <Stack direction='row' columnGap='16px'>
                      <Typography fontSize='10px'>
                        {bytesConvert(file.size)}
                      </Typography>
                      <Typography fontSize='10px'>Edit</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </StyledBox>
            ))}
          </Stack>
        )}
      </AppScrollbar>
    </>
  );
};
ListFile.propTypes = {
  props: PropTypes.shape({}),
  label: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      Lampiran: PropTypes.any.isRequired,
      Refrensi: PropTypes.any.isRequired,
    }),
  ).isRequired,
};
export default ListFile;
