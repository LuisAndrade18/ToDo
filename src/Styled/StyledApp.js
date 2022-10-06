import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #e8e8e879;
    position: relative;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  color: #781fa1;
`;

export const Button = styled.button`
  border-radius: 100%;
  width: 50px;
`
