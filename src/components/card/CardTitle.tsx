import React from 'react';
import styled from "styled-components";

const Title = styled.div`
  padding: 10px 10px 10px 10px;
  background: lightsteelblue;
  font-size: 15px;
  font-weight: bold;
`

const CardTitle = (props: any) => {
    return (
        <Title>
            {props.children}
        </Title>
    )
}

export default CardTitle;