import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardContent,
  Grid,
  Popover,
  Typography,
  IconButton,
  Divider,
  Stack,
  TextField,
} from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Trash2, X } from 'feather-icons-react';

export default function FilterPopover({ open, onClose }) {
  const [dateFrom, setDateFrom] = React.useState(null);
  const [dateTo, setDateTo] = React.useState(null);

  const [typeFilter, setTypeFilter] = React.useState(null);
  const [priorityFilter, setPriorityFilter] = React.useState(null);
  const [statusFilter, setStatusFilter] = React.useState(null);

  const handleTypeFilter = (value) => {
    setTypeFilter(value);
  };
  const handlePriorityFilter = (value) => {
    setPriorityFilter(value);
  };
  const handleStatusFilter = (value) => {
    setStatusFilter(value);
  };
  return (
    <Popover
      open={open}
      // anchorEl={openFilter}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{
        '& .MuiPopover-paper': {
          width: 450,
        },
      }}
    >
      <Card>
        <CardContent>
          <Grid container alignItems='center'>
            <Grid item xs={11}>
              <Typography>Filter Surat</Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={onClose}>
                <X />
              </IconButton>
            </Grid>
          </Grid>
          <Divider />
          <Grid container alignItems='center'>
            <Grid item xs={6}>
              <Typography>Pilih Tanggal</Typography>
            </Grid>
            <Grid item xs={6} textAlign='end'>
              <Button
                // onClick={}
                endIcon={<Trash2 />}
                sx={{
                  border: 'none',
                  '&:hover': {
                    border: 'none',
                  },
                }}
              >
                Bersihkan Filter
              </Button>
            </Grid>
          </Grid>
          <Stack alignItems='start' gap={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography paddingBottom={2}>Dari:</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={dateFrom}
                    onChange={(dateFrom) => {
                      setDateFrom(dateFrom);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                <Typography paddingBottom={2}>Ke:</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={dateTo}
                    onChange={(dateTo) => {
                      setDateTo(dateTo);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Typography>Tipe Surat</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Button
                  variant={typeFilter === 'rendah' ? 'contained' : 'outlined'}
                  onClick={() => handleTypeFilter('rendah')}
                  color='primary'
                  fullWidth
                  sx={{ fontSize: 12 }}
                >
                  Biasa
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant={typeFilter === 'sedang' ? 'contained' : 'outlined'}
                  onClick={() => handleTypeFilter('sedang')}
                  color='primary'
                  fullWidth
                  sx={{ fontSize: 12 }}
                >
                  Rahasia
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant={typeFilter === 'tinggi' ? 'contained' : 'outlined'}
                  onClick={() => handleTypeFilter('tinggi')}
                  color='primary'
                  fullWidth
                  sx={{ fontSize: 12 }}
                >
                  Sangat Rahasia
                </Button>
              </Grid>
            </Grid>
            <Typography>Prioritas</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Button
                  variant={
                    priorityFilter === 'rendah' ? 'contained' : 'outlined'
                  }
                  onClick={() => handlePriorityFilter('rendah')}
                  fullWidth
                  sx={{ fontSize: 12 }}
                >
                  Rendah
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant={
                    priorityFilter === 'sedang' ? 'contained' : 'outlined'
                  }
                  onClick={() => handlePriorityFilter('sedang')}
                  fullWidth
                  sx={{ fontSize: 12 }}
                >
                  Sedang
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant={
                    priorityFilter === 'tinggi' ? 'contained' : 'outlined'
                  }
                  onClick={() => handlePriorityFilter('tinggi')}
                  fullWidth
                  sx={{ fontSize: 12 }}
                >
                  Tinggi
                </Button>
              </Grid>
            </Grid>
            <Typography>Status</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant={statusFilter === 'rendah' ? 'contained' : 'outlined'}
                  onClick={() => handleStatusFilter('rendah')}
                  fullWidth
                >
                  Rendah
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant={statusFilter === 'tinggi' ? 'contained' : 'outlined'}
                  onClick={() => handleStatusFilter('tinggi')}
                  fullWidth
                >
                  Tinggi
                </Button>
              </Grid>
            </Grid>
            <Button fullWidth>Cari Surat</Button>
          </Stack>
        </CardContent>
      </Card>
    </Popover>
  );
}

FilterPopover.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
