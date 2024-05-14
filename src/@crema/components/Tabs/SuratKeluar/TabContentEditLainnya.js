import React from 'react';
import { Stack, Typography } from '@mui/material';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { styled } from '@mui/material/styles';
import TabWrapper from '../../../../modules/suratKeluar/TabWrapper';
import DropZoneFile from '../DropZoneFile';
const TabContentEditLainnya = () => {
  const Judul = styled(Typography)({
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '20px',
  });
  return (
    <TabWrapper>
      <Stack height={'100%'} sx={{ p: 5, rowGap:3 }}>
        <Stack rowGap='10px'>
          <Stack direction='row' justifyContent='space-between'>
            <Judul>Lampiran</Judul>
          </Stack>
          <DropZoneFile />
        </Stack>
        <Stack>
          <Judul>Perhatian:</Judul>
          <Typography
            sx={{
              padding: '5px 16px 0px 16px',
            }}
          >
            Total Ukuran Surat & Lampiran yang dapat diproses maksimal 25 MB
          </Typography>
        </Stack>
        <Stack rowGap='10px'>
          <Stack direction='row' justifyContent='space-between' sx={{ mt: 1 }}>
            <Judul>Refrensi: </Judul>
          </Stack>
          <DropZoneFile />
        </Stack>
      </Stack>
    </TabWrapper>
  );
};

export default TabContentEditLainnya;
