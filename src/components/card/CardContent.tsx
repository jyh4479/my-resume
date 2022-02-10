import React from 'react';
import styled from "styled-components";

const Content = styled.div`
  padding: 10px 10px 10px 10px;
`

const CardContent = (props: any) => {
    return (
        <Content>
            {props.children}
        </Content>
    )
}

export default CardContent;