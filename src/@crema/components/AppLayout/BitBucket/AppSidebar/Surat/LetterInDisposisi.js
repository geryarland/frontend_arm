import React from 'react';
import PropTypes from 'prop-types';
import AppSidebarContent from '../AppSidebarContent';
import { listData1, listData2, listData3 } from '../../../../../services/dummy/sidebar/listDataDisposisi';

const LetterInDisposisi = (props) => {
  const { isCollapsed } = props;
  const listData = [listData1, listData2, listData3];

  return (
    <AppSidebarContent
      isCollapsed={isCollapsed}
      data={listData}
      tab='Surat Masuk'
      subTab=''
      isAdd={true}
      isStatus='surat masuk'
    />
  );
};

export default LetterInDisposisi;

LetterInDisposisi.propTypes = {
  isCollapsed: PropTypes.bool,
};
