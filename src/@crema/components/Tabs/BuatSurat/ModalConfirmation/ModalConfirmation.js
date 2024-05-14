import React from 'react';
import { Modal, Stack, Typography } from '@mui/material';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '34vw',
  bgcolor: 'background.paper',
  p: '20px',
  borderRadius: '8px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30vh',
};

const ModalConfirmation = ({ handleClose, open, handleNext }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Stack sx={style} spacing={5}>
          <Typography variant='h1'>Konfirmasi</Typography>
          <Typography variant='h3'>
            Apakah Anda Yakin Dengan Data Yang Diisi?
          </Typography>

          <Stack direction='row' spacing={5}>
            <Button
              variant='contained'
              sx={{
                borderRadius: '25px',
                bgcolor: '#5C5E61',
                minHeight: '32px',
                minWidth: '100px',
                '&:hover': {
                  bgcolor: '#5C5E61',
                },
              }}
              onClick={handleClose}
            >
              Tidak
            </Button>

            <Button
              variant='contained'
              onClick={handleNext}
              sx={{
                bgcolor: '#52BD94',
                borderRadius: '25px',
                minHeight: '32px',
                minWidth: '100px',
                '&:hover': {
                  bgcolor: '#52BD94',
                },
              }}
            >
              Ya
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </div>
  );
};

ModalConfirmation.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
};

export default ModalConfirmation;
