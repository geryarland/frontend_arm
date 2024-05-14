import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Stack, Typography } from '@mui/material'

import status from '../../../../assets/Disposisi/badge-status.svg';

const profileUser = (props) => {
    const {avatar, position, name} = props;
  return (
    <>
        <Stack
            direction='row'
            columnGap='12px'
            alignItems='center'
        >
            <Stack sx={{
                direction: 'row',
                alignItems:'end',
                justifyContent: 'end',
            }}>
                <Avatar              
                src={avatar}
                alt='Profile'
                />
                <img src={status} style={{position:'absolute'}}/>
            </Stack>
            <Stack>
                <Typography
                    fontSize='16px'
                    fontWeight='700'
                >
                    {position}
                </Typography>
                <Typography
                    fontSize='12px'
                >
                    {name}
                </Typography>
            </Stack>
        </Stack>
    </>
  )
}

export default profileUser

profileUser.propTypes = {
    avatar: PropTypes.string,
    position: PropTypes.string,
    name: PropTypes.string,
}