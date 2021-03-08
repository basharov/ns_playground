import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  input, button {
    outline: none;
  }

  button:not(:disabled) {
    cursor: pointer;
  }
`

export const Wrapper = styled.div`
  padding: 20px;
  background-color: aliceblue;
`
