import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AlertDialog({ title, description }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle
          id='alert-dialog-title'
          sx={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}
        >
          {title}
        </DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DialogContentText
            id='alert-dialog-description'
            sx={{ textAlign: 'center', color: 'black', fontSize:'14px' }}
          >
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button
            onClick={handleClose}
            autoFocus
            sx={{
              backgroundColor: '#2E3032',
              color: 'white',
              '&:hover': {
                backgroundColor: '#3C3E40',
              },
              borderRadius: '100px',
              width: '100px',
            }}
          >
            Tidak
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: '#52BD94',
              color: 'white',
              '&:hover': {
                backgroundColor: '#3C7B5D',
              },
              borderRadius: '100px',
              width: '100px',
            }}
          >
            Ya
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

AlertDialog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AlertDialog;
