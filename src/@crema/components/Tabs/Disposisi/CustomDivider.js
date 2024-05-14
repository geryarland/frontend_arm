import React from 'react'
import { Divider } from '@mui/material'

const CustomDivider = () => {
  return (
    <>
      <Divider sx={{
          borderColor: ((theme) => theme.palette.coofis.tertiary[50]),
          borderBottomWidth: '2px'
      }}/>
    </>
  )
}

export default CustomDivider