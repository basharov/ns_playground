import styled from 'styled-components'

export const Cell = styled.div`
  height: 60px;
  width: 60px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 0;
  background-color: navy;
`

export const FilledCell = styled.div`
  height: 60px;
  width: 60px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 0;
  background-color: steelblue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
`
