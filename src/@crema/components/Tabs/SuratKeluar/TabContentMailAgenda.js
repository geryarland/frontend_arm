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
const TabContentMailAgenda = () => {
  const info = [
    {
      desc: 'In.01/01/HK/2024',
      name: 'No Agenda',
    },
    {
      desc: '26-07-2025',
      name: 'Tanggal Dikirim',
    },
    {
      desc: 'In.01/HK',
      name: 'No Surat',
    },
    {
      desc: 'Jabatan Pegawai',
      name: 'Dari',
    },
    {
      desc: 'Direktur Utama',
      name: 'Kepada',
    },
    {
      desc: 'Direktur Utama',
      name: 'Tembusan',
    },
    {
      desc: 'Undangan Workshop Pemahaman ISO90012015 Layangan Contact Center Pegadaian - surat masuk',
      name: 'Perihal',
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

export default TabContentMailAgenda;
