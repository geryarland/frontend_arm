import React from 'react';
import { Stack } from '@mui/material';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import TabWrapper from '../../../../modules/suratKeluar/TabWrapper';
import {
  listData1,
  listData2,
  listData3,
} from '../../../../@crema/services/dummy/sidebar/listDataSuratKeluar';
import ListFile from '../ListFile';
const TabContentLainnya = () => {
  const files = [listData1, listData2, listData3];
  const lampiran = files[0][0].Lampiran;
  const refrensi = files[0][0].Refrensi;
  return (
    <>
      <TabWrapper sx={{ height: '575px' }}>
        <Stack rowGap='10px' sx={{ p: 5 }}>
          <ListFile files={lampiran} label='Lampiran' />
        </Stack>
        <Stack rowGap='10px' sx={{ p: 5 }}>
          <ListFile files={refrensi} label='Refrensi' />
        </Stack>
      </TabWrapper>
    </>
  );
};

export default TabContentLainnya;
{
  /* <Stack direction='row' justifyContent='space-between'>
            <Judul>Lampiran</Judul>
            <Stack direction='row'>
              <Judul>
                <a style={{ textDecoration: 'none' }} href='#'>
                  See More
                </a>
              </Judul>
              <Judul>
                <img src={menuIcon} />
              </Judul>
              <Judul>
                <img src={gridIcon} />
              </Judul>
            </Stack>
          </Stack>
          <AppScrollbar
            sx={{
              height: '210px',
              overflowY: 'auto',
              border: '1px solid #B1B5BA',
              width: '97%',
              ml: 3,
              borderRadius: 2,
              borderStyle: 'dashed',
              borderColor: 'black',
              borderWidth: '1px',
              cursor: 'pointer',
            }}
            scrollToTop={false}
          >
            <DropZone></DropZone>
          </AppScrollbar> */
}
{
  /* <Stack direction='row' justifyContent='space-between' sx={{ mt: 5 }}>
            <Judul>Lampiran</Judul>
            <Stack direction='row'>
              <Judul>
                <a style={{ textDecoration: 'none' }} href='#'>
                  See More
                </a>
              </Judul>
              <Judul>
                <img src={menuIcon} />
              </Judul>
              <Judul>
                <img src={gridIcon} />
              </Judul>
            </Stack>
          </Stack>
          <AppScrollbar
            sx={{
              height: '210px',
              overflowY: 'auto',
              border: '1px solid #B1B5BA',
              width: '97%',
              ml: 3,
              borderRadius: 2,
              borderStyle: 'dashed',
              borderColor: 'black',
              borderWidth: '1px',
              cursor: 'pointer',
            }}
            scrollToTop={false}
          >
            <DropZone></DropZone>
          </AppScrollbar> */
}
