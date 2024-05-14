import React from 'react';
import { Box } from '@mui/material';
import AppScrollbar from '@crema/components/AppScrollbar';
import ProfileUser from '../../../@crema/components/Tabs/Disposisi/ProfileUser';
import PropTypes from 'prop-types';
import { diteruskan } from '../../../@crema/services/dummy/content/dataTerusan';
const ListStaff = ({ sx }) => {
  return (
    <>
      <Box className='content-styled-box' sx={{ height: '275px', ...sx }}>
        <AppScrollbar>
          {diteruskan &&
            diteruskan.map((item, index) => (
              <Box key={index} sx={{ paddingY: '6px' }}>
                <ProfileUser
                  avatar={item.avatar}
                  position={item.position.toUpperCase()}
                  name={item.name.toUpperCase()}
                />
              </Box>
            ))}
        </AppScrollbar>
      </Box>
    </>
  );
};
ListStaff.propTypes = {
  sx: PropTypes.any,
};

export default ListStaff;
