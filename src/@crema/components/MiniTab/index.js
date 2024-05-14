import React from 'react';
import { Box, Tab } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useDispatch } from 'react-redux';
import { updateValue } from '../../../redux/actions/headerAction';
const StyledTab = styled(Tab)(({ theme }) => ({
  borderRadius: '100px',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.coofis.tertiary[70],
  indicatorColor: 'none',
  fontSize: '12px',
  textTransform: 'none',
  minHeight: 0,
  minWidth: 0,
  padding: '10px 26px',
  '&.MuiTabs-indicator': {
    display: 'none',
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.coofis.primary.main,
    color: theme.palette.background.paper,
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const MiniTab = ({ tabs, changeValue }) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(
    changeValue !== undefined ? changeValue : 0,
  );

  React.useEffect(() => {
    setValue(changeValue !== undefined ? changeValue : 0);
  }, [changeValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(updateValue(newValue));
  };

  if (changeValue !== value && changeValue !== undefined) {
    setValue(changeValue);
  }

  return (
    <TabContext value={value}>
      <Box
        sx={{
          border: '1px solid #D8D8D8',
          width: 'fit-content',
          borderRadius: '100px',
        }}
      >
        <TabList
          onChange={handleChange}
          indicatorColor='none'
          sx={{ minHeight: 0 }}
        >
          {tabs.map((tab, index) => (
            <StyledTab key={index} label={tab.name} value={index} />
          ))}
        </TabList>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel
          key={index}
          value={index}
          sx={{ paddingTop: '12px', paddingLeft: '0px' }}
        >
          {tab.content}
        </TabPanel>
      ))}
    </TabContext>
  );
};

MiniTab.propTypes = {
  tabs: PropTypes.array,
  changeValue: PropTypes.number,
};

export default MiniTab;
