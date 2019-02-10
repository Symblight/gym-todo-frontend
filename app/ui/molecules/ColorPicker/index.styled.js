import styled from 'styled-components'
import { palette } from 'styled-theme'


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${palette('white', 2)};
`

export const RowPalette = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export const Head = styled.div`
  width: 10%;
  padding: 25px;
`
