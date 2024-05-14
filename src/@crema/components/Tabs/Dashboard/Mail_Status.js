import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes
import AppCard from '@crema/components/AppCard';
import { useState } from 'react';

const Mail_Status = ({ image, text, boxColor, counter }) => {
  const [Link, setLink] = useState();

  const handleClick = () => {
    setLink(!Link);
  };
  return (
    <>
      <AppCard  
      // sx={{  
      //   cursor: 'pointer', 
      //   // '&:hover': {
      //   //   backgroundColor: '#D9DDE3',
      //   // } 
      // }} 
      onClick={handleClick} >
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={3}>
            <img src={image} style={{ marginRight: '8px', height: 45, width: 45 }} />
          </Grid>
          <Grid item xs={9}>
            <Stack spacing={1}>
              <Typography variant='h4' sx={{ color: 'black' }}>
                {text}
              </Typography>
              <Box
                alignItems='center'
                justifyContent='center'
                sx={{
                  width: 38,
                  height: 22,
                  backgroundColor: boxColor,
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant='body1'
                  sx={{ color: '#FFFFFF', marginLeft: 2.75, marginBottom: 1 }}
                >
                  {counter}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </AppCard>
    </>
  );
};

Mail_Status.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  boxColor: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
};
export default Mail_Status;
