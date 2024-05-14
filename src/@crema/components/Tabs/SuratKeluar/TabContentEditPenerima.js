import React from 'react';
import { Stack, Typography, Button, Box, TextField } from '@mui/material';
import AppScrollbar from '@crema/components/AppScrollbar';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { useSelector } from 'react-redux';
import FormAddressBook from '../FormAddressBook';
const TabContentEditPenerima = () => {
  const kepada = useSelector((state) => state.addressbook.kepada);
  const tembusan = useSelector((state) => state.addressbook.tembusan);

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
        <FormAddressBook text='Kepada' data={kepada} />

        <Stack direction='row' spacing={4} alignItems={'center'}>
          <Typography>Tampilkan Kepada</Typography>
          <Button
            variant='contained'
            sx={{
              bgcolor: '#229BD8',
              padding: '5px',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            Update
          </Button>
        </Stack>
        <Box position={'relative'}>
          <AppScrollbar
            sx={{
              minHeight: '145px',
              maxHeight: '145px',
              overflow: 'auto',
            }}
          >
            <Stack>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={5}
                sx={{
                  border: 'none',
                }}
                defaultValue={kepada
                  .map((item) => item.nama + '-' + item.jabatan)
                  .join('\n')}
              />
            </Stack>
          </AppScrollbar>
        </Box>
        <FormAddressBook text='Tembusan' data={tembusan} />
        <Stack direction='row' spacing={4} alignItems={'center'}>
          <Typography>Tampilkan Kepada</Typography>
          <Button
            variant='contained'
            sx={{
              bgcolor: '#229BD8',
              padding: '5px',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            Update
          </Button>
        </Stack>

        <Box position={'relative'}>
          <AppScrollbar
            sx={{
              minHeight: '145px',
              maxHeight: '145px',
              overflow: 'auto',
            }}
          >
            <Stack>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={5}
                sx={{
                  border: 'none',
                }}
                defaultValue={tembusan
                  .map((item) => item.nama + '-' + item.jabatan)
                  .join('\n')}
              />
            </Stack>
          </AppScrollbar>
        </Box>
      </Stack>
    </>
  );
};

export default TabContentEditPenerima;
