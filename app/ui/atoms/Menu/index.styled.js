import styled from 'styled-components'
import { palette } from 'styled-theme'

import { BorderRadius, Shadow } from 'ui/theme/mixins'


const INDEX_GRAYSCALE = 3
const INDEX_DISABLED = 2

const backgroundColor = ({ transparent, disabled }) => transparent ? 'transparent' : palette(disabled ? INDEX_DISABLED : 1)
const foregroundColor = ({ transparent, disabled }) => transparent ? palette(disabled ? INDEX_DISABLED : 3) : palette('grayscale', 0)

export const Wrapper = styled.div`
    position: relative;
    cursor: pointer;

    svg {
        color: ${palette('grayscale', INDEX_GRAYSCALE)};
    }
`

export const WrapperOptions = styled.ul`
    position: absolute;
    top: 28px;
    left: 0px;
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-bottom: 8px;

    overflow: hidden;

    ${BorderRadius}
    ${Shadow}
`

export const OptionsItem = styled.li`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
    padding: 4px;
    overflow: hidden;
    min-width: 150px;
    width: 100%;

    &:hover {
        background-color: ${palette('grayscale', 1, true)}; 
    }

`
