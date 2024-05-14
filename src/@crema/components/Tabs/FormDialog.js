import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { X } from 'feather-icons-react';
import { IconButton, MenuItem, Stack, Typography } from '@mui/material';
import FormDialogOtp from './FormDialogOtp';

export default function FormDialog({ open, handleCloseSign, handleSendEmail }) {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCloseSign();
    handleSendEmail(email);
  };
  

  const emails = [
    {
      value: '1',
      label: 'nadhiefathallahi@gmail.com',
    },
    {
      value: '2',
      label: 'nadhiefai@upi.edu',
    },
  ];

  return (
    <>
      <Dialog open={open} onClose={handleCloseSign} fullWidth>
        <DialogTitle sx={{ backgroundColor: '#383838', color: 'white' }}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography sx={{ fontSize: '18px' }}>Sign</Typography>
            <IconButton
              sx={{ p: '0px', color: 'white' }}
              onClick={handleCloseSign}
            >
              <X />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Typography variant='h4' sx={{ mt: '20px', mb: '10px' }}>
              Email Terdaftar
            </Typography>
            <TextField
              id='outlined-select-currency'
              select
              fullWidth
              defaultValue='1'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              {emails.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <DialogActions sx={{ mt: '10px' }}>
              <Button
                variant='contained'
                type='submit'
                sx={{
                  backgroundColor: '#429777',
                  '&:hover': {
                    backgroundColor: '#2e7d67',
                  },
                }}
              >
                Kirim
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

FormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCloseSign: PropTypes.func.isRequired,
  handleSendEmail: PropTypes.func.isRequired,
};
