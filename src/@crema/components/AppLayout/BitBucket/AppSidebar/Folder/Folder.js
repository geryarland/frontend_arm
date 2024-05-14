import React from 'react';
import PropTypes from 'prop-types';
import AppSidebarFolder from '../AppSidebarFolder';
import AppSidebarContent from '../AppSidebarContent';
import {
  listData1,
  listData2,
  listData3,
} from '../../../../../services/dummy/sidebar/listDataFolder';

const LetterInDisposisi = (props) => {
  const { isCollapsed } = props;
  const listData = [listData1, listData2, listData3];

  return (
    <AppSidebarFolder
      isCollapsed={isCollapsed}
      data={listData}
      tab='Folder'
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
