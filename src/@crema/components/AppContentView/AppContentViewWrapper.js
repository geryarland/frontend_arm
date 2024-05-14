import React from 'react';
import PropsTypes from 'prop-types';
import { Box } from '@mui/material';

const AppContentViewWrapper = ({ children, ...rest }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        width: { xl: '100%' },
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default AppContentViewWrapper;

AppContentViewWrapper.propTypes = {
  children: PropsTypes.node,
};
