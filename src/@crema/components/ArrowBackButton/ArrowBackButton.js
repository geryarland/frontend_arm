import React from 'react';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import PropTypes from 'prop-types';

const ArrowBackButton = ({ path }) => {
  return (
    <Link to={path}>
      <IconButton>
        <ArrowBackIosNewRoundedIcon
          sx={{
            color: '#2E3032',
            fontSize: 30,
            stroke: '#2E3032',
            borderRadius: '50%',
          }}
        />
      </IconButton>
    </Link>
  );
};

ArrowBackButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export default ArrowBackButton;
