import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

import { Animations } from 'ui/theme/mixins'


const fontColor = ({ currentMonth }) => currentMonth ? palette('grayscale', 0) : palette('grayscale', 3)

export const Wrapper = styled.div`
  display: flex;
  margin: 0.166rem;
  width: 2.7rem;
  height: 2.7rem;
  line-height: 1.7rem;
  font-weight: 700;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  user-select: none;

  color: ${ifProp('active', palette('grayscale', 0, true), ifProp('today', palette('primary', 0), fontColor))};

  background-color: ${ifProp('active', palette('primary', 1), palette('grayscale', 0, true))};

  border-radius: 50%;

  ${Animations}

  &:hover {
    background-color: ${ifProp('active', palette('primary', 1), palette('grayscale', 1, true))};
  }
`

export const Article = styled.div`
`
