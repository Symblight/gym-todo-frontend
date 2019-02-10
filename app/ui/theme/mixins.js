import { css } from 'styled-components'
import { font } from 'styled-theme'


const SIZE_CALC = 42
const fontSize = ({ height }) => `${height / SIZE_CALC}rem`


export const Animations = css`
    transition: 250ms ease-out, color 250ms ease-out; 
`

export const FontSize = css`
    font-size: ${fontSize};
`

export const BorderRadius = css`
    border-radius: 0.250em;
`

export const PaddingBlock = css`
    padding: 12px;
`
export const Shadow = css`
    box-shadow: 0px 4px 20px 0 rgba(10,16,34,.2), 0 0 0 transparent;
    transition: box-shadow .6s,height .2s;
`

export const ButtonMixin = css`
    cursor: pointer;
    font-family: ${font('primary')};
    ${FontSize};
    padding: .608rem 1rem;
    font-weight: 600;
    box-sizing: border-box;
    ${Animations}
    outline: none;
`
