import React from 'react';
import PropTypes from 'prop-types';
import AppSidebarContent from '../AppSidebarContent';
import { listData1, listData2, listData3 } from '../../../../../services/dummy/sidebar/listDataSurat';

const LacakProsesSuratKeluar = (props) => {
    const {isCollapsed} = props;
    const listData = [listData1, listData2, listData3];

    return (
        <AppSidebarContent
            isCollapsed={isCollapsed}
            data={listData}
            tab='Surat Keluar'
            subTab='Pelacakan Surat'
            isAdd={true}
            isStatus='lacak proses'
        />
  )
}

export default LacakProsesSuratKeluar;

LacakProsesSuratKeluar.propTypes = {
    isCollapsed: PropTypes.bool,
}
