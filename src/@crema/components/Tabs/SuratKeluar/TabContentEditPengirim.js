import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  IconButton,
  Link,
} from '@mui/material';
import { useSelector } from 'react-redux';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ComposeMail from '@crema/components/AppAddress';
import { users } from '../../../services/dummy/user/user';
import { useState } from 'react';
const TabContentEditPengirim = () => {
  const pengirim = useSelector((state) => state.addressbook.pengirim);
  const jabatann = useSelector((state) => state.addressbook.jabatann);
  const namaa = useSelector((state) => state.addressbook.namaa);
  const initialState = useSelector((state) => state.surat);
  const [formData, setFormData] = useState(initialState);
  const [jabatanValue, setJabatanValue] = useState(jabatann.jabatan);

  const handleJabatanChange = (event) => {
    setJabatanValue(event.target.value);
  };

  const [isComposeMail, setComposeMail] = React.useState(false);
  const [composeMailTitle, setComposeMailTitle] = useState('');

  const onOpenComposeMail = (title) => {
    setComposeMailTitle(title);
    setComposeMail(true);
  };
  
  const onCloseComposeMail = () => {
    setJabatanValue(jabatann.jabatan);
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
            onClick={() => onOpenComposeMail('Jabatan')}
          >
            Jabatan
          </Link>
          <Typography variant='h4' color='red'>
            *
          </Typography>
        </Stack>

        <TextField
          fullWidth
          value={jabatanValue}
          onChange={handleJabatanChange}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => onOpenComposeMail('Jabatan')}>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black', fontSize: '40px' }}
                />
              </IconButton>
            ),
          }}
          sx={{ color: 'black', fontWeight: 'bold' }}
        />

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
            onClick={() => onOpenComposeMail('Nama')}
          >
            Nama
          </Link>
          <Typography variant='h4' color='red'>
            *
          </Typography>
        </Stack>

        <TextField
          fullWidth
          value={
            composeMailTitle === 'Nama' ? `${namaa.nama}` : `${jabatann.nama}`
          }
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => onOpenComposeMail('Nama')}>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black', fontSize: '40px' }}
                />
              </IconButton>
            ),
          }}
        />

        <Typography variant='h4'>Divisi</Typography>

        <TextField
          fullWidth
          value={
            composeMailTitle === 'Nama'
              ? `${namaa.divisi}`
              : `${jabatann.divisi}`
          }
        />

        <Stack direction='row' spacing={5}>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>NIK</Typography>
            <TextField
              value={
                composeMailTitle === 'Nama'
                  ? `${namaa.nikl}`
                  : `${jabatann.nikl}`
              }
            />
          </Stack>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>Kode Departemen</Typography>
            <TextField
              value={
                composeMailTitle === 'Nama'
                  ? `${namaa.kode_departemen}`
                  : `${jabatann.kode_departemen}`
              }
            />
          </Stack>
        </Stack>

        <Typography variant='h4'>Departemen</Typography>

        <TextField
          fullWidth
          value={
            composeMailTitle === 'Nama'
              ? `${namaa.departemen}`
              : `${jabatann.departemen}`
          }
        />

        <Typography variant='h4'>Kota Kantor</Typography>

        <TextField
          fullWidth
          value={
            composeMailTitle === 'Nama' ? `${namaa.kota}` : `${jabatann.kota}`
          }
        />
      </Stack>
      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
        datas={users}
        title={composeMailTitle}
        type='single'
      />
    </>
  );
};

export default TabContentEditPengirim;
