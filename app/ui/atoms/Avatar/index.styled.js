import styled from 'styled-components'
import { palette } from 'styled-theme'

import { BorderRadius } from 'ui/theme/mixins'


const backgroundColor = ({ color }) => color
const SIZE = ({ size }) => {
  switch (size) {
    case 'small':
      return '44px'
    case 'medium':
      return '64px'
    case 'large':
      return '84px'
    default:
      return '44px'
  }
}

const fontSize = ({ size }) => {
  switch (size) {
    case 'small':
      return '16px'
    case 'medium':
      return '26px'
    case 'large':
      return '44px'
    default:
      return '16px'
  }
}


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${BorderRadius}

  font-weight: 700;
  color: ${palette('white', 0)};

  font-size: ${fontSize};

  background-color: ${backgroundColor};

  width: ${SIZE};
  height: ${SIZE};
`
