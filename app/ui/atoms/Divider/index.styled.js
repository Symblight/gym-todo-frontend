import styled from 'styled-components'
import { palette } from 'styled-theme'


const INDEX_GRAY = 4

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const WrapperHorizontal = styled(Wrapper)`
  border-bottom: 1px solid  ${palette('grayscale', INDEX_GRAY)};
`

export const WrapperVertical = styled(Wrapper)`
  border-left: 1px solid  ${palette('grayscale', INDEX_GRAY)};
`
