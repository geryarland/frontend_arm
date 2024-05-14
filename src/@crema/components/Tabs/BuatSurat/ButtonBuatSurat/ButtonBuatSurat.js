import { Box, IconButton } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import React from 'react';
import PropTypes from 'prop-types';
import ComposeMail from '@crema/components/AppAddress';
import { users } from '@crema/services/dummy/user/user';
const ButtonBuatSurat = ({ pemeriksa, tittle }) => {
  const [isComposeMail, setComposeMail] = React.useState(false);
  const datas = users;
  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        right: '1%',
      }}
    >
      {pemeriksa && (
        <IconButton>
          <AddCircleOutlineRoundedIcon
            onClick={onOpenComposeMail}
            sx={{ color: 'black', fontSize: '40px' }}
          />
        </IconButton>
      )}

      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
        datas={datas}
        tittle = {tittle}
      />
    </Box>
  );
};

ButtonBuatSurat.propTypes = {
  pemeriksa: PropTypes.bool,
  tittle: PropTypes.string,
};

export default ButtonBuatSurat;
