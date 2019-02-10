import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { ButtonMixin } from 'ui/theme/mixins'


const INDEX_DISABLED = 2
const INDEX_HOVER_COLOR = 3

const backgroundColor = ({ transparent, disabled }) => transparent ? 'transparent' : palette(disabled ? INDEX_DISABLED : 0, true)
const toggleBackground = () => palette('primary', 0)

const foregroundColor = ({ transparent, disabled }) => transparent ? palette(disabled ? INDEX_DISABLED : 1) : palette('grayscale', 0)
const foregroundColorActive = () => palette('grayscale', 0, true)

const hoverBackgroundColor = ({ disabled, transparent }) => !disabled && !transparent && palette('primary', INDEX_HOVER_COLOR)
const hoverForegroundColor = ({ disabled, transparent }) => !disabled && !transparent && palette('primary', 0)

const hoverBackgroundColorActive = ({ disabled, transparent }) => !disabled && !transparent && palette('primary', 1)
const hoverForegroundColorActive = ({ disabled, transparent }) => !disabled && !transparent && palette('primary', 0, true)


export const Wrapper = styled.li`
  background-color: ${ifProp('active', toggleBackground, backgroundColor)};
  color: ${ifProp('active', foregroundColorActive, foregroundColor)};

  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;

 ${ButtonMixin}

 &:hover {
        background-color: ${ifProp('active', hoverBackgroundColorActive, hoverBackgroundColor)};
        color: ${ifProp('active', hoverForegroundColorActive, hoverForegroundColor)};
  }

  span {
      margin-right: 10px;
  }
`
