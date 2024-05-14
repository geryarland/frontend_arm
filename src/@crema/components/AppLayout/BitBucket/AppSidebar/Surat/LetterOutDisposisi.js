import React from 'react';
import PropTypes from 'prop-types';
import AppSidebarContent from '../AppSidebarContent';
import { listData1, listData2, listData3 } from '../../../../../services/dummy/sidebar/listDataSurat';

const LetterInDisposisi = (props) => {
    const {isCollapsed} = props;
    const listData = [listData1, listData2, listData3];

    return (
        <AppSidebarContent
            isCollapsed={isCollapsed}
            data={listData}
            tab='Surat Keluar'
            subTab='Perlu Tindak Lanjut'
            isAdd={true}
            isStatus='perlu tindak lanjut'
        />
  )
}

export default LetterInDisposisi;

LetterInDisposisi.propTypes = {
    isCollapsed: PropTypes.bool,
}