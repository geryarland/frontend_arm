import React from 'react';
import PropTypes from 'prop-types';
import AppSidebarContent from '../AppSidebarContent';
import { listData1, listData2, listData3 } from '../../../../../services/dummy/sidebar/listDataTemplate';

const Template = (props) => {
    const {isCollapsed} = props;
    const listData = [listData1, listData2, listData3];

    return (
        <AppSidebarContent
            isCollapsed={isCollapsed}
            data={listData}
            tab='Surat Keluar'
            subTab='Template Surat'
            isAdd={true}
            isStatus='template'
        />
  )
}

export default Template;

Template.propTypes = {
    isCollapsed: PropTypes.bool,
}
