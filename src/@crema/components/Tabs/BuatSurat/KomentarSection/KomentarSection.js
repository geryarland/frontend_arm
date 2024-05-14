import React, { useState } from 'react';
import { IconButton, Stack, TextField, Typography } from '@mui/material';
import { Button, Grid, Icon } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { GrAttachment } from 'react-icons/gr';
import { styled } from '@mui/material/styles';
import PdfVector from '../../../../../assets/vector/PdfVector.svg';
import { X } from 'feather-icons-react';
import { CiFileOn } from 'react-icons/ci';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const KomentarSection = () => {
  const [file, setFile] = useState([]);
  const [upload, setUpload] = useState(true);

  const handleFileSelected = (event) => {
    const files = event.target.files;
    setFile([...file, ...files]);
    setUpload(false);
  };

  const handleDeleteFile = (index) => {
    const newFiles = [...file];
    newFiles.splice(index, 1);
    setFile(newFiles);
    if (newFiles.length == 0) {
      setUpload(true);
    }
  };

  return (
    <Stack spacing={7}>
      <Stack
        spacing={3}
        sx={{
          border: '1px solid #D8D8D8',
          minHeight: '208px',
          borderRadius: '12px',
          padding: '15px',
        }}
      >
        <Stack direction='row' padding='10px' paddingLeft='17px'>
          <Icon>
            <ChatBubbleOutlineOutlinedIcon />
          </Icon>

          <Typography
            variant='h4'
            sx={{
              '&::after': {
                content: '"*"',
                color: 'red',
              },
              paddingLeft: '8px',
            }}
          >
            Komentar
          </Typography>
        </Stack>

        <TextField
          id='outlined-multiline-static'
          placeholder='Tambahkan komentar...'
          multiline
          fullWidth
          rows={4}
        />

        {!upload && (
          <Stack direction='row' padding='10px' paddingLeft='17px'>
            <Icon>
              <CiFileOn />
            </Icon>

            <Typography
              variant='h4'
              sx={{
                paddingLeft: '8px',
              }}
            >
              Lampiran
            </Typography>
          </Stack>
        )}

        {file.map((file, index) => (
          <Stack spacing={3} key={index}>
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
                  <Typography
                    variant='h4'
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {file.name}
                  </Typography>
                  <Typography variant='body1'>
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={2} padding='10px'>
                <IconButton onClick={() => handleDeleteFile(index)}>
                  <X />
                </IconButton>
              </Grid>
            </Grid>
          </Stack>
        ))}
        <Stack direction='row' spacing={4} justifyContent='flex-end'>
          <Button
            variant='outlined'
            component='label'
            sx={{
              borderRadius: '24px',
              borderColor: '#7C8B9D',
              color: '#000000',
            }}
          >
            <Icon
              sx={{
                marginRight: '8px',
              }}
            >
              <GrAttachment
                style={{
                  fontSize: 18,
                }}
              />
            </Icon>
            Masukkan file
            <VisuallyHiddenInput
              type='file'
              multiple
              onChange={handleFileSelected}
            />
          </Button>
          <Button
            variant='contained'
            sx={{
              borderRadius: '24px',
              bgcolor: '#4B4747',
            }}
          >
            Kirim
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default KomentarSection;
