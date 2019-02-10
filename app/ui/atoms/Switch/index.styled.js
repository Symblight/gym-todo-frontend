import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Animations } from 'ui/theme/mixins'


const INDEX_DISABLED = 2
const INDEX_COLOR = 3

const toggleState = ({ toggle }) => toggle ? '27px' : '1px'
const toggleBackground = ({ toggle }) => toggle ? palette('primary', 1) : palette('grayscale', INDEX_COLOR, true)
const backgroundColor = ({ transparent, disabled }) => transparent ? 'transparent' : palette('grayscale', disabled ? INDEX_DISABLED : INDEX_COLOR, true)

export const Wrapper = styled.div`
    display: inline-block;
    position: relative;
    background-color: ${backgroundColor};
    border-radius: 60px;
    user-select: none;
    cursor: pointer;
    border: 0;
    padding: 0;
`

export const Container = styled.div`
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: ${toggleBackground};
    ${Animations}
`

export const Thumb = styled.div`
    position: absolute;
    top: 1px;
    left: ${toggleState};
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #fafafa;
    box-sizing: border-box;
    transition: all .5s cubic-bezier(.23,1,.32,1) 0ms;
`

export const StyledInput = styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`
