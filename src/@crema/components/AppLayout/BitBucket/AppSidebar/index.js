import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import BitBucketSidebarWrapper from './BitBucketSidebarWrapper';
import AppSidebarContainer from './AppSidebarContainer';
import BucketMinibar from './BucketMinibar';
import DisposisiSidebar from './Disposisi/Respon';
import MyDisposisiSidebar from './Disposisi/DisposisiSaya';
import TodoDisposisi from './Disposisi/Todo';
import LetterInDisposisi from './Surat/LetterInDisposisi';
import LetterOutDisposisi from './Surat/LetterOutDisposisi';
import Folder from './Folder/Folder';
import ScannerDrafDisposisi from './ScanSurat/ScannerDrafDisposisi';
import ScannerLogScanDisposisi from './ScanSurat/ScannerLogScanDisposisi';
import { Typography, Drawer, Hidden, Box } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useSelector } from 'react-redux';
import LacakProsesSuratKeluar from './Surat/LacakProsesSuratKeluar';
import Draft from './Surat/Draft';
import Komposer from './Surat/Komposer';
import Template from './Surat/Template';
import SuratTerkirim from './Surat/SuratTerkirim';
import SuratDiminta from './Surat/SuratDiminta';
import SuratDibatalkan from './Surat/SuratDibatalkan';

const AppSidebar = (props) => {
  const {
    isCollapsed,
    setCollapsed,
    isNavCollapsed,
    toggleNavCollapsed,
    isHover,
    setHover,
    // routesConfig,
  } = props;

  const sidebar = useSelector((state) => state.sidebar.selectedSidebarName);

  const sideBarDisposisi = () => {
    switch (sidebar) {
      case 'Surat Masuk':
        return <LetterInDisposisi isCollapsed={isCollapsed} />;
      case 'Disposisi':
        return <DisposisiSidebar isCollapsed={isCollapsed} />;
      case 'Disposisi Saya':
        return <MyDisposisiSidebar isCollapsed={isCollapsed} />;
      case 'Todo':
        return <TodoDisposisi isCollapsed={isCollapsed} />;
      case 'Log Scan Surat':
        return <ScannerLogScanDisposisi isCollapsed={isCollapsed} />;
      case 'Draft Scan Surat':
        return <ScannerDrafDisposisi isCollapsed={isCollapsed} />;
      case 'Perlu Tindak Lanjut':
        return <LetterOutDisposisi isCollapsed={isCollapsed} />;
      case 'Lacak Proses':
        return <LacakProsesSuratKeluar isCollapsed={isCollapsed} />;
      case 'Draft':
        return <Draft isCollapsed={isCollapsed} />;
      case 'Komposer':
        return <Komposer isCollapsed={isCollapsed} />;
      case 'Folder':
        return <Folder isCollapsed={isCollapsed} />;
      case 'Template':
        return <Template isCollapsed={isCollapsed} />;
      case 'Surat Terkirim':
        return <SuratTerkirim isCollapsed={isCollapsed}/>;
      case 'Surat Diminta':
        return <SuratDiminta isCollapsed={isCollapsed}/>;
      case 'Surat Dibatalkan':
        return <SuratDibatalkan isCollapsed={isCollapsed}/>;
      default:
        return <DisposisiSidebar isCollapsed={isCollapsed} />;
    }
  };

  const sideBarComponent = () => {
    return (
      <BitBucketSidebarWrapper
        className={`bit-bucket-sidebar ${
          isCollapsed ? 'bit-bucket-btn-cls' : ''
        }`}
      >
        <Box className='bit-bucket-sidebar-fixed'>
          <Box
            className={`bit-bucket-btn ${
              isCollapsed ? 'bit-bucket-btn-cls' : ''
            }`}
            onClick={() => setCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <React.Fragment>
                <NavigateNextIcon />
                <Typography
                  variant='h6'
                  sx={{
                    writingMode: 'vertical-lr',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                  }}
                >
                  Lihat Disposisi
                </Typography>
              </React.Fragment>
            ) : (
              <NavigateBeforeIcon />
            )}
          </Box>
          <BucketMinibar isHover={isHover} setHover={setHover} />
          <AppSidebarContainer className='app-sidebar-container'>
            {sideBarDisposisi()}
          </AppSidebarContainer>
        </Box>
      </BitBucketSidebarWrapper>
    );
  };
  return (
    <>
      <Hidden xlUp>
        <Drawer
          anchor={props.position}
          open={isNavCollapsed}
          onClose={toggleNavCollapsed}
          classes={{
            root: clsx(props.variant),
            paper: clsx(props.variant),
          }}
          style={{ position: 'absolute' }}
        >
          {sideBarComponent()}
        </Drawer>
      </Hidden>
      <Hidden lgDown>{sideBarComponent()}</Hidden>
    </>
  );
};
export default AppSidebar;

AppSidebar.defaultProps = {
  variant: '',
  position: 'left',
};

AppSidebar.propTypes = {
  position: PropTypes.string,
  variant: PropTypes.string,
  isCollapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
  isNavCollapsed: PropTypes.bool,
  toggleNavCollapsed: PropTypes.func,
  isHover: PropTypes.bool,
  setHover: PropTypes.func,
  routesConfig: PropTypes.array,
};
