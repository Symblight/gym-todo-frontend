import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'


const SIZE_CALC = 35
const INDEX_DISABLED = 2

const fontSize = ({ height }) => `${height / SIZE_CALC}rem`
const foregroundColor = ({ disabled }) => disabled ? palette('grayscale', INDEX_DISABLED) : palette('grayscale', 0)

const styles = css`
  font-family: ${font('primary')};
  font-size: ${fontSize};
  color: ${foregroundColor};
  font-weight: 600;
`

export const StyledLabel = styled.span`${styles}`
