import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextFieldDate from '../TextFieldDate/TextFieldDate';
import { useFormik } from 'formik';
import * as yup from 'yup';

const SuratDelegasi_1 = ({ handleNext, onStateChange }) => {
  const formik = useFormik({
    initialValues: {
      perihal: '',
    },
    onSubmit: handleNext,
    validationSchema: yup.object().shape({
      perihal: yup.string().required('Kolom ini wajib diisi'),
    }),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    onStateChange({ ...formData, [name]: value });
    formik.setFieldValue(name, value);

    if (name === 'lampiran' && parseInt(value) < 0) {
      setFormData({ ...formData, [name]: 0 });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const [formData, setFormData] = useState({
    perihal: '',
    prioritas: '1',
    jenis: '1',
    lampiran: 1,
  });

  return (
    <Box>
      <Stack
        spacing={4}
        sx={{
          border: '1px solid #D8D8D8',
          minHeight: '420px',
          borderRadius: '12px',
          padding: '15px',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            '&::after': {
              content: '"*"',
              color: 'red',
            },
          }}
        >
          Perihal
        </Typography>

        <TextField
          id='outlined-select-currency'
          fullWidth
          name='perihal'
          error={formik.errors.perihal}
          value={formData.perihal}
          onChange={handleChange}
        />

        {formik.touched.perihal && formik.errors.perihal && (
          <Typography variant='body1' color='error'>
            {formik.errors.perihal}
          </Typography>
        )}

        <Stack direction='row' spacing={5}>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>Tanggal Mulai</Typography>
            <TextFieldDate />
          </Stack>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>Tanggal Selesai</Typography>
            <TextFieldDate />
          </Stack>
        </Stack>
        <Typography variant='h4'>Lampiran</Typography>
        <TextField
          sx={{ marginTop: '8px' }}
          placeholder={'Masukkan jumlah'}
          variant='outlined'
          fullWidth
          type='number'
          name='lampiran'
          value={formData.lampiran}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Stack direction='row' justifyContent='flex-end' spacing={4}>
          <Button
            variant='contained'
            sx={{
              borderRadius: '12px',
              bgcolor: '#E42313',
              minWidth: '220px',
              minHeight: '50px',
            }}
            onClick={formik.handleSubmit}
          >
            Selanjutnya (Pengirim)
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

SuratDelegasi_1.propTypes = {
  handleNext: PropTypes.func.isRequired,
  onStateChange: PropTypes.func,
};

export default SuratDelegasi_1;
