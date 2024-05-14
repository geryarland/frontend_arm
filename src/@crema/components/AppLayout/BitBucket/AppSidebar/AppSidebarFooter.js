import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Box, Stack, Chip } from '@mui/material';
import { Cached } from '@mui/icons-material';

import { Fonts } from '@crema/constants/AppEnums';
import mailIcon from '../../../../../assets/icon/mail-unread.svg';
import mailReadIcon from '../../../../../assets/icon/mail-read.svg';

import { Shortcut } from '@mui/icons-material';
const AppSidebarFooter = (props) => {
  const { isStatus, item } = props;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Dibatalkan':
        return ['#E42313', '#FFBDAD'];
      case 'Batal':
        return ['#E42313', '#FFBDAD'];
      case 'Kembali Ke Komposer':
        return ['#E42313', '#FFBDAD'];
      case 'Diproses':
        return ['#FFB020', '#FFEFD2'];
      case 'Perlu Kirim Ulang':
        return ['#3366FF', '#D6E0FF'];
      case 'Template':
        return ['#3366FF', '#D6E0FF'];
      case 'Selesai':
        return ['#52BD94', '#EEF8F4'];
      case 'Tinggi':
        return ['#E42313', '#FFBDAD'];
      case 'Sedang':
        return ['#FFB020', '#FFEFD2'];
      case 'Rendah':
        return ['#52BD94', '#EEF8F4'];
      default:
        return 'lightgrey';
    }
  };

  return (
    <>
      {isStatus === 'disposisi' ? (
        <>
          <Button
            sx={{
              padding: 0,
              margin: 0,
              textAlign: 'left',
            }}
          >
            <Cached />
            <Typography
              sx={{
                fontSize: 12,
                fontWeight:
                  item.status === 'Unread' || item.status === 'Disposisi'
                    ? Fonts.BOLD
                    : Fonts.LIGHT,
              }}
            >
              ({item.messageCount})
            </Typography>
          </Button>
          <Box
            sx={{
              marginLeft: 'auto',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <img
              src={item.status === 'Read' ? mailReadIcon : mailIcon}
              alt='Mail Icon'
            />
          </Box>
        </>
      ) : isStatus === 'surat masuk' || isStatus === 'surat terkirim' ? (
        <>
          <Button
            sx={{
              padding: 0,
              margin: 0,
              textAlign: 'left',
            }}
          >
            <Cached />
            <Typography
              sx={{
                fontSize: 12,
              }}
            >
              ({item.messageCount})
            </Typography>
          </Button>
          <Button
            sx={{
              padding: 0,
              margin: 0,
              textAlign: 'left',
            }}
          >
            <Shortcut />
            <Typography
              sx={{
                fontSize: 12,
              }}
            >
              ({item.messageCount})
            </Typography>
          </Button>
          <Box
            sx={{
              marginLeft: 'auto',
              display: 'flex',
              flexDirection: 'row',
              paddingTop: 2.4,
            }}
          >
            <img
              src={item.status === 'Read' ? mailReadIcon : mailIcon}
              alt='Mail Icon'
            />
          </Box>
        </>
      ) : isStatus === 'todo' ? (
        <>
          <Box
            sx={{
              backgroundColor: getPriorityColor(item.priority)[1],
              color: getPriorityColor(item.priority)[0],
              width: 53,
              height: 20,
              borderRadius: 1,
              fontSize: '12px',
              lineHeight: '18px',
              textAlign: 'center',
            }}
          >
            {item.priority}
          </Box>
        </>
      ) : isStatus === 'surat' ||
        isStatus === 'perlu tindak lanjut' ||
        isStatus === 'draft' ||
        isStatus === 'komposer' ||
        isStatus === 'folder' ||
        isStatus === 'lacak proses' ||
        isStatus === 'surat diminta' ||
        isStatus === 'surat dibatalkan' ||
        isStatus === 'template' ? (
        <>
          <Stack
            direction={'row'}
            sx={{
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Stack direction={'row'} gap={1}>
              <Chip
                label={item.priority}
                sx={{
                  borderRadius: 1,
                  fontSize: '10px',
                  height: '20px',
                  backgroundColor: getPriorityColor(item.priority)[1],
                  color: getPriorityColor(item.priority)[0],
                }}
              />
              {(item.priority === 'Dibatalkan' &&
                isStatus === 'perlu tindak lanjut') ||
              (item.priority === 'Kembali Ke Komposer' &&
                isStatus === 'komposer') ? (
                <Chip
                  label='Perlu Kirim Ulang'
                  sx={{
                    borderRadius: 1,
                    fontSize: '10px',
                    height: '20px',
                    backgroundColor: getPriorityColor('Perlu Kirim Ulang')[1],
                    color: getPriorityColor('Perlu Kirim Ulang')[0],
                  }}
                />
              ) : null}
            </Stack>
            <img
              src={item.status === 'Read' ? mailReadIcon : mailIcon}
              alt='Mail Icon'
            />
          </Stack>
        </>
      ) : null}
    </>
  );
};

export default AppSidebarFooter;

AppSidebarFooter.propTypes = {
  isStatus: PropTypes.bool,
  item: PropTypes.array,
};
