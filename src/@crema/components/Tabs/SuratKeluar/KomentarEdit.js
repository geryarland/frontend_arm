import React from 'react';
import {
  Stack,
  Typography,
  Box,
  Button,
  Divider,
  InputBase,
} from '@mui/material';
import AppScrollbar from '@crema/components/AppScrollbar';
import TextField from '@mui/material/TextField';
import { MessageSquare, Paperclip } from 'feather-icons-react';
import { styled } from '@mui/material/styles';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import ListKomentar from './ListKomentar';
const KomentarEdit = () => {
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
  const ButtonCustom = styled(Button)({
    borderRadius: '10px',
    backgroundColor: 'white',
    color: 'black',
    fontSize: '12px',
    boxShadow: 'none',
    textTransform: 'none',
    padding: '6px 12px',
    border: '1px solid #d8d8d8',
    lineHeight: 1.5,
    gap: '5px',
    '&:hover': {
      backgroundColor: '#8C8F93',
      borderColor: '#8C8F93',
      boxShadow: 'none',
    },
  });
  return (
    <>
      <Box
        sx={{
          marginTop: '50px',
          backgroundColor: '#ffffff',
          border: '1px solid #d8d8d8',
          borderRadius: '10px',
          paddingY: '16px',
          mb: 6,
          height: '250px',
        }}
      >
        <Stack rowGap='10px' sx={{ height: '100%' }}>
          <Stack direction={'row'} paddingX='18px'>
            <MessageSquare style={{ width: '18px' }} />
            <Typography fontSize='16px' fontWeight='700' paddingX='8px'>
              Komentar <span style={{ color: '#E42313' }}>*</span>
            </Typography>
          </Stack>
          <TextField
            multiline
            rows={4}
            sx={{ marginTop: '8px', padding: '10px 20px 0px 20px' }}
            placeholder={'Tambahkan komentar...'}
            name='email'
            variant='outlined'
          />
          <Stack
            direction='row'
            columnGap='16px'
            paddingX='16px'
            sx={{ marginTop: '8px', justifyContent: 'end' }}
          >
            <ButtonCustom>
              <Paperclip /> Masukan File
            </ButtonCustom>
            <BalasButton>Balas</BalasButton>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          marginTop: '20px',
          backgroundColor: '#ffffff',
          border: '1px solid #d8d8d8',
          borderRadius: '10px',
          paddingY: '16px',
          mb: 6,
          height: '357px',
        }}
      >
        <Stack rowGap='10px' sx={{ height: '100%' }}>
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
        </Stack>
      </Box>
    </>
  );
};

export default KomentarEdit;
