import React from 'react';
import { Stack, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import TabWrapper from '../../../../modules/suratKeluar/TabWrapper';
import ListStaff from '../ListStaff';
const TabContentPenerima = () => {
  const Judul = styled(Typography)({
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '20px',
    padding: '16px 16px 0px 16px',
  });
  const handleClick = () => {
    console.log('StyledBox clicked');
  };
  return (
    <>
      <Stack rowGap='11px'>
        <TabWrapper sx={{ height: '282px' }} onClick={handleClick}>
          <Stack rowGap='10px'>
            <Judul>Untuk</Judul>
            <Divider
              sx={{
                borderColor: '#B1B5BA',
                borderBottomWidth: '1px',
                padding: '0px',
              }}
            />
            <ListStaff
              sx={{
                height: '210px',
                overflowY: 'auto',
                padding: '0px 16px 0px 16px',
              }}
            />
          </Stack>
        </TabWrapper>
        <TabWrapper sx={{ height: '282px' }} onClick={handleClick}>
          <Stack rowGap='10px'>
            <Judul>Tembusan</Judul>
            <Divider
              sx={{
                borderColor: '#B1B5BA',
                borderBottomWidth: '1px',
                padding: '0px',
              }}
            />
            <ListStaff
              sx={{
                height: '210px',
                overflowY: 'auto',
                padding: '0px 16px 0px 16px',
              }}
            />
          </Stack>
        </TabWrapper>
      </Stack>
    </>
  );
};

export default TabContentPenerima;
