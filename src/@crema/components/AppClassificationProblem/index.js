import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Box,
  Button,
  Typography,
  Stack,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
  InputBase,
} from '@mui/material';
import { X, Trash2, UserPlus, XCircle } from 'feather-icons-react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ArrowForwardIosSharp } from '@mui/icons-material';
import AppScrollbar from '../AppScrollbar';
import SearchIcon from '@mui/icons-material/Search';
import { classification } from '@crema/services/dummy/classification/classification';
import { useSelector, useDispatch } from 'react-redux';
import { addKlasifikasi } from '../../../redux/actions/classificationAction';

const ClassificationProblem = (props) => {
  const dispatch = useDispatch();

  const { isClassificationProblem, onCloseClassificationProblem, text } = props;
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [expanded, setExpanded] = React.useState({});

  const StyledAccordion = styled((props) => (
    <Accordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
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
  ))(({ theme, selected, disabled }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
      backgroundColor: selected ? theme.palette.action.selected : 'transparent',
    },
  }));

  const AccordionDetail = styled(AccordionDetails)(() => ({
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const handleSave = () => {
    if (selectedItem) {
      console.log('Selected Item (to be saved):', selectedItem);
      dispatch(addKlasifikasi(selectedItem));
    } else {
      console.log('No item selected.');
    }
    onCloseClassificationProblem();
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    // console.log('Selected Item:', item);
  };

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded({ ...expanded, [panel]: isExpanded });
  };
  return (
    <Modal
      open={isClassificationProblem}
      onClose={onCloseClassificationProblem}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          overflow: 'auto',
          bgcolor: 'background.paper',
          borderRadius: 8,
          maxWidth: 800,
          maxHeight: 600,
          padding: 3,
        }}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          marginBottom={2}
        >
          <Typography variant='h1' id='compose-mail-modal'>
            Address Book {text}
          </Typography>
          <IconButton onClick={onCloseClassificationProblem}>
            <X />
          </IconButton>
        </Stack>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '0.5px solid grey',
              width: '100%',
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
          <Box sx={{ height: 380, overflowY: 'auto', marginTop: 5 }}>
            <AppScrollbar
              sx={{
                height: 350,
              }}
              scrollToTop={false}
            >
              {classification.map((item) => (
                <StyledAccordion
                  key={item.id}
                  disabled={item.code.length === 0}
                >
                  <AccordionSummarys>
                    <Stack alignItems='start'>
                      <Typography>{item.name}</Typography>
                      <Typography
                        variant='caption'
                        sx={{ ml: 2, color: 'text.secondary' }}
                      >
                        {item.desc}
                      </Typography>
                    </Stack>
                  </AccordionSummarys>
                  <AccordionDetail sx={{ paddingLeft: 4 }}>
                    {item.code.map((codeItem) => (
                      <StyledAccordion key={`${item.id}-${codeItem.id}`}>
                        <AccordionSummarys
                          onClick={
                            codeItem.code.length === 0
                              ? () => handleSelectItem(codeItem)
                              : null
                          }
                        >
                          <Stack alignItems='start'>
                            <Typography>{codeItem.name}</Typography>
                            <Typography
                              variant='caption'
                              sx={{ ml: 2, color: 'text.secondary' }}
                            >
                              {codeItem.desc}
                            </Typography>
                          </Stack>
                        </AccordionSummarys>
                        <AccordionDetail sx={{ paddingLeft: 8 }}>
                          {codeItem.code.map((code1Item) => (
                            <StyledAccordion
                              key={`${item.id}-${codeItem.id}-${code1Item.id}`}
                            >
                              <AccordionSummarys
                                onClick={
                                  code1Item.code.length === 0
                                    ? () => handleSelectItem(code1Item)
                                    : null
                                }
                              >
                                <Stack alignItems='start'>
                                  <Typography>{code1Item.name}</Typography>
                                  <Typography
                                    variant='caption'
                                    sx={{ ml: 2, color: 'text.secondary' }}
                                  >
                                    {code1Item.desc}
                                  </Typography>
                                </Stack>
                              </AccordionSummarys>
                              <AccordionDetail sx={{ paddingLeft: 12 }}>
                                {code1Item.code.map((code2Item) => (
                                  <StyledAccordion
                                    key={`${item.id}-${codeItem.id}-${code1Item.id}-${code2Item.id}`}
                                  >
                                    <AccordionSummarys
                                      onClick={
                                        code2Item.code.length === 0
                                          ? () => handleSelectItem(code2Item)
                                          : null
                                      }
                                    >
                                      <Stack alignItems='start'>
                                        <Typography>
                                          {code2Item.name}
                                        </Typography>
                                        <Typography
                                          variant='caption'
                                          sx={{
                                            ml: 2,
                                            color: 'text.secondary',
                                          }}
                                        >
                                          {code2Item.desc}
                                        </Typography>
                                      </Stack>
                                    </AccordionSummarys>
                                  </StyledAccordion>
                                ))}
                              </AccordionDetail>
                            </StyledAccordion>
                          ))}
                        </AccordionDetail>
                      </StyledAccordion>
                    ))}
                  </AccordionDetail>
                </StyledAccordion>
              ))}
            </AppScrollbar>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: 5,
            }}
          >
            <Button
              variant='contained'
              color='secondary'
              onClick={handleSave}
              sx={{
                borderRadius: '50px',
                minWidth: '150px',
              }}
            >
              Simpan
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ClassificationProblem;

ClassificationProblem.defaultProps = {
  connection: null,
};

ClassificationProblem.propTypes = {
  isClassificationProblem: PropTypes.bool.isRequired,
  onCloseClassificationProblem: PropTypes.func.isRequired,
  text: PropTypes.string,
};
