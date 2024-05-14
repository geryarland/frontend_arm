import React, { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';
import clsx from 'clsx';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import { LayoutType } from '@crema/constants/AppEnums';
import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import AppContentView from '../../AppContentView';
import BitBucketWrapper from './BitBucketWrapper';
import BitBucketContainer from './BitBucketContainer';
import Overlay from './Overlay';
// import AppThemeSetting from '../../AppThemeSetting';


const BitBucket = ({ routes, routesConfig }) => {
  const { pathname } = useLocation();
  const [isCollapsed, setCollapsed] = useState(false);
  const [isNavCollapsed, setNavCollapsed] = useState(false);
  const { layoutType } = useLayoutContext();
  const [isHover, setHover] = useState(false);

  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };
  useEffect(() => {
    if (isNavCollapsed) setNavCollapsed(!isNavCollapsed);
  }, [pathname]);

  return (
    <>
      {isHover &&
        <Overlay />
      }
      <BitBucketContainer
        className={clsx({
          boxedLayout: layoutType === LayoutType.BOXED,
          framedLayout: layoutType === LayoutType.FRAMED,
        })}
      >
        <BitBucketWrapper
          className={clsx('bitBucketWrapper', {
            'bitBucketCollapsed': isCollapsed,
          })}
          isHover={isHover}
        >
          <Hidden lgUp>
            <AppHeader toggleNavCollapsed={toggleNavCollapsed} />
          </Hidden>
          <AppSidebar
            routesConfig={routesConfig}
            isCollapsed={isCollapsed}
            setCollapsed={setCollapsed}
            isNavCollapsed={isNavCollapsed}
            toggleNavCollapsed={toggleNavCollapsed}
            isHover={isHover}
            setHover={setHover}
          />
          <Box className='mainContent'>
            <AppContentView routes={routes} />
          </Box>
          {/* <AppThemeSetting /> */}
        </BitBucketWrapper>
      </BitBucketContainer>
    </>
  );
};

export default BitBucket;
BitBucket.propTypes = {
  routes: PropsTypes.object.isRequired,
  routesConfig: PropsTypes.array.isRequired,
};
