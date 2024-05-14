import React from 'react';
import { Stack, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import TabWrapper from '../../../../modules/suratKeluar/TabWrapper';
import ListStaff from '../ListStaff';
const TabContentPenyetuju = () => {
  const Judul = styled(Typography)({
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '20px',
    padding: '16px 16px 0px 16px',
  });
  const handleClick = () => {
    console.log('TabWrapper clicked');
  };
  return (
    <>
      <Stack rowGap='11px'>
        <TabWrapper sx={{ height: '575px' }} onClick={handleClick}>
          <Stack rowGap='10px'>
            <Judul>Pemeriksa</Judul>
            <Divider
              sx={{
                borderColor: '#B1B5BA',
                borderBottomWidth: '1px',
                padding: '0px',
              }}
            />
            <ListStaff
              sx={{
                height: '510px',
                padding: '0px 16px 0px 16px',
              }}
            />
            {/* <AppScrollbar
              sx={{
                height: '510px',
                overflowY: 'auto',
                padding: '0px 16px 0px 16px',
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
            </AppScrollbar> */}
          </Stack>
        </TabWrapper>
      </Stack>
    </>
  );
};

export default TabContentPenyetuju;
