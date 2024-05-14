import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import AppScrollbar from '../AppScrollbar';

import {
  Button,
  Modal,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  Typography,
  Stack,
  IconButton,
  Table,
  TableHead,
  TableContainer,
  Paper,
  TableCell,
  Radio,
  TableRow,
  TableBody,
  Checkbox,
  InputBase,
  Divider,
  Select,
  MenuItem,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';

import { X, Trash2, UserPlus, XCircle } from 'feather-icons-react';

import { buttonClasses, TabsList, Tabs, Tab, tabClasses } from '@mui/base';
import {
  addDelegasi,
  addKepada,
  addPemeriksa,
  addPemohon,
  addPengirim,
  addSekretaris,
  addTembusan,
  addJabatan,
  addNama
} from '../../../redux/actions/addressbookAction';

const ComposeMail = (props) => {
  const { isComposeMail, onCloseComposeMail, datas, title, type } = props;

  const StyledTabsList = styled(TabsList)(
    () => `
    min-width: 400px;
    border-radius: 50px;
    border: 1px solid #D8D8D8;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    margin-bottom: 10px;
    `,
  );

  const StyledTab = styled(Tab)`
    color: #5c5e61;
    cursor: pointer;
    background-color: transparent;
    width: 100%;
    padding: 10px;
    margin: 6px;
    border: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;

    &.${tabClasses.selected} {
      background-color: #e42313;
      color: #ffffff;
    }

    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  const dispatch = useDispatch();
  const [previewData, setPreviewData] = useState(null);
  const [singleData, setSingleData] = useState(null);
  const [selectedRow, setSelectedRow] = useState([]);
  const [multipleData, setMultipleData] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedRowIndices, setSelectedRowIndices] = useState([]);

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    const updatedSelectedRow = checked ? datas.map((_, index) => index) : [];
    setSelectedRow(updatedSelectedRow);
    setSelectedRowIndices(updatedSelectedRow);
    const selectedItems = checked ? datas : [];
    setMultipleData(selectedItems);
  };

  const handleRadioChange = (index) => {
    if (type === 'single') {
      setSingleData(datas[index]);
      setSelectedRow(index);
      setSelectedRowIndices([index]);
      setPreviewData(datas[index]);
    } else {
      let updatedSelectedRow;
      if (selectedRow.includes(index)) {
        updatedSelectedRow = selectedRow.filter((item) => item !== index);
        setSelectedRowIndices(selectedRowIndices.filter((i) => i !== index));
      } else {
        updatedSelectedRow = [...selectedRow, index];
        setSelectedRowIndices([...selectedRowIndices, index]);
      }
      setSelectedRow(updatedSelectedRow);

      const selectedItems = datas.filter((_, i) =>
        updatedSelectedRow.includes(i),
      );
      setMultipleData(selectedItems);
      setSingleData(null);
      if (updatedSelectedRow.length > 0) {
        setPreviewData(
          datas[updatedSelectedRow[updatedSelectedRow.length - 1]],
        );
      } else {
        setPreviewData(null);
      }
    }
  };

  const handleRemoveAll = () => {
    setSelectedRow([]);
    setSelectedRowIndices([]);
    setMultipleData([]);
  };

  const handleRemoveItem = (indexToRemove) => {
    const updatedmultipleData = multipleData.filter(
      (_, index) => index !== indexToRemove,
    );
    setMultipleData(updatedmultipleData);

    const updatedSelectedRow = selectedRow.filter(
      (item) => item !== indexToRemove,
    );
    setSelectedRow(updatedSelectedRow);

    if (type !== 'single') {
      setSelectedRowIndices(updatedSelectedRow);
    } else {
      setSingleData(null);
    }

    if (updatedSelectedRow.length > 0) {
      setPreviewData(datas[updatedSelectedRow[updatedSelectedRow.length - 1]]);
    } else {
      setPreviewData(null);
    }
  };

  const handleConfirmation = (Data) => {
    if (title === 'Kepada') {
      dispatch(addKepada(Data));
    } else if (title === 'Tembusan') {
      dispatch(addTembusan(Data));
    } else if (title === 'Jabatan') {
      dispatch(addJabatan(Data));
    } else if (title === 'Nama') {
      dispatch(addNama(Data));
    } else if (title === 'Delegasi') {
      dispatch(addDelegasi(Data));
    } else if (title === 'Sekretaris') {
      dispatch(addSekretaris(Data));
    } else if (title === 'Pemeriksa') {
      dispatch(addPemeriksa(Data));
    } else if (title === 'Pemohon') {
      dispatch(addPemohon(Data));
    }else if (title === 'Pengirim') {
      dispatch(addPengirim(Data));
    }
    onCloseComposeMail();
  };

  return (
    <Modal
      open={isComposeMail}
      onClose={onCloseComposeMail}
      aria-labelledby='compose-mail-modal'
      aria-describedby='compose-mail-form'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: 1000,
          maxHeight: 800,
          overflow: 'auto',
          bgcolor: 'background.paper',
          borderRadius: 8,
        }}
      >
        <Grid
          item
          xs={type === 'single' ? 12 : selectedRow.length > 0 ? 9 : 12}
        >
          <Box
            style={{
              padding: 20,
              outline: 'none',
            }}
          >
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              marginBottom={2}
            >
              <Typography variant='h1' id='compose-mail-modal'>
                Address Book {title}
              </Typography>
              <IconButton onClick={onCloseComposeMail}>
                <X />
              </IconButton>
            </Stack>
            <Tabs defaultValue={0}>
              <StyledTabsList>
                <StyledTab value={0}>Jabatan</StyledTab>
                <StyledTab value={1}>Karyawan</StyledTab>
                <StyledTab value={2}>Bawahan</StyledTab>
                <StyledTab value={3}>Personal</StyledTab>
              </StyledTabsList>
            </Tabs>
            <Stack
              direction='row'
              spacing={2}
              alignItems='center'
              justifyContent='space-between'
              marginBottom={2}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '0.5px solid grey',
                  width: '40%',
                  borderRadius: 1,
                }}
              >
                <InputBase
                  placeholder='Cari Jabatan'
                  sx={{ flexGrow: 1, padding: '10px' }}
                />
                <IconButton aria-label='search'>
                  <SearchIcon fontSize='small' />
                </IconButton>
              </Box>
              <Select
                value={selectedOption1}
                onChange={handleOption1Change}
                displayEmpty
                sx={{
                  flexGrow: 1,
                  border: '0.5px solid grey',
                  borderRadius: 1,
                }}
              >
                <MenuItem value='' disabled>
                  Pilih opsi 1
                </MenuItem>
                <MenuItem value={1}>Opsi 1</MenuItem>
                <MenuItem value={2}>Opsi 2</MenuItem>
                <MenuItem value={3}>Opsi 3</MenuItem>
              </Select>
              <Select
                value={selectedOption2}
                onChange={handleOption2Change}
                displayEmpty
                sx={{
                  flexGrow: 1,
                  border: '0.5px solid grey',
                  borderRadius: 1,
                }}
              >
                <MenuItem value='' disabled>
                  Pilih opsi 2
                </MenuItem>
                <MenuItem value={1}>Opsi A</MenuItem>
                <MenuItem value={2}>Opsi B</MenuItem>
                <MenuItem value={3}>Opsi C</MenuItem>
              </Select>
            </Stack>
            <Box sx={{ marginTop: 2 }}>
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Grid container>
                    <Grid
                      item
                      xs={2}
                      alignItems='center'
                      justifyContent='center'
                    >
                      <Avatar
                        alt={previewData ? previewData.nama : '--'}
                        src={previewData ? previewData.profil : ''}
                        sx={{ width: 90, height: 90 }}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant='subtitle1'>Nama :</Typography>
                      <Typography variant='subtitle2'>
                        {previewData ? previewData.nama : '--'}
                      </Typography>
                      <Typography variant='subtitle1'>Departemen :</Typography>
                      <Typography variant='subtitle2'>
                        {previewData ? previewData.departemen : '--'}
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant='subtitle1'>Divisi :</Typography>
                      <Typography variant='subtitle2'>
                        {previewData ? previewData.divisi : '--'}
                      </Typography>
                      <Typography variant='subtitle1'>NIK :</Typography>
                      <Typography variant='subtitle2'>
                        {previewData ? previewData.nikg : '--'}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              sx={{ marginY: 2 }}
            >
              {type !== 'single' && (
                <Box sx={{ marginTop: 2 }}>
                  <Checkbox onChange={handleCheckboxChange} /> Pilih Semua
                </Box>
              )}
              <Typography variant='body2'>
                ({datas.length} Hasil) Address Book
              </Typography>
            </Stack>
            <Box
              sx={{
                width: '100%',
                overflow: 'hidden',
                border: '1px solid transparent',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <TableContainer style={{ maxHeight: 300 }}>
                <AppScrollbar>
                  <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Jabatan</TableCell>
                        <TableCell>PGS</TableCell>
                        <TableCell>NIK</TableCell>
                        <TableCell>Departemen</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {datas.map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            backgroundColor: selectedRowIndices.includes(index)
                              ? '#52BD94'
                              : 'transparent',
                          }}
                        >
                          <TableCell>
                            {type !== 'single' ? (
                              <Radio
                                checked={selectedRow.includes(index)}
                                onClick={() => handleRadioChange(index)}
                              />
                            ) : (
                              <Radio
                                checked={selectedRow === index}
                                onClick={() => handleRadioChange(index)}
                              />
                            )}
                          </TableCell>
                          <TableCell>
                            <img
                              src={row.profil}
                              alt='Profil'
                              style={{ width: '50px' }}
                            />
                          </TableCell>
                          <TableCell>
                            <Stack direction='column'>
                              <Typography variant='subtitle1'>
                                {row.jabatan}
                              </Typography>
                              <Typography variant='caption'>
                                {row.nama}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>{row.pgs}</TableCell>
                          <TableCell>{row.nikg}</TableCell>
                          <TableCell>{row.departemen}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AppScrollbar>
              </TableContainer>
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: 5,
                }}
              >
                <Button
                  variant='contained'
                  sx={{
                    borderRadius: '50px',
                    minWidth: '150px',
                    border: '2px solid #8F95B2',
                    bgcolor: 'transparent',
                    color: '#8F95B2',
                  }}
                  endIcon={<UserPlus />}
                >
                  Tambah Ke Personal
                </Button>
                {type === 'single' && (
                  <Button
                    variant='contained'
                    color='secondary'
                    style={{ marginLeft: '10px' }}
                    onClick={() => handleConfirmation(singleData)}
                    sx={{
                      borderRadius: '50px',
                      minWidth: '150px',
                      bgcolor: '#52BD94',
                    }}
                  >
                    Tambahkan
                  </Button>
                )}
              </Box>
            </Box>
            {/* jaga jaga kl berubah jd Accordion */}
            {/* <Accordion>
              {datas.map((row, index) => (
                <><AccordionSummary
                  key={index}
                  expandIcon={<Radio />}
                  aria-controls={`panel-${index}`}
                  id={`panel-${index}`}
                >
                  <img
                    src={row.profil}
                    alt='Profil'
                    style={{ width: '50px' }} />
                  <Typography>{row.jabatan}</Typography>
                </AccordionSummary><AccordionDetails>
                    <Typography variant='caption'>
                      Nama: {row.nama}
                    </Typography>
                    <Typography variant='caption'>PGS: {row.pgs}</Typography>
                    <Typography variant='caption'>NIK: {row.nikg}</Typography>
                    <Typography variant='caption'>
                      Departemen: {row.departemen}
                    </Typography>
                  </AccordionDetails></>
              ))}
            </Accordion>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: 5,
              }}
            >
              <Button
                variant='contained'
                sx={{
                  borderRadius: '50px',
                  minWidth: '150px',
                  border: '2px solid #8F95B2',
                  bgcolor: 'transparent',
                  color: '#8F95B2',
                }}
                endIcon={<UserPlus />}
              >
                Tambah Ke Personal
              </Button>
              {type === 'single' && (
                <Button
                  variant='contained'
                  color='secondary'
                  style={{ marginLeft: '10px' }}
                  onClick={() => handleConfirmation(singleData)}
                  sx={{
                    borderRadius: '50px',
                    minWidth: '150px',
                    bgcolor: '#52BD94',
                  }}
                >
                  Tambahkan
                </Button>
              )}
            </Box> */}
          </Box>
        </Grid>
        {multipleData.length > 0 && type !== 'single' && (
          <Grid
            item
            xs={3}
            sx={{
              borderLeft: '1px solid #000',
              outline: 'none',
              maxHeight: 800,
              overflowY: 'auto',
            }}
          >
            <Box
              sx={{
                padding: '20px',
                position: 'sticky',
                top: 0,
                zIndex: 1,
                backgroundColor: 'white',
              }}
            >
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Typography variant='h4' id='compose-mail-modal'>
                  Pilihan
                </Typography>
                <Button
                  onClick={() => handleRemoveAll([])}
                  endIcon={<Trash2 />}
                >
                  Hapus Semua
                </Button>
              </Stack>
            </Box>
            <Box sx={{ height: 800 }}>
              <AppScrollbar scrollToTop={true}>
                <List>
                  {multipleData.map((item, index) => (
                    <div key={index}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar alt={item.nama} src={item.profil} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Stack direction='column'>
                              <Typography variant='subtitle1'>
                                {item.jabatan}
                              </Typography>
                              <Typography variant='caption'>
                                {item.nama}
                              </Typography>
                            </Stack>
                          }
                        />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge='end'
                            onClick={() => handleRemoveItem(index)}
                          >
                            <XCircle />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      {index !== multipleData.length - 1 && <Divider />}
                    </div>
                  ))}
                </List>
              </AppScrollbar>
            </Box>
            <Box
              sx={{
                textAlign: 'center',
                padding: '20px',
                position: 'sticky',
                bottom: 0,
                zIndex: 1,
                backgroundColor: 'white',
              }}
            >
              <Button
                variant='contained'
                color='primary'
                sx={{
                  borderRadius: '50px',
                  minWidth: '200px',
                }}
                onClick={() => handleConfirmation(multipleData)}
              >
                Konfirmasi
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Modal>
  );
};

export default ComposeMail;

ComposeMail.defaultProps = {
  connection: null,
};

ComposeMail.propTypes = {
  isComposeMail: PropTypes.bool.isRequired,
  onCloseComposeMail: PropTypes.func.isRequired,
  datas: PropTypes.object,
  title: PropTypes.string,
  type: PropTypes.string,
};
