import React from 'react';
import {
  Box,
  Stack,
  Grid,
  Typography,
  IconButton,
  InputBase,
} from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import ViewList from './ViewList';
import AppCard from '@crema/components/AppCard';
import SearchIcon from '@mui/icons-material/Search';
import { Filter } from 'feather-icons-react';
import AppScrollbar from '@crema/components/AppScrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '../../../../redux/actions/tabAction';

const TodoList_Dashboard = () => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const id = useSelector((state) => state.tab.idCounter);

  const handleAddTab = (type) => {
    dispatch(addTab(id, tabs, type));
  };

  return (
    <AppCard sx={{ height: '600px' }}>
      <Stack height={'100%'} width={'100%'} position={'relative'}>
        <Box
          sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
        >
          <Grid container direction='row'>
            <Grid item xs={8}>
              <Stack direction='row' spacing={2} alignItems='center'>
                <Typography
                  style={{ fontWeight: Fonts.BOLD, fontSize: '16px' }}
                >
                  Berikut adalah list to-do hari ini:
                </Typography>
                <Box
                  sx={{
                    color: '#FFFFFF',
                    backgroundColor: '#474D66',
                    width: 33,
                    height: 18,
                    borderRadius: 3,
                    fontSize: '11px',
                    lineHeight: '16px',
                    textAlign: 'center',
                  }}
                >
                  20
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Stack direction='row' spacing={2} alignItems='center'>
                <Box
                  sx={{
                    borderRadius: 1,
                    border: '0.5px solid grey',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2.5px',
                  }}
                  onClick={() => handleAddTab('Search')}
                >
                  <Filter size={19} />
                </Box>
                <Box
                  sx={{
                    width: '75%',
                    height: '25px',
                    display: 'flex',
                    border: '0.5px solid grey',
                    borderRadius: 1,
                  }}
                >
                  <InputBase placeholder='Search' sx={{ padding: '10px' }} />
                  <IconButton aria-label='search'>
                    <SearchIcon fontSize='small' />
                  </IconButton>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          <Stack direction='row' spacing={1} alignItems='center' marginY='10px'>
            <Typography style={{ fontSize: '15px' }}>Urgensi : </Typography>
            <Box
              sx={{
                backgroundColor: '#FFBDAD',
                color: '#E42313',
                width: 53,
                height: 20,
                borderRadius: 1,
                fontSize: '11px',
                lineHeight: '18px',
                textAlign: 'center',
              }}
            >
              Tinggi
            </Box>
            <Box
              sx={{
                backgroundColor: '#FFEFD2',
                color: '#FFB020',
                width: 57,
                height: 20,
                borderRadius: 1,
                fontSize: '11px',
                lineHeight: '18px',
                textAlign: 'center',
              }}
            >
              Sedang
            </Box>
            <Box
              sx={{
                backgroundColor: '#D6E0FF',
                color: '#3366FF',
                width: 55,
                height: 20,
                borderRadius: 1,
                fontSize: '11px',
                lineHeight: '18px',
                textAlign: 'center',
              }}
            >
              Rendah
            </Box>
          </Stack>

          <AppScrollbar
            sx={{ maxHeight: 'calc(100% - 60px) !important', overflow: 'auto' }}
            scrollToTop={false}
          >
            <ViewList />
          </AppScrollbar>
        </Box>
      </Stack>
    </AppCard>
  );
};

export default TodoList_Dashboard;
