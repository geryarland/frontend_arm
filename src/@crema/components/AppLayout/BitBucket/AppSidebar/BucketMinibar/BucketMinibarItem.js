import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Typography, Box, Collapse, Badge } from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import { useAuthMethod } from '@crema/hooks/AuthHooks';
import { setSidebarName } from '../../../../../../redux/actions/sidebarAction';
import dot from '../../../../../../assets/icon/sub-menu-item.svg';
import searchIcon from '../../../../../../assets/icon/search.svg';
import homeIcon from '../../../../../../assets/icon/home.svg';
import inboxIcon from '../../../../../../assets/icon/inbox.svg';
import disposisiIcon from '../../../../../../assets/icon/disposisi.svg';
import mailIcon from '../../../../../../assets/icon/mail.svg';
import folderIcon from '../../../../../../assets/icon/folder.svg';
import archiveIcon from '../../../../../../assets/icon/archive.svg';
import settingsIcon from '../../../../../../assets/icon/settings.svg';
import scanIcon from '../../../../../../assets/icon/scan.svg';
import securityIcon from '../../../../../../assets/icon/shield.svg';
import helpIcon from '../../../../../../assets/icon/help-circle.svg';
import profileIcon from '../../../../../../assets/icon/user.svg';
import logoutIcon from '../../../../../../assets/icon/log-out.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '../../../../../../redux/actions/tabAction';

const iconMap = {
  search: searchIcon,
  home: homeIcon,
  inbox: inboxIcon,
  disposisi: disposisiIcon,
  mail: mailIcon,
  folder: folderIcon,
  archive: archiveIcon,
  settings: settingsIcon,
  scan: scanIcon,
  security: securityIcon,
  help: helpIcon,
  profile: profileIcon,
  logout: logoutIcon,
};

const BucketMinibarItem = (props) => {
  const {
    isHover,
    badge,
    icon,
    text,
    more = false,
    subMenu,
    onAddTab,
    onMoveTab,
  } = props;
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const id = useSelector((state) => state.tab.idCounter);
  const { logout } = useAuthMethod();
  const [isSubMenu, setSubMenu] = useState(false);
  const handleClick = () => {
    setSubMenu(!isSubMenu);
  };

  useEffect(() => {
    if (!isHover) {
      setSubMenu(false);
    }
  }, [isHover]);

  const handleAddTab = () => {
    if (onAddTab) {
      onAddTab();
    }
  };

  const handleMoveTab = (tabId) => {
    if (onMoveTab) {
      onMoveTab(tabId);
    }
  };

  const handleSidebar = (name) => {
    dispatch(setSidebarName(name));
    dispatch(addTab(id, tabs, name));
  };

  return (
    <>
      <IconButton
        className='menu-icon-btn'
        aria-label='show 17 new notifications'
        onClick={
          more
            ? handleClick
            : text === 'Dashboard'
            ? () => handleMoveTab('dashboard')
            : text === 'Logout'
            ? logout
            : () => handleAddTab()
        }
      >
        <Box className='icon-btn'>
          <Box className='icon-img'>
            <Badge color='primary' badgeContent={badge} max={999}>
              <img src={iconMap[icon]} alt={icon} />
            </Badge>
          </Box>
          {isHover && <Typography className='menu-text'>{text}</Typography>}
        </Box>
        {more && isHover && (
          <FeatherIcon icon={isSubMenu ? 'chevron-down' : 'chevron-right'} />
        )}
      </IconButton>

      <Collapse orientation='vertical' in={isSubMenu}>
        {isHover && (
          <Box className='submenu-icon-btn' onClick={handleClick}>
            {subMenu &&
              subMenu.map((item, index) => (
                <IconButton
                  key={index}
                  className='submenu-item'
                  onClick={() => handleSidebar(item.name)}
                >
                  <img
                    src={dot}
                    alt='dot'
                    style={{ width: '10px', height: '10px' }}
                  />
                  <Typography className='submenu-text'>{item.name}</Typography>
                </IconButton>
              ))}
          </Box>
        )}
      </Collapse>
    </>
  );
};

export default BucketMinibarItem;

BucketMinibarItem.propTypes = {
  isHover: PropTypes.bool,
  badge: PropTypes.number,
  icon: PropTypes.string,
  text: PropTypes.string,
  more: PropTypes.bool,
  onClick: PropTypes.func,
  subMenu: PropTypes.object,
  onAddTab: PropTypes.func,
  onMoveTab: PropTypes.func,
};
