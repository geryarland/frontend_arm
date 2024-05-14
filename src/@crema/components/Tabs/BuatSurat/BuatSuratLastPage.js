import React from 'react';
import PreviewSuratImage from '../../../../assets/BuatSurat/Preview Surat.png';
import BuatSuratAlert from '@crema/components/Tabs/BuatSurat/BuatSuratAlert/BuatSuratAlert';

const BuatSuratLastPage = () => {
  return (
    <div>
      <BuatSuratAlert
        title={'Berhasil'}
        desc={'Surat berhasil disubmit kepada pemeriksa 1 Adhi Prasetio/740049'}
      />
      <img
        src={PreviewSuratImage}
        alt='surat'
        style={{ paddingTop: '20px', maxWidth: '1305px' }}
      ></img>
    </div>
  );
};

export default BuatSuratLastPage;
