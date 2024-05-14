import React from 'react'
import { Box, Stack, Grid,
  Avatar,
  AvatarGroup,
  Typography,
    } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import CachedIcon from '@mui/icons-material/Cached';
import DoneIcon from '@mui/icons-material/Done';
// import LabelDisposisi from './LabelDisposisi';

const AtributeList = () => {
    return(
        <Grid container direction="row"  >
            <Grid item xs={10}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography style={{fontWeight:Fonts.BOLD, fontSize:"15px"}}>Komisaris</Typography>
                    <CachedIcon style={{fontSize:"20px"}}/>
                    <Typography style={{fontSize:"12px", color:"#5C5E61"}}>2</Typography>
                    <Box
                        sx={{
                        backgroundColor:"#FFEFD2", color:"#FFB020",
                        width: 57,
                        height: 20,
                        borderRadius: 1,
                        fontSize: '11px',
                        lineHeight: '18px',
                        textAlign: 'center'}}>
                        Sedang
                    </Box>
                    {/* <LabelDisposisi
                      bgColor = "#FFEFD2"
                      textColor = "#FFB020"
                      Width = {57}
                      Height = {20}
                      text = "Sedang"
                    /> */}
                </Stack>
                <Typography style={{fontSize: "13px"}} color="#5C5E61">
                    Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center
                </Typography>

                          <Stack direction="row" alignItems="center" marginTop={4}>
                            <Typography
                              sx={{ 
                              display: 'inline', 
                              fontSize: "11px"}}
                              component="span"
                              color="text.primary"
                            >
                              Didisposisikan kepada 50 orang lain
                            </Typography>
                            <AvatarGroup max={4}>
                              <Avatar alt="Remy Sharp" sx={{ width: 15, height: 15,  bgcolor: "#E42313", fontSize:"7px"}} >KW</Avatar>
                              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 15, height: 15}}/>
                              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{ width: 15, height: 15}}/>
                            </AvatarGroup>
                          </Stack>
                        </Grid>
                        <Grid item xs={2} >
                          <Stack spacing={9}>
                            <Typography style={{fontSize:"12px"}}>10.30 . 22 Sep</Typography>
                            <Box
                              sx={{
                                backgroundColor:"#DCF2EA", color:"#429777",
                                width: 112,
                                height: 22,
                                borderRadius: 1,
                                fontSize: '12px',
                                lineHeight: '20px',
                                textAlign: 'center',}}>
                              Tandai Selesai <DoneIcon style={{fontSize:"small"}}/>
                            </Box>
                          </Stack>
                        </Grid>
                      </Grid>
    )
};

export default AtributeList;