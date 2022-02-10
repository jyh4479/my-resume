import React from 'react';
import styled from "styled-components";

const Title = styled.div`
  padding: 10px 10px 10px 10px;
  border-radius: 5px 5px 0 0;
  background: lightsteelblue;
`

const CardTitle = (props: any) => {
    return (
        <Title>
            {props.children}
        </Title>
    )
}

export default CardTitle;