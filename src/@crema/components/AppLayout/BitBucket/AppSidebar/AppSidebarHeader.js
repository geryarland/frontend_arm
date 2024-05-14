import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Grid,
  Button,
  Box,
  IconButton,
  ButtonGroup,
  TextField,
  Popover,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { Plus, Filter, Search } from 'feather-icons-react';

import SuratIn from '../../../../../assets/icon/Surat_Internal.svg';
import SuratEx from '../../../../../assets/icon/Surat_Eksternal.svg';
import SuratUndang from '../../../../../assets/icon/Surat_Undangan.svg';
import SuratDelegasi from '../../../../../assets/icon/Surat_Delegasi.svg';
import FilterPopover from './IconButton/FilterPopover';
import { Fonts } from '@crema/constants/AppEnums';

import { useDispatch, useSelector } from 'react-redux';
import { addTab} from '../../../../../redux/actions/tabAction';

const AppSidebarHeader = (props) => {
  const { tab, subTab, isAdd } = props;

  const [searchForm, setsearchForm] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');
  const [openAdd, setOpenAdd] = React.useState(null);
  const [openFilter, setOpenFilter] = React.useState(null);
  
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const idtab = useSelector((state) => state.tab.idCounter);

  const handleAddTab = (name) => {
    console.log(name)
    dispatch(addTab(idtab, tabs, name));
  };
  
  const handleSearchClick = () => {
    setsearchForm(true);
  };
  const handleCloseSearch = () => {
    setsearchForm(false);
    setSearchInput('');
  };
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  const handleAddClick = (event) => {
    setOpenAdd(event.currentTarget);
  };
  const handleCloseAdd = () => {
    setOpenAdd(null);
  };
  const handleFilterClick = (event) => {
    setOpenFilter(event.currentTarget);
  };
  const handleCloseFilter = () => {
    setOpenFilter(null);
  };

  const open_add = Boolean(openAdd);
  const open_filter = Boolean(openFilter);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Box sx={{ py: 2.5, px: 3.5 }}>
        {searchForm ? (
          <TextField
            variant='outlined'
            size='small'
            placeholder='Search'
            value={searchInput}
            onChange={handleSearchInput}
            InputProps={{
              startAdornment: (
                <IconButton onClick={handleSearchClick} edge='start'>
                  <Search />
                </IconButton>
              ),
              endAdornment: (
                <IconButton onClick={handleCloseSearch} edge='end'>
                  <Close />
                </IconButton>
              ),
            }}
            InputLabelProps={{
              shrink: false,
            }}
            sx={{ width: '88%' }}
          />
        ) : (
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item xs={isAdd ? 7 : 8}>
              <Typography
                sx={{ fontSize: 18, fontWeight: Fonts.BOLD }}
                component='h2'
              >
                {tab}
              </Typography>
              <Typography
                sx={{ fontSize: 12, fontWeight: Fonts.LIGHT }}
                component='h2'
              >
                {subTab}
              </Typography>
            </Grid>
            <Grid item xs={isAdd ? 5 : 4}>
              <ButtonGroup>
                <IconButton onClick={handleSearchClick}>
                  <Search />
                </IconButton>
                <IconButton onClick={handleFilterClick}>
                  <Filter />
                </IconButton>
                <FilterPopover open={open_filter} onClose={handleCloseFilter} />
                {isAdd && (
                  <>
                    {tab === 'Scanner' ? (
                      <IconButton
                        onClick={() => handleAddTab('Buat Scan Surat')}
                      >
                        <Plus />
                      </IconButton>
                    ) : (
                      <>
                        <IconButton
                          aria-describedby={id}
                          variant='contained'
                          onClick={handleAddClick}
                        >
                          <Plus />
                        </IconButton>
                        <Popover
                          id={id}
                          open={open_add}
                          anchorEl={openAdd}
                          onClose={handleCloseAdd}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                          <Box>
                            <ButtonGroup orientation='vertical'>
                              <Button
                                // onClick={}
                                startIcon={<img src={SuratIn} />}
                                sx={{
                                  border: 'none',
                                  '&:hover': {
                                    border: 'none',
                                  },
                                }}
                              >
                                Surat Internal
                              </Button>
                              <Button
                                // onClick={}
                                startIcon={<img src={SuratEx} />}
                                sx={{
                                  border: 'none',
                                  '&:hover': {
                                    border: 'none',
                                  },
                                }}
                              >
                                Surat Eksternal
                              </Button>
                              <Button
                                // onClick={}
                                startIcon={<img src={SuratUndang} />}
                                sx={{
                                  border: 'none',
                                  '&:hover': {
                                    border: 'none',
                                  },
                                }}
                              >
                                Surat Undangan
                              </Button>
                              <Button
                                // onClick={}
                                startIcon={<img src={SuratDelegasi} />}
                                sx={{
                                  border: 'none',
                                  '&:hover': {
                                    border: 'none',
                                  },
                                }}
                              >
                                Surat Delegasi
                              </Button>
                            </ButtonGroup>
                          </Box>
                        </Popover>
                      </>
                    )}
                  </>
                )}
              </ButtonGroup>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default AppSidebarHeader;

AppSidebarHeader.propTypes = {
  tab: PropTypes.string,
  subTab: PropTypes.string,
  isAdd: PropTypes.bool,
};
