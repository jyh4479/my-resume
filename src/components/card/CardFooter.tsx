import React, {FunctionComponent} from 'react';
import styled from "styled-components";

//해당 컴포넌트 자체의 props 타입 지정
interface CardFooterProps {
    backGround?: string;
}

//styled component의 porps 타입 지정
interface StyleProps {
    backGround?: string;
}

const Footer = styled.div.attrs(props => ({}))<StyleProps>`
  padding: 10px 10px 10px 10px;
  background: ${props => props.backGround ? props.backGround : props.theme.color.main};
  //background: lightsteelblue;
  font-size: 11px;
  color: aliceblue;
`

const CardFooter: FunctionComponent<CardFooterProps> = props => {
    return (
        <Footer backGround={props.backGround}>
            {props.children}
        </Footer>
    )
}

export default CardFooter;