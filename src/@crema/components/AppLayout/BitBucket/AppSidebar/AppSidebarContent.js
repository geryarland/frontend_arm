import * as React from 'react';
import PropTypes from 'prop-types';
import AppScrollbar from '../../../AppScrollbar';
import MainSidebar from '../../components/MainSidebar';
import {
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Badge,
} from '@mui/material';
import { ArrowForwardIosSharp } from '@mui/icons-material';
import { AlertCircle } from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';

import { childTab } from '../../../../../redux/actions/tabAction';
import { Fonts } from '@crema/constants/AppEnums';
import AppSidebarHeader from './AppSidebarHeader';
import AppSidebarFooter from './AppSidebarFooter';

const StyledAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummarys = styled((props) => (
  <AccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetail = styled(AccordionDetails)(() => ({
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function AppSidebarContent(props) {
  const { isCollapsed, data, tab, subTab, isAdd, isStatus } = props;
  const getStatusColor = (status) => {
    switch (status) {
      case 'Sekretaris':
        return '#BF2600';
      case 'Read':
        return '#FFB020';
      case 'Unread':
        return '#8C8F93';
      case 'Disposisi':
        return '#9DB5FF';
      default:
        return 'lightgrey';
    }
  };

  const getTotalCount = (listData) => {
    return listData.length;
  };

  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const handleButton = (item) => {
    {
      isStatus === 'disposisi'
        ? dispatch(childTab(item.id, tabs, 'Disposisi', item))
        : isStatus === 'todo'
        ? dispatch(childTab(item.id, tabs, 'Todo', item))
        : isStatus === 'perlu tindak lanjut'
        ? dispatch(childTab(item.id, tabs, 'Perlu Tindak Lanjut', item))
        : isStatus === 'lacak proses'
        ? dispatch(childTab(item.id, tabs, 'Lacak Proses', item))
        : isStatus === 'draft'
        ? dispatch(childTab(item.id, tabs, 'Draft', item))
        : isStatus === 'komposer'
        ? dispatch(childTab(item.id, tabs, 'Komposer', item))
        : isStatus === 'template'
        ? dispatch(childTab(item.id, tabs, 'Template', item))
        : isStatus === 'scanner'
        ? dispatch(childTab(item.id, tabs, 'Log Scan Surat', item))
        : isStatus === 'surat masuk'
        ? dispatch(childTab(item.id, tabs, 'Surat Masuk', item))
        : isStatus === 'surat diminta'
        ? dispatch(childTab(item.id, tabs, 'Surat Diminta', item))
        : isStatus === 'surat terkirim'
        ? dispatch(childTab(item.id, tabs, 'Surat Terkirim', item))
        : isStatus === 'surat dibatalkan'
        ? dispatch(childTab(item.id, tabs, 'Surat Dibatalkan', item))
        : isStatus === 'folder'
        ? dispatch(childTab(item.id, tabs, 'Folder', item))
        : null;
    }
  };

  return (
    <MainSidebar>
      <AppSidebarHeader tab={tab} subTab={subTab} isAdd={isAdd} />
      <AppScrollbar
        sx={{
          height: 'calc(100vh - 70px) !important',
        }}
        scrollToTop={false}
      >
        {!isCollapsed && (
          <>
            {data.map((listData, index) => (
              <StyledAccordion key={index}>
                <AccordionSummarys
                  aria-controls={`panel${index + 1}d-content`}
                  id={`panel${index + 1}d-header`}
                >
                  <Typography>
                    Agustus-2021({getTotalCount(listData)})
                  </Typography>
                </AccordionSummarys>
                <AccordionDetail sx={{ padding: 0 }}>
                  <List>
                    {listData.map((item, listIndex) => (
                      <React.Fragment key={listIndex}>
                        <Card
                          sx={{
                            position: 'relative',
                            borderLeft: `6px solid ${getStatusColor(
                              item.status,
                            )}`,
                            borderRadius: 0,
                          }}
                        >
                          <Button
                            sx={{ padding: 0, margin: 0, textAlign: 'left' }}
                            onClick={() => handleButton(item)}
                          >
                            <CardContent>
                              <Grid container spacing={2}>
                                <Grid item xs={2}>
                                  <Stack alignItems='center'>
                                    <Avatar
                                      alt={`Avatar ${listIndex}`}
                                      src={item.avatarSrc}
                                      sx={{ width: 56, height: 56 }}
                                    />
                                    {item.priority === 'Tinggi' && (
                                      <Tooltip title='Tinggi'>
                                        <IconButton color='error'>
                                          <AlertCircle />
                                        </IconButton>
                                      </Tooltip>
                                    )}
                                  </Stack>
                                </Grid>
                                <Grid item xs={10}>
                                  <Grid container>
                                    <Grid item xs={8}>
                                      <Badge
                                        badgeContent={item.messageCount}
                                        color='primary'
                                      >
                                        <Typography
                                          variant='body1'
                                          color='text.primary'
                                          sx={{
                                            fontWeight:
                                              item.status === 'Unread' ||
                                              item.status === 'Disposisi'
                                                ? Fonts.BOLD
                                                : Fonts.LIGHT,
                                          }}
                                        >
                                          {item.primary}
                                        </Typography>
                                      </Badge>
                                    </Grid>
                                    <Grid item xs={4} textAlign='right'>
                                      <Typography
                                        variant='body2'
                                        color='text.primary'
                                        sx={{
                                          fontWeight:
                                            item.status === 'Unread' ||
                                            item.status === 'Disposisi'
                                              ? Fonts.BOLD
                                              : Fonts.LIGHT,
                                        }}
                                      >
                                        {item.date}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Typography
                                        sx={{
                                          display: 'inline',
                                          fontWeight:
                                            item.status === 'Unread' ||
                                            item.status === 'Disposisi'
                                              ? Fonts.BOLD
                                              : Fonts.LIGHT,
                                        }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                      >
                                        {item.secondary}
                                      </Typography>
                                    </Grid>
                                    <AppSidebarFooter
                                      isStatus={isStatus}
                                      item={item}
                                    />
                                  </Grid>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Button>
                        </Card>
                        {listIndex < listData.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                </AccordionDetail>
              </StyledAccordion>
            ))}
          </>
        )}
      </AppScrollbar>
    </MainSidebar>
  );
}

AppSidebarContent.propTypes = {
  isCollapsed: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.array),
  tab: PropTypes.string,
  subTab: PropTypes.string,
  isAdd: PropTypes.bool,
  isStatus: PropTypes.string,
};
