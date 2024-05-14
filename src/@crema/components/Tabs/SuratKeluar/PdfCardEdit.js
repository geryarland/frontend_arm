import React from 'react';
import { Typography, Stack, List, ListItem } from '@mui/material';
import PropTypes from 'prop-types';
import TinyMce from './TinyMce';
const PdfCardEdit = ({ kepada, tembusan, pengirim, info }) => {
  console.log(kepada);

  const currentDate = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = currentDate.toLocaleDateString('id-ID', options);
  return (
    <Stack padding={'20px'}>
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight: 'bold' }}>
        Nomor:
      </Typography>
      <br />
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight: 'bold' }}>
        Jakarta, 29 Juli 2023
      </Typography>
      <br />
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight: 'bold' }}>
        Kepada:
        <List>
          {kepada &&
            kepada.map((item, index) => (
              <ListItem key={index}>
                {index + 1}. Sdr. {item.nama}
              </ListItem>
            ))}
        </List>
      </Typography>
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight: 'bold' }}>
        Dari:
      </Typography>
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight: 'bold' }}>
        Lampiran: {info && info.lampiran}
      </Typography>
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight: 'bold' }}>
        Hal: {info && info.perihal}
      </Typography>
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight: 'bold' }}>
        Tanggal: {formattedDate}
      </Typography>
      <br />
      <br />
      <Stack spacing={2}>
        <Typography variant='body2'>Isi Surat:</Typography>
        <TinyMce />
      </Stack>
      <br />
      <Typography
        variant='subtitle1'
        sx={{ paddingLeft: '75%', mb: 2, pr: 15 }}
      >
        {}
      </Typography>
     <Stack>
      
     </Stack>
      <Typography
        variant='subtitle1'
        sx={{
          paddingLeft: '75%',
          fontWeight: 'bold',
          textDecoration: 'underline',
        }}
      >
        {pengirim && pengirim.nama}
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{
          paddingLeft: '75%',
          mb: 2,
          fontWeight: 'bold',
          pr: 25,
        }}
      >
        {pengirim && pengirim.nikl}
      </Typography>
      <br />
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight: 'bold' }}>
        Tembusan:
        <List>
          {tembusan &&
            tembusan.map((item, index) => (
              <ListItem key={index}>
                {index + 1}. Sdr. {item.nama}
              </ListItem>
            ))}
        </List>
      </Typography>
      {/* <button onClick={exportToPDF}>Export to PDF</button> */}
    </Stack>
  );
};
PdfCardEdit.propTypes = {
  kepada: PropTypes.any,
  tembusan: PropTypes.any,
  pengirim: PropTypes.any,
  info: PropTypes.any,
};
export default PdfCardEdit;
