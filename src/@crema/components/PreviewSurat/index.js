import { Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { X } from 'feather-icons-react';
import PdfVector from '../../../assets/vector/PdfVector.svg';

const PreviewSurat = () => {
  return (
    <Stack spacing={3}>
      <Grid
        container
        border={'1px solid black'}
        alignItems='center'
        borderRadius='4px'
        borderColor='#8C8F93'
      >
        <Grid
          item
          xs={2}
          borderRight={'1px solid black'}
          textAlign='center'
          borderColor='#8C8F93'
          padding='10px'
        >
          <img
            src={PdfVector}
            alt='pdf file'
            style={{
              maxHeight: '50px',
            }}
          />
        </Grid>

        <Grid item xs={8} padding='10px'>
          <Stack>
            <Typography variant='h4'>Penunjukan Satgas P...</Typography>
            <Typography variant='body1'>PDF 2.8 MB</Typography>
          </Stack>
        </Grid>

        <Grid item xs={2} padding='10px'>
          <IconButton>
            <X />
          </IconButton>
        </Grid>
      </Grid>

      <Grid
        container
        border={'1px solid black'}
        alignItems='center'
        borderRadius='4px'
        borderColor='#8C8F93'
      >
        <Grid
          item
          xs={2}
          borderRight={'1px solid black'}
          textAlign='center'
          borderColor='#8C8F93'
          padding='10px'
        >
          <img
            src={PdfVector}
            alt='pdf file'
            style={{
              maxHeight: '50px',
            }}
          />
        </Grid>
        <Grid item xs={8} padding='10px'>
          <Stack>
            <Typography variant='h4'>Penunjukan Satgas P...</Typography>
            <Typography variant='body1'>PDF 2.8 MB</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2} padding='10px'>
          <IconButton>
            <X />
          </IconButton>
        </Grid>
      </Grid>

      <Grid
        container
        border={'1px solid black'}
        alignItems='center'
        borderRadius='4px'
        borderColor='#8C8F93'
      >
        <Grid
          item
          xs={2}
          borderRight={'1px solid black'}
          textAlign='center'
          borderColor='#8C8F93'
          padding='10px'
        >
          <img
            src={PdfVector}
            alt='pdf file'
            style={{
              maxHeight: '50px',
            }}
          />
        </Grid>
        <Grid item xs={8} padding='10px'>
          <Stack>
            <Typography variant='h4'>Penunjukan Satgas P...</Typography>
            <Typography variant='body1'>PDF 2.8 MB</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2} padding='10px'>
          <IconButton>
            <X />
          </IconButton>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default PreviewSurat;
