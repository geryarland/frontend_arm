import React from 'react';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import AppTooltip from '../AppTooltip';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const AppMail = ({
  onAddTab,
  isMenu,
  tooltipPosition,
}) => {
  const handleAddTab = () => {
    if (onAddTab) {
      onAddTab();
    }
  };
  // const handleMoveTab = (tabId) => {
  //   if (onMoveTab) {
  //     onMoveTab(tabId);
  //   }
  // };

  return (
    <>
      {isMenu ? (
        <span onClick={() => handleAddTab()}>
          Gimank
        </span>
      ) : (
        <AppTooltip title='Dashboard' placement={tooltipPosition}>
          <IconButton
            className='icon-btn'
            onClick={() => handleAddTab()}
            size='large'
          >
            <HomeOutlinedIcon className='icon' />
          </IconButton>
        </AppTooltip>
      )}
    </>
  );
};

AppMail.defaultProps = {
  tooltipPosition: 'bottom',
};

AppMail.propTypes = {
  onAddTab: PropTypes.func,
  isMenu: PropTypes.bool,
  tooltipPosition: PropTypes.string,
};

export default AppMail;

