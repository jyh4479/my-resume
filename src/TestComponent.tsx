import React from 'react';
import styled from 'styled-components';

const Input = styled.div.attrs(props => ({
    type: 'text',
    color: props.theme.color.main ? props.theme.color.main : 'red',
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  color: ${props => props.theme.color.main};

  ::placeholder {
    color: red;
  }
`

const TestComponent = (props: any) => {


    return (
        <Input>Test</Input>
    )
}

export default TestComponent