import React from 'react'
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material'

const HeaderBar = (props) => {
    const {children, title} = props;

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 4,
        paddingX: 8,
    }}>
        <Typography sx={{
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '28px',
        }}>
            {title}
        </Typography>
        <Stack direction='row' columnGap='24px'>
            {children}
        </Stack>
    </Box>
  )
}

export default HeaderBar;

HeaderBar.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
}