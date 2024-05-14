import React from 'react'
import { Box} from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes

const LabelDisposisi = ({bgColor, textColor, Width, Height, text}) => {
  return (
    <div>
      <Box
        sx={{
        backgroundColor:bgColor, 
        color:textColor,
        width: Width,
        height: Height,
        borderRadius: 1,
        fontSize: '11px',
        lineHeight: '18px',
        textAlign: 'center'}}>
        {text}
      </Box>
    </div>
  )
};

LabelDisposisi.prototype = {
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    Width: PropTypes.number.isRequired,
    Height: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};

export default LabelDisposisi;
