import React from 'react';
import PropTypes from 'prop-types';
import { Box, InputBase, Typography, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { activateTab, addTab } from '../../../../../../redux/actions/tabAction';
import { setSidebarName } from '../../../../../../redux/actions/sidebarAction';
import BucketMinibarWrapper from './BucketMinibarWrapper';
import BucketMinibarMenu from './BucketMinibarMenu';
import BucketMinibarItem from './BucketMinibarItem';
import logo1 from '../../../../../../assets/icon/logo1.svg';
import userProfile from '../../../../../../assets/icon/user-profile.svg';
import search from '../../../../../../assets/icon/search.svg';

const BucketMinibar = (props) => {
  const { isHover, setHover } = props;
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const id = useSelector((state) => state.tab.idCounter);

  const handleAddTab = (type) => {
    dispatch(addTab(id, tabs, type));
  };
  const handlePindah = (tabId) => {
    dispatch(activateTab(tabId, tabs));
  };
  const handleChangeSidebar = (name) => {
    dispatch(setSidebarName(name));
  };

  return (
    <BucketMinibarWrapper isHover={isHover} setHover={setHover}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 1.5,
        }}
      >
        <Box
          sx={{
            flexDirection: 'column',
            border: 0,
            borderRadius: 0,
            my: 2.5,
            width: '90%',
          }}
          aria-label='show 17 new notifications'
        >
          <Box className='logo'>
            <img src={logo1} alt='logo1' />
            {isHover && (
              <Typography
                sx={{
                  color: '#262829',
                  fontWeight: '600',
                  fontSize: '18px',
                  lineHeight: '28px',
                }}
              >
                Coofis NDE
              </Typography>
            )}
          </Box>
          {isHover && (
            <Box className='user-profile'>
              <img src={userProfile} alt='user-profile' />
              <Box sx={{ color: '#262829' }}>
                <Typography sx={{ fontWeight: '700', fontSize: '16px' }}>
                  Samsul
                </Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '10px' }}>
                  7400493247092348932
                </Typography>
              </Box>
            </Box>
          )}
          {isHover ? (
            <Box className='search'>
              <InputBase placeholder='Search' sx={{ width: '100%' }} />
              <IconButton aria-label='show 17 new notifications'>
                <img src={search} alt='search' />
              </IconButton>
            </Box>
          ) : (
            <BucketMinibarItem badge={0} icon='search' />
          )}
        </Box>
        <BucketMinibarMenu isHover={isHover} title='Menu'>
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='home'
            text='Dashboard'
            onMoveTab={() => handlePindah('dashboard')}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={10}
            icon='inbox'
            text='Surat Masuk'
            onAddTab={() => {
              handleChangeSidebar('Surat Masuk');
              handleAddTab('Surat Masuk');
            }}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={20}
            icon='disposisi'
            text='Disposisi'
            more={true}
            subMenu={[
              { name: 'Disposisi' },
              { name: 'Disposisi Saya' },
              { name: 'Todo' },
            ]}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={20}
            icon='mail'
            text='Surat Keluar'
            more={true}
            subMenu={[
              { name: 'Perlu Tindak Lanjut' },
              { name: 'Lacak Proses' },
              { name: 'Komposer' },
              { name: 'Draft' },
              { name: 'Template' },
              { name: 'Surat Diminta' },
              { name: 'Surat Terkirim' },
              { name: 'Surat Dibatalkan' },
            ]}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='folder'
            text='Folder'
            onAddTab={() => {
              handleChangeSidebar('Folder');
              handleAddTab('Folder');
            }}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='archive'
            text='Arsip'
            more={true}
            subMenu={[
              { name: 'Surat Masuk' },
              { name: 'Surat Keluar' },
              { name: 'Surat Dibatalkan' },
              { name: 'Disposisi' },
              { name: 'Disposisi Saya' },
              { name: 'To Do' },
            ]}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='settings'
            text='Alat'
            more={true}
            subMenu={[{ name: 'Delegasi' }, { name: 'Sekretaris' }]}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='scan'
            text='Scan Surat'
            more={true}
            subMenu={[
              { name: 'Scan Surat Masuk' },
              { name: 'Log Scan Surat' },
              { name: 'Draft Scan Surat' },
            ]}
          />
        </BucketMinibarMenu>

        <BucketMinibarMenu isHover={isHover} title='Other Option' border={true}>
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='security'
            text='Keamanan'
            onAddTab={() => handleAddTab('Keamanan')}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='help'
            text='Bantuan'
            onAddTab={() => handleAddTab('FAQ')}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='profile'
            text='Profil'
            onAddTab={() => handleAddTab('Profile')}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='logout'
            text='Logout'
          />
        </BucketMinibarMenu>
      </Box>
    </BucketMinibarWrapper>
  );
};

export default BucketMinibar;

BucketMinibar.propTypes = {
  isHover: PropTypes.bool,
  setHover: PropTypes.func,
};
