import styled from 'styled-components'
import { palette } from 'styled-theme'


export const Wrapper = styled.div`
  display: flex;

  flex-direction:column;

  width: 280px;

  height: 100%;

  border-right: 1px solid ${palette('grayscale', 5)};
`
export const Head = styled.div`
  height: 140px;
`
