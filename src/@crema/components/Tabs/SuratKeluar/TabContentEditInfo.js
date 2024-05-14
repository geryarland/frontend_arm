import React from 'react';
import {
  Stack,
  TableRow,
  TableBody,
  Table,
  TableContainer,
  TextField,
  Link,
  Typography,
} from '@mui/material';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import TabWrapper from '../../../../modules/suratKeluar/TabWrapper';
import TableCellWrapper from '../../../../modules/suratKeluar/TableCellWrapper';
import ClassificationProblem from '@crema/components/AppClassificationProblem';

const TabContentEditInfo = () => {
  const [isClassificationProblem, setClassificationProblem] =
    React.useState(false);

  const onOpenClassificationProblem = () => {
    setClassificationProblem(true);
  };
  const onCloseClassificationProblem = () => {
    setClassificationProblem(false);
  };
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
                <TableRow>
                  <TableCellWrapper className='medium' style={{ width: '40%' }}>
                    Perihal
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
                    <TextField fullWidth />
                  </TableCellWrapper>
                </TableRow>
                <TableRow>
                  <TableCellWrapper className='medium' style={{ width: '40%' }}>
                    <Stack direction='row'>
                      <Link
                        component='button'
                        underline='always'
                        sx={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: 'black',
                          textDecorationColor: 'black',
                        }}
                        onClick={() => onOpenClassificationProblem()}
                      >
                        Klasifikasi Masalah
                      </Link>
                      <Typography variant='h4' color='red'>
                        *
                      </Typography>
                    </Stack>
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
                    <TextField fullWidth />
                  </TableCellWrapper>
                </TableRow>
                <TableRow>
                  <TableCellWrapper className='medium' style={{ width: '40%' }}>
                    Prioritas Surat
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
                    <TextField fullWidth />
                  </TableCellWrapper>
                </TableRow>
                <TableRow>
                  <TableCellWrapper className='medium' style={{ width: '40%' }}>
                    Jenis Surat
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
                    <TextField fullWidth />
                  </TableCellWrapper>
                </TableRow>
                <TableRow>
                  <TableCellWrapper className='medium' style={{ width: '40%' }}>
                    Lampiran
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
                    <TextField fullWidth />
                  </TableCellWrapper>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </TabWrapper>
      <ClassificationProblem
        isClassificationProblem={isClassificationProblem}
        onCloseClassificationProblem={onCloseClassificationProblem}
        text='Klasifikasi Masalah'
      />
      {/* <PdfCard /> */}
    </>
  );
};

export default TabContentEditInfo;
