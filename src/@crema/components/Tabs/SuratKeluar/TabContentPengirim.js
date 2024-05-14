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

const TabContentPengirim = () => {
  const Pengirim = [
    {
      desc: 'Kepala Research dan Development',
      name: 'Jabatan',
    },
    {
      desc: 'Taufik Sulaeman',
      name: 'Nama',
    },
    {
      desc: '8900002',
      name: 'Nik',
    },
    {
      desc: 'Divisi Informasi',
      name: 'Divisi',
    },
    {
      desc: 'Decision Support',
      name: 'Departemen',
    },
    {
      desc: 'DIT-11 B 10000',
      name: 'Departemen Code',
    },
    {
      desc: 'Bandung',
      name: 'Kota Kantor',
    },
    {
      desc: '-',
      name: 'Pemohon',
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
                {Pengirim.map((row) => (
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
    </>
  );
};

export default TabContentPengirim;
