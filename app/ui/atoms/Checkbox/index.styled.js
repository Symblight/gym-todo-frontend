import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Animations } from 'ui/theme/mixins'


const INDEX_COLOR = 2

const toggleBackground = ({ toggle }) => toggle ? palette('primary', 1) : palette('grayscale', INDEX_COLOR, true)

export const Wrapper = styled.div`
    position: relative;
    height: 25px;
    width: 25px;
    background-color: ${toggleBackground};
    border-radius: 0.250em;
    ${Animations}
    user-select: none;
    cursor: pointer;
`

export const CheckMark = styled.span`
    position: absolute;
    left: 10px;
    top: 6px;
    width: 7px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
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
