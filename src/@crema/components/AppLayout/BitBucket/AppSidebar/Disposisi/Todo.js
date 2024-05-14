import React from 'react';
import PropTypes from 'prop-types';
import AppSidebarContent from '../AppSidebarContent';
import { listData1, listData2, listData3 } from '../../../../../services/dummy/sidebar/listDataDisposisi';

const Todo = (props) => {
    const {isCollapsed} = props;
    const listData = [listData1, listData2, listData3];

    return (
        <AppSidebarContent
            isCollapsed={isCollapsed}
            data={listData}
            tab='Disposisi'
            subTab='Todo'
            isAdd={false}
            isStatus='todo'
        />
  )
}

export default Todo;

Todo.propTypes = {
    isCollapsed: PropTypes.bool,
}