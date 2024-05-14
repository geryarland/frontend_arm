import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Typography, Avatar, AvatarGroup, Box, Pagination } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhotoFilterOutlinedIcon from '@mui/icons-material/PhotoFilterOutlined';
import { Fonts } from '@crema/constants/AppEnums';
import PropTypes from 'prop-types';

export default function TableList() {
    const listData = [
        {
          avatarSrc: '/static/images/avatar/1.jpg',
          primary: 'Komisaris',
          secondary:
            "Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center",
          date: '20 September 2024',
          status: 'Sedang',
        },
        {
          avatarSrc: '/static/images/avatar/1.jpg',
          primary: 'Manager',
          secondary:
            "Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center",
          date: '10 September 2024',
          status: 'Tinggi',
        },
        {
          avatarSrc: '/static/images/avatar/1.jpg',
          primary: 'Sekretaris',
          secondary:
            "Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center",
          date: '13 Oktober 2024',
          status: 'Sedang',
        },
        {
          avatarSrc: '/static/images/avatar/1.jpg',
          primary: 'Bisnis Development',
          secondary:
            "Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center",
          date: '11 Januari 2024',
          status: 'Rendah',
        },
      ];
    
      const getStatusColor = (status) => {
        switch (status) {
          case 'Tinggi':
            return ['#E42313', '#FFBDAD'];
          case 'Sedang':
            return ['#FFB020', '#FFEFD2'];
          case 'Rendah':
            return ['#3366FF', '#D6E0FF'];
          default:
            return ['lightgrey', 'lightgrey'];
        }
      };
  return (
    <>
    <TableContainer>
      <Table sx={{ minWidth: 550 }}>
        <TableHead>
          <TableRow>
            <TableCell align="right"><PersonOutlineOutlinedIcon fontSize='small'sx={{alignItems:"center"}}/></TableCell>
            <TableCell>
                <Grid container justifyContent="space-between" alignItems="flex-end">
                    <Typography>Keterangan</Typography>
                    <AssessmentIcon fontSize='small'/>
                </Grid>
            </TableCell>
            <TableCell align="right"><Typography>Urgensi</Typography></TableCell>
            <TableCell align="right">
                <Grid container justifyContent="space-between" alignItems="flex-end">
                    <Typography>Tenggat Waktu</Typography>
                    <CalendarTodayIcon fontSize='small'/>
                </Grid>
            </TableCell>
            <TableCell align="right">
                <Grid container justifyContent="space-between" alignItems="flex-end">
                    <Typography>Didisposisikan Ke</Typography>
                    <PhotoFilterOutlinedIcon fontSize='small'/>
                </Grid>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listData.map((Data, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack direction="row" spacing={3} >
                    <Avatar
                    alt={`Avatar ${index}`}
                    src={Data.avatarSrc}
                    sx={{ width: 30, height: 30 }}/>
                    <Typography sx={{fontWeight: Fonts.BOLD, fontSize:"14px"}}>{Data.primary}</Typography>
                </Stack>
              </TableCell>
              <TableCell align="left"><Typography sx={{ fontSize:"12px"}}>{Data.secondary}</Typography></TableCell>
              <TableCell >
              <Box
                        sx={{
                        backgroundColor:getStatusColor(
                            Data.status,
                          )[1], 
                        color:getStatusColor(Data.status)[0],
                        width: 57,
                        height: 20,
                        borderRadius: 1,
                        fontSize: '11px',
                        lineHeight: '18px',
                        textAlign: 'center'}}>
                        {Data.status}
                    </Box>
              </TableCell>
              <TableCell ><Typography sx={{ fontSize:"12px"}}>{Data.date}</Typography></TableCell>
              <TableCell align='center'>
              <AvatarGroup max={4}>
                <Avatar  sx={{ width: 20, height: 20,  bgcolor: "#E42313", fontSize:"7px"}} >KW</Avatar>
                <Avatar  src="/static/images/avatar/2.jpg" sx={{ width: 20, height: 20}}/>
                <Avatar  src="/static/images/avatar/5.jpg" sx={{ width: 20, height: 20}}/>
               </AvatarGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
        <Pagination count={10} shape="rounded" />
        <Typography>Page: 1</Typography>
      </Stack>
    </>
  );
}

TableList.propTypes = {
    isCollapsed: PropTypes.bool,
  };