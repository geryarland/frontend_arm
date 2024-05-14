import React from 'react'
import Box from '@mui/material/Box';

const Overlay = () => {
  return (
    <Box sx={{
        backgroundColor:'rgba(0,0,0,0.5)',
        width: '100%',
        height:'100vh',
        position:'fixed',
        top:0,
        right:0,
        bottom:0,
        left:0,
        zIndex: 11,
    }}/>
  )
}

export default Overlay