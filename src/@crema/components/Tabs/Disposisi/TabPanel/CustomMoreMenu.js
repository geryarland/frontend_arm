import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Menu, PlusSquare } from 'feather-icons-react';

const CustomMoreMenu = (props) => {
    const { children, name } = props;

    const StyledMenuName = styled(Typography)(() => ({
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '22px',
    }))

    const More = styled(Typography)(({theme}) => ({
        color: theme.palette.coofis.secondary.border,
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '19px',
        '&:hover': {
            cursor: 'pointer',
        },
    }))

  return (
    <>
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
        >
            <StyledMenuName>{name}</StyledMenuName>
            <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'16px'}
            >
                <More>See More</More>
                <Menu />
                <PlusSquare />
            </Stack>
        </Stack>
        <Box>
            {children}
        </Box>
    </>
  )
}

export default CustomMoreMenu;

CustomMoreMenu.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
}