import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'


const SIZE_CALC = 35
const INDEX_DISABLED = 2
const INDEX_DANGER = 1
const INDEX_LABEL_COLOR = 2
const INDEX_GRAY = 4

const fontSize = ({ height }) => `${height / SIZE_CALC}rem`
const labelPosition = ({ change, focus }) => change || focus ? 'scale(.83333) translateY(-14px)' : null
const labelFontSize = ({ change, focus }) => change || focus ? '0.85rem' : fontSize

const backgroundColor = ({ transparent, disabled }) => transparent ? 'transparent' : palette('grayscale', disabled ? INDEX_DISABLED : 1, true)
const borderState = ({ invalid }) => invalid ? palette('danger', INDEX_DANGER) : 'transparent'

const styles = css`
  font-family: ${font('primary')};
  font-size: ${fontSize};
  color: ${palette('grayscale', 0)};
  width: 100%;
  margin: 0;
  padding: ${ifProp({ type: 'textarea' }, '0.4444444444em', '0 0.4444444444em')};
  height: ${ifProp({ type: 'textarea' }, 'auto', '2.2222222222em')};
  background-color: ${ifProp('inline', palette('grayscale', 0, true), backgroundColor)};
  resize: vertical;
  overflow: auto;

  ::placeholder {
    color: ${palette('grayscale', INDEX_LABEL_COLOR)}; 
  }

  &:focus {
    outline: none
  }
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${ifProp('inline', palette('grayscale', 0, true), backgroundColor)};
  box-sizing: border-box;
  border-radius: 0.250em;
  border: 2px solid ${borderState};

  svg {
    display: block;
    margin: auto;
    color: ${palette('grayscale', INDEX_LABEL_COLOR)};
    font-size: ${fontSize};
  }
`

export const Wrap = styled.div`
    width: 100%;
    position: relative;
`

export const Label = styled.label`
  font-size: ${labelFontSize};
  height: 36px;
  left: 10px;
  line-height: 36px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-overflow: ellipsis;
  transform-origin: left;
  user-select: none;
  white-space: nowrap;
  transition: transform ease-out .1s, ease-out .1s;
  color: ${palette('grayscale', INDEX_LABEL_COLOR)};

  transform: ${labelPosition};
`

export const Divider = styled.div`
    position: absolute;
    top: 40px;
    width: 100%;
    height: ${ifProp('focus', '2px', '1px')};
    background-color: ${ifProp('focus', palette('grayscale', 0), palette('grayscale', INDEX_GRAY))};
`

export const StyledInput = styled.input`${styles}`
export const StyledTextArea = styled.textarea`${styles}`
