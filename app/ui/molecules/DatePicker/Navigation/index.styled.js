import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Icon } from 'ui'


export const StyledIcon = styled(Icon)`
  cursor: pointer;
  color: ${palette('grayscale', 3)};
`

export const WrapperNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  margin-bottom: 18px;
`
