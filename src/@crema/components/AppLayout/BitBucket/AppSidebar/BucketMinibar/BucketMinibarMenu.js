import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import line from '../../../../../../assets/icon/line.svg';

const BucketMinibarMenu = (props) => {
    const { children, isHover, title, border=false } = props;

    return (
        <Box className='menu-item-sidebar'>
            {isHover ? (
            <>
                {border &&
                    <Box sx={{ borderTop: '0.5px solid #919191', margin: '0 20px 5px 20px', padding: 0 }}/>
                }
                <Typography className='menu-item-boundary'>{title}</Typography>
            </>
            ) : (
                <img src={line} alt='line' style={{margin:'20px 0'}}/>
            )}
            <>
                {children}
            </>
        </Box>
    );
};

export default BucketMinibarMenu;

BucketMinibarMenu.propTypes = {
    children: PropTypes.node,
    isHover: PropTypes.bool,
    title: PropTypes.string,
    border: PropTypes.bool,
};