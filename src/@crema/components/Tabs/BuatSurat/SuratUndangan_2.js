import React from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import ComposeMail from '@crema/components/AppAddress';
import TextFieldTime from './TextFieldTime/TextFieldTime';
import TextFieldDate from './TextFieldDate/TextFieldDate';
import { users } from '@crema/services/dummy/user/user';

const SuratUndangan_2 = ({ handleNext, handlePrev }) => {
  const [isComposeMail, setComposeMail] = React.useState(false);

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  return (
    <>
      <Stack
        spacing={4}
        sx={{
          border: '1px solid #D8D8D8',
          minHeight: '570px',
          borderRadius: '12px',
          padding: '15px',
        }}
      >
        <Typography variant='h4'>Hari/Tanggal</Typography>

        <Stack direction='row' spacing={5}>
          <Stack flex={1} spacing={2}>
            <Typography variant='body1'>Dari</Typography>
            <TextFieldDate />
          </Stack>
          <Stack flex={1} spacing={2}>
            <Typography variant='body1'>Sampai</Typography>
            <TextFieldDate />
          </Stack>
        </Stack>

        <Typography variant='h4'>Waktu</Typography>
        <Stack direction='row' spacing={5}>
          <Stack flex={1} spacing={2}>
            <Typography variant='body1'>Dari</Typography>
            <TextFieldTime />
          </Stack>
          <Stack flex={1} spacing={2}>
            <Typography variant='body1'>Sampai</Typography>
            <TextFieldTime />
          </Stack>
        </Stack>

        <Typography variant='h4'>Lokasi</Typography>
        <TextField fullWidth rows={4} multiline />

        <Typography variant='h4'>Agenda</Typography>
        <TextField fullWidth rows={4} multiline />

        <Stack direction='row' justifyContent='flex-end' spacing={4}>
          <Button
            variant='contained'
            sx={{
              borderRadius: '12px',
              bgcolor: '#D9DDE3',
              color: '#5C5E61',
              minWidth: '84px',
            }}
            onClick={handlePrev}
          >
            Kembali
          </Button>

          <Button
            variant='contained'
            sx={{
              borderRadius: '12px',
              bgcolor: '#E42313',
              minWidth: '220px',
              minHeight: '50px',
            }}
            onClick={handleNext}
          >
            Selanjutnya (Penerima)
          </Button>
        </Stack>
      </Stack>

      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
        datas={users}
      />
    </>
  );
};

SuratUndangan_2.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default SuratUndangan_2;
