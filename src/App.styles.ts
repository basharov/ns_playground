import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  #root {
    height: 100%;
  }
  html, body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  input, button {
    outline: none;
  }

  button:not(:disabled) {
    cursor: pointer;
  }
`

export const Wrapper = styled.div`
  padding: 0;
  background-color: aliceblue;
  height: 100%;
`
