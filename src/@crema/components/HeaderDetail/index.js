import React from 'react';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { closeTab } from '../../../redux/actions/tabAction';
import { X, Send, Save } from 'feather-icons-react';
import {
  Edit,
  Printer,
  FileText,
  // Copy,
  CornerDownLeft,
  RotateCcw,
  Check,
} from 'feather-icons-react';
import { Clipboard, Globe } from 'feather-icons-react';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import ShortcutTwoToneIcon from '@mui/icons-material/ShortcutTwoTone';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import { handleEdit, handleClose } from '../../../redux/actions/headerAction';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { BsTranslate } from 'react-icons/bs';
import { addTab } from '../../../redux/actions/tabAction';
import AppTooltip from '../AppTooltip';
import MasukanFolder from '../../../assets/icon/MasukanFolder.svg';
import TemplateSurat from '../../../assets/icon/TemplateSurat.svg';
import Copy2Paper from '../../../assets/icon/copy.svg';
import SignIcon from '../../../assets/icon/TandaTangan.svg';
import FormDialog from '../Tabs/FormDialog';
import FormDialogOtp from '../Tabs/FormDialogOtp';
import NotifDialogSign from '../Tabs/NotifDialogSign';
const HeaderDetail = ({
  nama,
  send,
  save,
  copy,
  copy2,
  translate,
  edit,
  printer,
  // filetext,
  // cornerdownleft,
  // rotateccw,
  // check,
  globe,
  clipboard,
  forward,
  // IsEditing,
  disposisi,
  batas,
  folderup,
  masukan_folder,
  template_surat,
  copy3,
  sign,
}) => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const tab = tabs.find((tab) => tab.active);
  const tabId = useSelector((state) => state.tab.idCounter);
  const isEdit = useSelector((state) => state.header.isEdit);

  const handleTabClose = () => {
    dispatch(closeTab(tab.id, tabs));
  };
  const handleEdits = () => {
    dispatch(handleEdit());
  };

  const handleClosed = () => {
    dispatch(handleClose());
  };

  const handleBuatDisposisi = (name) => {
    dispatch(addTab(tabId, tabs, name));
  };

  const [openformsign, setOpenFormSign] = React.useState(false);
  const [openformotp, setOpenFormOtp] = React.useState(false);
  const [opennotif, setOpenNotif] = React.useState(false);
  const handleGetEmail = (email) => {
    console.log(email);
    if (email) {
      handleOpenOtp();
    }
  };
  const handleGetOtp = (otp) => {
    console.log(otp);
    if (otp) {
      handleOpenNotif();
    }
  };
  const handleOpenSign = () => {
    setOpenFormSign(true);
  };
  const handleCloseSign = () => {
    setOpenFormSign(false);
  };
  const handleOpenOtp = () => {
    setOpenFormOtp(true);
  };
  const handleCloseOtp = () => {
    setOpenFormOtp(false);
  };
  const handleOpenNotif = () => {
    setOpenNotif(true);
  };
  const handleCloseNotif = () => {
    setOpenNotif(false);
  };

  return (
    <>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ paddingX: 8, paddingTop: 12, paddingBottom: 4 }}
      >
        <Typography fontSize='20px' fontWeight='700'>
          {nama}
        </Typography>

        <Stack direction='row' columnGap='24px'>
          {isEdit ? (
            <>
              <AppTooltip title='Save' placement='bottom'>
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <Save style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Check' placement='bottom'>
                <IconButton
                  sx={{
                    border: '1px solid #B1B5BA',
                    borderRadius: '3px',
                    color: 'white',
                    background: '#A3E6CD',
                  }}
                >
                  <Check style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>
              <AppTooltip title='Kembalikan' placement='bottom'>
                <IconButton
                  sx={{
                    border: '1px solid #B1B5BA',
                    borderRadius: '3px',
                    color: 'white',
                    background: '#FFD079',
                  }}
                >
                  <CornerDownLeft style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Kembalikan ke Komposer' placement='bottom'>
                <IconButton
                  sx={{
                    border: '1px solid #B1B5BA',
                    borderRadius: '3px',
                    color: 'white',
                    background: '#FFD079',
                  }}
                >
                  <RotateCcw style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Batal' placement='bottom'>
                <IconButton
                  sx={{
                    border: '1px solid #B1B5BA',
                    borderRadius: '3px',
                    color: 'white',
                    background: '#FF7452',
                  }}
                  onClick={handleClosed}
                >
                  <X style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Copy Ref' placement='bottom'>
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <FileText style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Translate' placement='bottom'>
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <BsTranslate style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Tutup Tab' placement='bottom'>
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  onClick={() => handleTabClose()}
                >
                  <X style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>
            </>
          ) : (
            <>
              {save && (
                <AppTooltip title='Save' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <Save style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {send && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <Send style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {clipboard && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <Clipboard style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {globe && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <Globe style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {copy && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <AssignmentOutlinedIcon
                      style={{ width: '28px', height: '28px' }}
                    />
                  </IconButton>
                </AppTooltip>
              )}
              {translate && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <BsTranslate style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {edit && (
                <AppTooltip title='Edit Surat' placement='bottom'>
                  <IconButton
                    onClick={handleEdits}
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <Edit style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {disposisi && (
                <AppTooltip title='Disposisi' placement='bottom'>
                  <IconButton
                    onClick={() => handleBuatDisposisi('BuatDisposisi')}
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <AutorenewRoundedIcon
                      style={{ width: '28px', height: '28px' }}
                    />
                  </IconButton>
                </AppTooltip>
              )}
              {forward && (
                <AppTooltip title='Teruskan' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <ShortcutTwoToneIcon
                      style={{ width: '28px', height: '28px' }}
                    />
                  </IconButton>
                </AppTooltip>
              )}
              {sign && (
                <>
                  <AppTooltip title='Tanda Tangan' placement='bottom'>
                    <IconButton
                      sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                      onClick={handleOpenSign}
                    >
                      <img
                        src={SignIcon}
                        alt='SignIcon'
                        style={{ width: '28px', height: '28px' }}
                      />
                    </IconButton>
                  </AppTooltip>
                </>
              )}
              {printer && (
                <AppTooltip title='Print Surat' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <Printer style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {batas && (
                <Box
                  style={{
                    height: '48px',
                    borderLeft: '3px solid #B1B5BA',
                  }}
                />
              )}
              {copy2 && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <AssignmentOutlinedIcon
                      style={{ width: '28px', height: '28px' }}
                    />
                  </IconButton>
                </AppTooltip>
              )}
              {folderup && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <DriveFolderUploadRoundedIcon
                      style={{ width: '28px', height: '28px' }}
                    />
                  </IconButton>
                </AppTooltip>
              )}
              {copy3 && (
                <AppTooltip title='Salin' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <img
                      src={Copy2Paper}
                      alt='Copy2Paper'
                      style={{ width: '28px', height: '28px' }}
                    />
                  </IconButton>
                </AppTooltip>
              )}
              {template_surat && (
                <AppTooltip title='Template Surat' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <img
                      src={TemplateSurat}
                      alt='TemplateSurat'
                      style={{ width: '28px', height: '28px' }}
                    />
                  </IconButton>
                </AppTooltip>
              )}
              {masukan_folder && (
                <AppTooltip title='Masukan ke Folder' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <img
                      src={MasukanFolder}
                      alt='MasukanFolder'
                      style={{ width: '28px', height: '28px' }}
                    />
                  </IconButton>
                </AppTooltip>
              )}
              <AppTooltip title='Tutup Tab' placement='bottom'>
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  onClick={() => handleTabClose()}
                >
                  <X style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>
            </>
          )}
        </Stack>
      </Stack>
      <Divider sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }} />
      {openformsign && (
        <>
          <FormDialog
            open={openformsign}
            handleCloseSign={handleCloseSign}
            handleSendEmail={handleGetEmail}
          />
        </>
      )}
      {openformotp && (
        <>
          <FormDialogOtp
            open={openformotp}
            handleClose={handleCloseOtp}
            handleSendOtp={handleGetOtp}
          />
        </>
      )}
      {opennotif && (
        <>
          <NotifDialogSign open={opennotif} handleClose={handleCloseNotif} />
        </>
      )}
    </>
  );
};

HeaderDetail.propTypes = {
  nama: PropTypes.string,
  save: PropTypes.bool,
  send: PropTypes.bool,
  copy: PropTypes.bool,
  copy2: PropTypes.bool,
  translate: PropTypes.bool,
  edit: PropTypes.bool,
  printer: PropTypes.bool,
  filetext: PropTypes.bool,
  cornerdownleft: PropTypes.bool,
  rotateccw: PropTypes.bool,
  check: PropTypes.bool,
  globe: PropTypes.bool,
  disposisi: PropTypes.bool,
  clipboard: PropTypes.bool,
  forward: PropTypes.bool,
  batas: PropTypes.bool,
  copy3: PropTypes.bool,
  sign: PropTypes.bool,
  masukan_folder: PropTypes.bool,
  template_surat: PropTypes.bool,
  folderup: PropTypes.bool,
  IsEditing: PropTypes.bool,
};

export default HeaderDetail;
