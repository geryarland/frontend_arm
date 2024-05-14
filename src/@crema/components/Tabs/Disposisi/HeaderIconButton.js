import React from 'react'
import PropTypes from 'prop-types'
import { Box, styled } from '@mui/material';

const HeaderIconButton = (props) => {
    const {children, method} = props;

    const StyledHeaderIconButton = styled(Box)(({theme}) => ({
        border: `1px solid ${theme.palette.coofis.tertiary[50]}`,
        borderRadius: '3px',
        padding: '8px',
        '&:hover': {
            cursor: 'pointer',
        }
    }))
    const StyledChildren = styled('div')(() => ({
        width: '28px',
        height: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '3px',
    }));

  return (
    <StyledHeaderIconButton onClick={method}>
        <StyledChildren>
            {children}
        </StyledChildren>
    </StyledHeaderIconButton>
  )
}

export default HeaderIconButton;

HeaderIconButton.propTypes = {
    children: PropTypes.node,
    method: PropTypes.func,
}