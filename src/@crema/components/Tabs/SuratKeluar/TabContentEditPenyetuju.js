import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AProfile from '../../../../assets/vector/Avatar.png';
import AppScrollbar from '@crema/components/AppScrollbar';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Check, Save, RefreshCw, List } from 'feather-icons-react';
import TabWrapper from '../../../../modules/suratKeluar/TabWrapper';
import TextField from '@mui/material/TextField';
import { MessageSquare, Paperclip } from 'feather-icons-react';
const TabContentEditPenyetuju = () => {
  const Judul = styled(Typography)({
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '20px',
  });
  const handleClick = () => {
    console.log('StyledBox clicked');
  };
  const BalasButton = styled(Button)({
    borderRadius: '10px',
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
    fontSize: '18px',
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
      <Stack rowGap='15px'>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Judul>Pemeriksa</Judul>
          <Stack direction={'row'} gap={5} marginRight={5}>
            <ButtonCustom>
              <List />
              List Profile
            </ButtonCustom>
            <ButtonCustom>
              <Save />
              Simpan
            </ButtonCustom>
            <ButtonCustom>
              <RefreshCw />
              Ganti
            </ButtonCustom>
          </Stack>
        </Stack>
        <TabWrapper sx={{ height: '130px' }} onClick={handleClick}>
          <Stack rowGap='10px'>
            <AppScrollbar
              sx={{
                height: '120px',
                overflowY: 'auto',
                padding: '2px 18px 2px 2px',
              }}
              scrollToTop={false}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <TabWrapper
                  key={index}
                  sx={{
                    border: 'none',
                    mb: 1,
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                  >
                    <Stack direction='row' columnGap='12px'>
                      <Avatar alt='Profile' src={AProfile} />
                      <Stack>
                        <Typography fontSize='16px' fontWeight='700'>
                          MANAGER IT PLANNING & PORTFOLIO MANAGEMENT
                        </Typography>
                        <Typography fontSize='12px'>
                          DODDY HADI RUKMANA, ST/720277
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack direction={'row'}>
                      <Check />
                    </Stack>
                  </Stack>
                </TabWrapper>
              ))}
            </AppScrollbar>
          </Stack>
        </TabWrapper>
        <TabWrapper sx={{ height: '130px' }} onClick={handleClick}>
          <Stack rowGap='10px'>
            <AppScrollbar
              sx={{
                height: '120px',
                overflowY: 'auto',
                padding: '0px 16px 0px 16px',
              }}
              scrollToTop={false}
            ></AppScrollbar>
          </Stack>
        </TabWrapper>
        <TabWrapper>
          <Stack rowGap='10px' sx={{ height: '100%', p:3 }}>
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
                <Paperclip />
              </ButtonCustom>
              <BalasButton>Balas</BalasButton>
            </Stack>
          </Stack>
        </TabWrapper>
      </Stack>
    </>
  );
};

export default TabContentEditPenyetuju;
