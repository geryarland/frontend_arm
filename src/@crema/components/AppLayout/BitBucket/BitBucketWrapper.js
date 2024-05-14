import React from 'react';
import PropsTypes from 'prop-types';
import { Box } from '@mui/material';

const BitBucketWrapper = ({ children, ...rest }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        paddingTop: { xs: 14, sm: 17.5, lg: 0 },
        '& .mainContent': {
          backgroundColor: (theme) => theme.palette.background.default,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: { xs: '100%', lg: 'calc(100% - 320px)' },
          transition: 'all 0.5s ease',
        },
        '&.bitBucketCollapsed': {
          '& .mainContent': {
            width: 'calc(100% - 80px)',
          },
          '& .bit-bucket-sidebar': {
            width: 85,
            '& .app-sidebar-container': {
              width: 18,
              borderLeftColor: 'white',
            },
          },
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default BitBucketWrapper;

BitBucketWrapper.propTypes = {
  children: PropsTypes.node,
};
