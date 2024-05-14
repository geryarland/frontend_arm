import React from 'react';
import PropTypes from 'prop-types';
import AppSidebarContent from '../AppSidebarContent';
// import { listData1, listData2, listData3 } from '../../../../../services/dummy/sidebar/listDataSurat';
import { listData1, listData2, listData3 } from '../../../../../services/dummy/sidebar/listDataDraft';

const Draft = (props) => {
    const {isCollapsed} = props;
    const listData = [listData1, listData2, listData3];
    return (
        <AppSidebarContent
            isCollapsed={isCollapsed}
            data={listData}
            tab='Surat Keluar'
            subTab='Draft'
            isAdd={true}
            isStatus='draft'
        />
  )
}

export default Draft;

Draft.propTypes = {
    isCollapsed: PropTypes.bool,
}
