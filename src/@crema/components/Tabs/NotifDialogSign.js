import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { X, Send, Save } from 'feather-icons-react';
import { IconButton, MenuItem, Stack, Typography } from '@mui/material';
import Logo from '../../../assets/coofis.png';
export default function NotifDialogSign({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle sx={{ backgroundColor: '#383838', color: 'white' }}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography sx={{ fontSize: '18px' }}>
            Information | Send Digital SIgnature
          </Typography>
          <IconButton sx={{ p: '0px', color: 'white' }} onClick={handleClose}>
            <X />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack
          direction='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          spacing={2}
        >
          <img
            src={Logo}
            style={{ width: '107px', height: '73px' }}
            alt='Logo'
          />
          <Typography sx={{ fontWeight: 'bold' }}>
            Digital Signature NotaDinas Coofis
          </Typography>
          <Typography>
            Digital Signature is Complete, documents can be downloaded at the
            NDE
          </Typography>
          <Typography sx={{ pt: '20px' }}>Copyright 2020</Typography>
        </Stack>
        <DialogActions sx={{ mt: '10px' }}>
          <Button
            variant='contained'
            onClick={handleClose}
            sx={{
              backgroundColor: '#429777',
              '&:hover': {
                backgroundColor: '#2e7d67',
              },
            }}
          >
            Selesai
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

NotifDialogSign.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
