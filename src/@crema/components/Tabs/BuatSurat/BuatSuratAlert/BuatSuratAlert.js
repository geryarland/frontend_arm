import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert, IconButton, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

export default function PositionedSnackbar(props) {
  const { title, desc } = props;

  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        key={vertical + horizontal}
      >
        <Alert
          elevation={10}
          icon={<CheckCircleOutlineIcon fontSize='large' />}
          action={
            <IconButton aria-label='close' size='large' onClick={handleClose}>
              <CloseIcon fontSize='large' />
            </IconButton>
          }
          sx={{
            height: '95px',
            borderRadius: '20px',
            alignItems: 'center',
          }}
        >
          <Typography variant='h1'>{title}</Typography>
          <Typography variant='body1'>{desc}</Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}

PositionedSnackbar.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
