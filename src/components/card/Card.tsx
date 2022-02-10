import React from 'react';
import styled from "styled-components";
//https://flowkater.io/frontend/setup-styled-components/
//타입스크립트에서 스타일드컴포넌트 적용하기전 설정
//https://github.com/styled-components/styled-components/issues/2320
//깃헙에 올라온 해결법 (내가 생각했을때 두 props가 다름) props.children 과 props.theme.color.main << 이 두 props


/*

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
   margin: 10px;
`;
This means that when you use <CheckboxInput />, it will be a checkbox by default, no need to define the prop type="checkbox" every time. This is the main purpose of the .attrs method.

*/

// type props = {
//     children: React.ReactNode,
// };

// const Input = styled.div.attrs(props => ({
//     type: 'text',
//     color: props.theme.color.main ? props.theme.color.main : 'red',
// }))`a
// border-radius: 3px;
//   border: 1px solid palevioletred;
//   display: block;
//   margin: 0 0 1em;
//   color: ${props => props.theme.color.main};
//
//   ::placeholder {
//     color: red;
//   }`

// const TestStyle = styled.div`
//   color: ${props => props.theme.color.main ? props.theme.color.main : 'red'};
// `

const CardContainer = styled.div`
  width: 50vw;
  //height: 50px;

  border-radius: 5px;
  border: solid 1px black;
`

const Card = (props: any) => {
    return (
        <CardContainer>
            {props.children}
        </CardContainer>
    );
};

export default Card;