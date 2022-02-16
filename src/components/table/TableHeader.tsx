import React from "react";
import styled from "styled-components";

const Header = styled.th`
`

const TableHeader = (props: any) => {
    return (
        <Header>{props.children}</Header>
    )
}

export default TableHeader;