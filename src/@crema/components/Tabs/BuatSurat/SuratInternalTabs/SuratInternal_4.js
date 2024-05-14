import React from 'react';
import { Stack, Button} from '@mui/material';
import PropTypes from 'prop-types';
import FormAddressBook from '../../FormAddressBook';
import { useSelector } from 'react-redux';
const SuratInternal_4 = ({ handleNext, handlePrev }) => {
  const pemeriksa = useSelector((state) => state.addressbook.pemeriksa);
  const pemohon = useSelector((state) => state.addressbook.pemohon);

  return (
    <>
      <Stack
        spacing={4}
        sx={{
          border: '1px solid #D8D8D8',
          minHeight: '300px',
          borderRadius: '12px',
          padding: '15px',
        }}
      >
        <FormAddressBook text='Pemeriksa' data={pemeriksa} />
        <FormAddressBook text='Pemohon' data={pemohon}/>
        <Stack direction='row' justifyContent='flex-end' spacing={4}>
          <Button
            variant='contained'
            sx={{
              borderRadius: '12px',
              bgcolor: '#D9DDE3',
              color: '#5C5E61',
              minWidth: '84px',
            }}
            onClick={handlePrev}
          >
            Kembali
          </Button>

          <Button
            variant='contained'
            sx={{
              borderRadius: '12px',
              bgcolor: '#E42313',
              minWidth: '220px',
              minHeight: '50px',
            }}
            onClick={handleNext}
          >
            Selanjutnya (lainnya)
          </Button>
        </Stack>
      </Stack>

      {/* <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
      /> */}
    </>
  );
};

SuratInternal_4.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default SuratInternal_4;