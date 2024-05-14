import React from 'react';
import PropTypes from 'prop-types';
import AppSidebarContent from '../AppSidebarContent';
// import { listData1, listData2, listData3 } from '../../../../../services/dummy/sidebar/listDataSurat';
import { listData1, listData2, listData3 } from '../../../../../services/dummy/sidebar/listDataSuratDibatalkan';

const SuratDibatalkan = (props) => {
    const {isCollapsed} = props;
    const listData = [listData1, listData2, listData3];
    return (
        <AppSidebarContent
            isCollapsed={isCollapsed}
            data={listData}
            tab='Surat Keluar'
            subTab='Surat yang Dibatalkan'
            isAdd={true}
            isStatus='surat dibatalkan'
        />
  )
}

export default SuratDibatalkan;

SuratDibatalkan.propTypes = {
    isCollapsed: PropTypes.bool,
}
