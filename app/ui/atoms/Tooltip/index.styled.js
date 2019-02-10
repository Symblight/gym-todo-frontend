import styled from 'styled-components'
import { palette } from 'styled-theme'
import { FontSize, BorderRadius } from 'ui/theme/mixins'


export const Wrapper = styled.div`
  background-color: ${palette('primary', 0)};
  color: ${palette('white', 0)};
  padding: 8px 4px 8px 4px;
  margin: 8px;
  font-weight: 600;
  ${FontSize}
  ${BorderRadius}
`

export const Arrow = styled.div`
  background-color: ${palette('primary', 0)};
  height: 8px;
  transform: rotate(45deg) translate(-50%,-50%);
  transform-origin: 0 0;
  width: 8px;
`
