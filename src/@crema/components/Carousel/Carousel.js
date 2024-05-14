import React from 'react';
import '../../../styles/carousel.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { Box } from '@mui/material';
import Carousel1 from '../../../assets/LoginPage/carousel1.png';
import Carousel2 from '../../../assets/LoginPage/carousel2.png';

const Carousel = () => {
  return (
    <Box>
      <Box style={{ width: '54vw', height: '100vh' }}>
        <CCarousel controls indicators>
          <CCarouselItem>
            <CImage className='d-block w-100' src={Carousel1} alt='slide 1' />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className='d-block w-100' src={Carousel2} alt='slide 2' />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className='d-block w-100' src={Carousel2} alt='slide 3' />
          </CCarouselItem>
        </CCarousel>
      </Box>
    </Box>
  );
};

export default Carousel;
