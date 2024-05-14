import React from 'react';
import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '../../../../redux/actions/tabAction';
const Mail_Button = ({ bgColor, bgHover, textColor, text, image }) => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const id = useSelector((state) => state.tab.idCounter);

  const handleClick = () => {
    dispatch(addTab(id, tabs, text));
  };

  return (
    <AppCard
      sx={{
        backgroundColor: bgColor,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: bgHover,
        },
      }}
      onClick={handleClick}
    >
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item xs={3}>
          <img src={image} style={{ width: 45, height: 45 }} />
        </Grid>
        <Grid item xs={9} alignItems='center' justifyContent='center'>
          <Typography variant='h3' sx={{ color: textColor }}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </AppCard>
  );
};
Mail_Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  bgHover: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Mail_Button;
