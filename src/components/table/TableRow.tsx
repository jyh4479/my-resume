import React from "react";
import styled from "styled-components";

const Row = styled.tr`
`

const TableRow = (props: any) => {
    return (
        <Row>{props.children}</Row>
    )
}

export default TableRow;