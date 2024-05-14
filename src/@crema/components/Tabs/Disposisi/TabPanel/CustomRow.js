import React from 'react'
import PropTypes from 'prop-types'
import {
    TableRow,
    TableCell,
    tableCellClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomRow = (props) => {
    const {key, name, data} = props;

    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#EEF0F7',
          color: '#262829',
          fontSize: 16,
          fontWeight: 'bold',
          borderBottom: 'none',
        },
        [`&.${tableCellClasses.body}`]: {
          color: '#25282B',
          borderBottom: 'none',
        },
        '&.small': {
          fontSize: 14,
          fontWeight: 'regular',
        },
        '&.medium': {
          fontWeight: 'bold',
          fontSize: 16,
        },
    }));

  return (
    <TableRow key={key}>
        <StyledTableCell
            className='medium'
            style={{ width: '15%' }}
        >
            {name}
        </StyledTableCell>
        <StyledTableCell
            className='medium'
            style={{ width: '2%', paddingRight: '0px' }}
        >
            :
        </StyledTableCell>
        <StyledTableCell
            className='small'
            style={{ paddingLeft: '8px', fontSize: 14, fontWeight: 'regular' }}
        >
            {data}
        </StyledTableCell>
    </TableRow>
  )
}

export default CustomRow;

CustomRow.propTypes = {
    key: PropTypes.any,
    name: PropTypes.string.isRequired,
    data: PropTypes.node.isRequired,
}