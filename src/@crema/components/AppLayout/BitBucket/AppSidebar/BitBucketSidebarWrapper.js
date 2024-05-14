import React from 'react';
import PropsTypes from 'prop-types';
import { Box } from '@mui/material';

const BitBucketSidebarWrapper = ({ children, isCollapsed, ...rest }) => {
  return (
    <Box
      sx={{
        width: 515,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'max-height 0.8s ease',
        overflow: 'hidden',
        '& .bit-bucket-sidebar-fixed': {
          display: 'flex',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 99,
        },
        '& .bit-bucket-btn': {
          position: 'absolute',
          top: 18,
          width: 30,
          height: 30,
          right: '10px',
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.primary.contrastText,
          cursor: 'pointer',
          zIndex: 99,
          display: { xs: 'none', lg: 'block' },
          transition: 'max-height 0.8s ease',
          '& svg': {
            display: 'block',
            margin: 'auto', 
            marginTop: 'calc(50% - 12px)', 
          },
        },
        '& .bit-bucket-btn-cls': {
          width: 20,
          height: 140,
          top: 0,
          right: 0,
          paddingTop: 4,
          borderRadius: 0,
          borderBottomRightRadius: 3,
          transition: 'max-height 0.8s ease',
          maxHeight: isCollapsed ? 0 : 140,
        },
      }}
      className={isCollapsed ? 'bit-bucket-btn-cls' : ''}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default BitBucketSidebarWrapper;

BitBucketSidebarWrapper.propTypes = {
  children: PropsTypes.node,
  isCollapsed: PropsTypes.bool,
};
