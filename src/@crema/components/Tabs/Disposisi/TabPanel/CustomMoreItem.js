import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomMoreItem = (props) => {
    const {image, name, size} = props;

    const StyledStack = styled(Stack)(({theme}) => ({
        backgroundColor: 'transparent',
        width: '100%',
        height: '150px',
        justifyContent: 'center',
        borderRadius: '4px',
        gap: '10px',
        padding: '10px',
        transition: 'all 0.5s ease',
        '&:hover': {
            backgroundColor: theme.palette.coofis.tertiary.bg,
            cursor: 'pointer',
        },
    }));

    const StyledTypography = styled(Typography)(() => ({
        textAlign: 'center',
        fontWeight:'400',
        fontSize: '12px',
        lineHeight: '16px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }));

    const StyledText = styled(Typography)(() => ({
        fontWeight:'400',
        fontSize: '8px',
    }))

  return (
    <StyledStack>
        <Stack alignItems={'center'}>
            <img src={image} alt='pdf'/>
        </Stack>
        <StyledTypography>{name}</StyledTypography>
        <Stack
            direction={'row'}
            justifyContent={'center'}
            gap={'10px'}
        >
            {size && 
                <>
                    <StyledText>{size}</StyledText>
                    <Stack
                        direction={'row'}
                        gap={'2px'}
                    >
                        <StyledText>Edit</StyledText>
                        <StyledText>Hapus</StyledText>
                    </Stack>
                </>
            }
        </Stack>
    </StyledStack>
  )
}

export default CustomMoreItem;

CustomMoreItem.propTypes = {
    image: PropTypes.any,
    name: PropTypes.string,
    size: PropTypes.string,
}