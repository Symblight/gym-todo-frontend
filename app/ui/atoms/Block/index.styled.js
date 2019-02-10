import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'


export const Wrapper = styled.div`
    font-family: ${font('primary')};
    background-color: ${ifProp('opaque', palette(0, true), 'transparent')};
    color: ${palette({ grayscale: 0 }, 1)};
`
