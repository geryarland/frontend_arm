import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { X, Send, Save } from 'feather-icons-react';
import { IconButton, MenuItem, Stack, Typography } from '@mui/material';

export default function FormDialogOtp({ open, handleClose, handleSendOtp }) {
  const [otp, setOtp] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(otp);
    handleClose();
    handleSendOtp(otp);

  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle sx={{ backgroundColor: '#383838', color: 'white' }}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography sx={{ fontSize: '18px' }}>Sign</Typography>
          <IconButton sx={{ p: '0px', color: 'white' }} onClick={handleClose}>
            <X />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText> */}
        <form onSubmit={handleSubmit}>
          <Typography variant='h4' sx={{ mt: '20px', mb: '10px' }}>
            OTP
          </Typography>
          <TextField
            autoFocus
            required
            margin='dense'
            id='name'
            name='otp'
            type='text'
            fullWidth
            placeholder='Masukan OTP ...'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Typography variant='h4' sx={{ mt: '20px', mb: '10px' }}>
            Masukan Kode OTP yang telah dikirim ke: nadhief@upi.edu
          </Typography>
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
              Sign
            </Button>
            <Button variant='contained' onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

FormDialogOtp.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSendOtp: PropTypes.func.isRequired,
};
