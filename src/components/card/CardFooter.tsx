import React from 'react';
import styled from "styled-components";

const Footer = styled.div`
  padding: 10px 10px 10px 10px;
  border-radius: 0 0 5px 5px;
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