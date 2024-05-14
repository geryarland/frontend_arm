import React from 'react';
import {
  Stack,
  Typography,
  Box,
  Button,
  Divider,
  InputBase,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AppScrollbar from '@crema/components/AppScrollbar';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import ListKomentar from './ListKomentar';
const Komentar = () => {
  const BalasButton = styled(Button)({
    borderRadius: '25px',
    backgroundColor: '#4B4747',
    color: 'white',
    fontSize: '12px',
    boxShadow: 'none',
    textTransform: 'none',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    '&:hover': {
      backgroundColor: '#E42313',
      borderColor: '#E42313',
      boxShadow: 'none',
    },
  });

  return (
    <Box
      sx={{
        marginTop: '50px',
        backgroundColor: '#ffffff',
        border: '1px solid #d8d8d8',
        borderRadius: '10px',
        paddingY: '16px',
        mb: 6,
      }}
    >
      <Stack rowGap='10px'>
        <Typography fontSize='16px' fontWeight='700' paddingX='18px'>
          Komentar <span style={{ color: '#E42313' }}>*</span>
        </Typography>
        <Divider sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }} />
        <AppScrollbar
          sx={{
            height: '455px',
            overflowY: 'auto',
            paddingBottom: '10px',
          }}
          scrollToTop={false}
        >
          <ListKomentar label={'Dikirimkan'} />
          <ListKomentar label={'Disetujui'} />
        </AppScrollbar>
      </Stack>
      <Stack
        direction='row'
        columnGap='16px'
        paddingX='16px'
        sx={{ marginTop: '8px', justifyContent: 'space-between' }}
      >
        <InputBase
          placeholder='Tambahkan Komentar...'
          sx={{
            width: '100%',
            border: '0.5px solid #8C8F93',
            borderRadius: '8px',
            paddingX: '8px',
          }}
        />
        <BalasButton>Balas</BalasButton>
      </Stack>
    </Box>
  );
};

export default Komentar;
