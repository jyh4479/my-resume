import React from "react";
import styled from "styled-components";

const Data = styled.td`
`

const TableData = (props: any) => {
    return (
        <Data>{props.children}</Data>
    )
}

export default TableData;