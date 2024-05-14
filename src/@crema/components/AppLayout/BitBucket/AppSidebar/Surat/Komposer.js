import React from 'react';
import PropTypes from 'prop-types';
import AppSidebarContent from '../AppSidebarContent';
import { listData1, listData2, listData3 } from '../../../../../services/dummy/sidebar/listDataKomposer';

const Komposer = (props) => {
    const {isCollapsed} = props;
    const listData = [listData1, listData2, listData3];

    return (
        <AppSidebarContent
            isCollapsed={isCollapsed}
            data={listData}
            tab='Surat Keluar'
            subTab='Composer'
            isAdd={true}
            isStatus='komposer'
        />
  )
}

export default Komposer;

Komposer.propTypes = {
    isCollapsed: PropTypes.bool,
}
