import React from 'react';
import styled from "styled-components";

const Footer = styled.div`
  padding: 10px 10px 10px 10px;
  background: lightsteelblue;
`

const CardFooter = (props: any) => {
    return (
        <Footer>
            {props.children}
        </Footer>
    )
}

export default CardFooter;