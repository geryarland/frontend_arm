import React from 'react';
import PropTypes from 'prop-types';
import AppSidebarContent from '../AppSidebarContent';
import { listData1, listData2, listData3 } from '../../../../../services/dummy/sidebar/listDataScan';

const ScannerDrafDisposisi = (props) => {
    const {isCollapsed} = props;
    const listData = [listData1, listData2, listData3];

    return (
        <AppSidebarContent
            isCollapsed={isCollapsed}
            data={listData}
            tab='Scanner'
            subTab='Draf Scan Surat'
            isAdd={true}
            isStatus=''
        />
  )
}

export default ScannerDrafDisposisi;

ScannerDrafDisposisi.propTypes = {
    isCollapsed: PropTypes.bool,
}