import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  Divider,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Stack,
  Typography,
  Box,
  AvatarGroup,
  Card,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import DoneIcon from '@mui/icons-material/Done';
import { AlertCircle, Repeat } from 'feather-icons-react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

const ViewList = () => {
  const listData1 = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Komisaris',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '20 September 2024',
      status: 'Sedang',
      mark: 'Tandai Selesai',
      alert:'True',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Manager',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '10 September 2024',
      status: 'Tinggi',
      mark: 'Sudah Dibaca',
      alert:'False',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Bisnis Development',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '11 Januari 2024',
      status: 'Rendah',
      mark: 'Tandai Selesai',
      alert:'False',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Manager',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '10 September 2024',
      status: 'Tinggi',
      mark: 'Sudah Dibaca',
      alert:'True',
    },
  ];

  const listData2 = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Komisaris',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '20 September 2024',
      status: 'Sedang',
      mark: 'Tandai Selesai',
      alert:'False',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Manager',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '10 September 2024',
      status: 'Tinggi',
      mark: 'Sudah Dibaca',
      alert:'False',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Bisnis Development',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '11 Januari 2024',
      status: 'Rendah',
      mark: 'Tandai Selesai',
      alert:'True',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Manager',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '10 September 2024',
      status: 'Tinggi',
      mark: 'Sudah Dibaca',
      alert:'True',
    },
  ];

  const listData3 = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Komisaris',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '20 September 2024',
      status: 'Sedang',
      mark: 'Tandai Selesai',
      alert:'True',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Manager',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '10 September 2024',
      status: 'Tinggi',
      mark: 'Sudah Dibaca',
      alert:'True',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Bisnis Development',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '11 Januari 2024',
      status: 'Rendah',
      mark: 'Tandai Selesai',
      alert:'False',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Manager',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '10 September 2024',
      status: 'Tinggi',
      mark: 'Sudah Dibaca',
      alert:'True',
    },
  ];

  const listData4 = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Komisaris',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '20 September 2024',
      status: 'Sedang',
      mark: 'Tandai Selesai',
      alert:'False',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Manager',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '10 September 2024',
      status: 'Tinggi',
      mark: 'Sudah Dibaca',
      alert:'False',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Bisnis Development',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '11 Januari 2024',
      status: 'Rendah',
      mark: 'Tandai Selesai',
      alert:'True',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Manager',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '10 September 2024',
      status: 'Tinggi',
      mark: 'Sudah Dibaca',
      alert:'False',
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

  const getStatusMark = (mark) => {
    switch (mark) {
      case 'Sudah Dibaca':
        return ['#5C5E61', '#C8CCD2']; //color, bgColor
      case 'Tandai Selesai':
        return ['#429777', '#DCF2EA'];
      default:
        return ['lightgrey', 'lightgrey'];
    }
  };

  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Card sx={{ minHeight: '500px' }}>
        {[listData1, listData2, listData3, listData4].map(
          (listData, listIndex) => (
            <Accordion key={listIndex} sx={{ minWidth: '650px' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1-content'
                id='panel1-header'
              >
                August - 2021
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {listData.map((item, index) => (
                    <React.Fragment key={index}>
                      <ListItem alignItems='flex-start'>
                        <ListItemAvatar>
                          <Stack alignItems='center' spacing={1}>
                            <Avatar
                              alt='Remy Sharp'
                              sx={{ bgcolor: getStatusColor(item.status)[0] }}
                            >
                              {item.primary.substring(0, 2)}
                            </Avatar>
                            <Box sx={{ alignItems: 'center' }}>
                              {/* <AlertCircle size={15} color='red' /> */}
                              {item.alert === 'True' ? (
                                  <AlertCircle size={15} color='red' />
                                ):(
                                  <Box></Box>
                                )}
                            </Box>
                          </Stack>
                        </ListItemAvatar>
                        <Grid container direction='row'>
                          <Grid item xs={10}>
                            <Stack
                              direction='row'
                              spacing={1}
                              alignItems='center'
                            >
                              <Typography
                                style={{
                                  fontWeight: Fonts.BOLD,
                                  fontSize: '15px',
                                }}
                              >
                                {item.primary}
                              </Typography>
                              <Repeat size={12} color='red' />
                              <Typography
                                style={{ fontSize: '12px', color: '#5C5E61' }}
                              >
                                2
                              </Typography>
                              <Box
                                sx={{
                                  backgroundColor: getStatusColor(
                                    item.status,
                                  )[1],
                                  color: getStatusColor(item.status)[0],
                                  width: 57,
                                  height: 20,
                                  borderRadius: 1,
                                  fontSize: '11px',
                                  lineHeight: '18px',
                                  textAlign: 'center',
                                }}
                              >
                                {item.status}
                              </Box>
                            </Stack>
                            <Typography
                              sx={{
                                fontSize: '13px',
                                fontWeight:
                                  item.mark === 'Tandai Selesai'
                                    ? Fonts.BOLD
                                    : Fonts.LIGHT,
                                marginTop: 2,
                              }}
                            >
                              {item.secondary}
                            </Typography>

                            <Stack
                              direction='row'
                              alignItems='center'
                              marginTop={4}
                            >
                              <Typography
                                sx={{
                                  display: 'inline',
                                  fontSize: '11px',
                                  fontWeight:
                                  item.mark === 'Tandai Selesai'
                                    ? Fonts.BOLD
                                    : Fonts.LIGHT,
                                }}
                                component='span'
                                color='text.primary'
                              >
                                Didisposisikan kepada 50 orang lain
                              </Typography>
                              <AvatarGroup max={4}>
                                <Avatar
                                  alt='Remy Sharp'
                                  sx={{
                                    width: 15,
                                    height: 15,
                                    bgcolor: '#E42313',
                                    fontSize: '7px',
                                  }}
                                >
                                  KW
                                </Avatar>
                                <Avatar
                                  alt='Travis Howard'
                                  src='/static/images/avatar/2.jpg'
                                  sx={{ width: 15, height: 15 }}
                                />
                                <Avatar
                                  alt='Trevor Henderson'
                                  src='/static/images/avatar/5.jpg'
                                  sx={{ width: 15, height: 15 }}
                                />
                              </AvatarGroup>
                            </Stack>
                          </Grid>
                          <Grid item xs={2}>
                            <Stack spacing={9}>
                              <Typography
                                style={{
                                  fontSize: '13px',
                                  marginRight: '10px',
                                }}
                              >
                                10.30 . 22 Sep
                                {item.mark === 'Tandai Selesai' ? (
                                  <MailOutlineIcon
                                    color='action'
                                    fontSize='small'
                                  />
                                ) : (
                                  <DraftsOutlinedIcon
                                    color='action'
                                    fontSize='small'
                                  />
                                )}
                              </Typography>
                              <Box
                                sx={{
                                  // backgroundColor: isActive ? '#C8CCD2' : '#DCF2EA',
                                  // color: isActive ? '#5C5E61' : '#429777',
                                  backgroundColor: getStatusMark(item.mark)[1],
                                  color: getStatusMark(item.mark)[0],
                                  width: 112,
                                  height: 22,
                                  borderRadius: 1,
                                  fontSize: '12px',
                                  lineHeight: '20px',
                                  textAlign: 'center',
                                  cursor: 'pointer',
                                }}
                                onClick={handleClick}
                              >
                                <Typography style={{ fontSize: '12px' }}>
                                  {item.mark}
                                  {/* {isActive ? 'Sudah Dibaca' : 'Tandai Selesai'}{' '} */}
                                  {/* {isActive
                                    ? item.mark === 'Sudah Dibaca'
                                      : 'Tandai Selesai'
                                      }{' '} */}
                                  <DoneIcon style={{ fontSize: 'small' }} />
                                </Typography>
                              </Box>
                            </Stack>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <Divider component='li' />
                    </React.Fragment>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ),
        )}
      </Card>
    </>
  );
};

export default ViewList;

ViewList.propTypes = {
  isCollapsed: PropTypes.bool,
};
