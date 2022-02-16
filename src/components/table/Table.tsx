import React from 'react';
import styled from "styled-components";

const TableContainer = styled.table`
`

const Table = (props: any) => {
    return (
        <TableContainer>
            {props.children}
        </TableContainer>
    )
}

export default Table;