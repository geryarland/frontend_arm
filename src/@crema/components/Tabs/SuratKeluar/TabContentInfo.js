import React from 'react';
import {
  Stack,
  TableRow,
  TableBody,
  Table,
  TableContainer,
} from '@mui/material';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import TabWrapper from '../../../../modules/suratKeluar/TabWrapper';
import TableCellWrapper from '../../../../modules/suratKeluar/TableCellWrapper';
const TabContentInfo = () => {
  const info = [
    {
      desc: 'Surat penunjukan pelaksana pengadaan aplikasi si',
      name: 'Perihal',
    },
    {
      desc: 'In.02/HK',
      name: 'Klasifikasi Masalah',
    },
    {
      desc: 'Tinggi',
      name: 'Prioritas',
    },
    {
      desc: 'Rahasia',
      name: 'Jenis Surat',
    },
    {
      desc: '3 Berkas',
      name: 'Lampiran',
    },
  ];
  return (
    <>
      <TabWrapper
        sx={{
          height: '575px',
        }}
      >
        <Stack rowGap='10px'>
          <TableContainer>
            <Table aria-label='customized table'>
              <TableBody>
                {info.map((row) => (
                  <TableRow key={row.name}>
                    <TableCellWrapper
                      className='medium'
                      style={{ width: '40%' }}
                    >
                      {row.name}
                    </TableCellWrapper>
                    <TableCellWrapper
                      className='medium'
                      style={{ width: '2%', paddingRight: '0px' }}
                    >
                      :
                    </TableCellWrapper>
                    <TableCellWrapper
                      className='medium'
                      style={{ paddingLeft: '8px' }}
                    >
                      {row.desc}
                    </TableCellWrapper>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </TabWrapper>
      {/* <PdfCard /> */}
    </>
  );
};

export default TabContentInfo;
