// import React from 'react';
// import { IconButton } from '@mui/material';
// import PropTypes from 'prop-types';
// import AppTooltip from '../AppTooltip';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

// const AppDashboard = ({
//   onMoveTab,
//   isMenu,
//   tooltipPosition,
// }) => {
//   // const handleAddTab = () => {
//   //   if (onAddTab) {
//   //     onAddTab();
//   //   }
//   // };
//   const handleMoveTab = (tabId) => {
//     if (onMoveTab) {
//       onMoveTab(tabId);
//     }
//   };

//   return (
//     <>
//       {isMenu ? (
//         <span onClick={() => handleMoveTab("dashboard")}>
//           Gimank
//         </span>
//       ) : (
//         <AppTooltip title='Dashboard' placement={tooltipPosition}>
//           <IconButton
//             className='icon-btn'
//             onClick={() => handleMoveTab("dashboard")}
//             size='large'
//           >
//             <HomeOutlinedIcon className='icon' />
//           </IconButton>
//         </AppTooltip>
//       )}
//     </>
//   );
// };

// AppDashboard.defaultProps = {
//   tooltipPosition: 'bottom',
// };

// AppDashboard.propTypes = {
//   onAddTab: PropTypes.func,
//   isMenu: PropTypes.bool,
//   tooltipPosition: PropTypes.string,
// };

// export default AppDashboard;

import React from 'react';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import AppTooltip from '../AppTooltip';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const AppDashboard = ({
  onMoveTab,
  isMenu,
  tooltipPosition,
}) => {
  const handleMoveTab = (tabId) => {
    if (onMoveTab) {
      onMoveTab(tabId);
    }
  };

  return (
    <>
      {isMenu ? (
        <span onClick={() => handleMoveTab("dashboard")}>
          Gimank
        </span>
      ) : (
        <AppTooltip title='Dashboard' placement={tooltipPosition}>
          <IconButton
            className='icon-btn'
            onClick={() => handleMoveTab("dashboard")}
            size='large'
          >
            <HomeOutlinedIcon className='icon' />
          </IconButton>
        </AppTooltip>
      )}
    </>
  );
};

AppDashboard.defaultProps = {
  tooltipPosition: 'bottom',
};

AppDashboard.propTypes = {
  onMoveTab: PropTypes.func, // Menambahkan validasi prop-types untuk onMoveTab
  isMenu: PropTypes.bool,
  tooltipPosition: PropTypes.string,
};

export default AppDashboard;

