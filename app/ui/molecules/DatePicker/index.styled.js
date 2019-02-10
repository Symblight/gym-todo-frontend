import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Label } from 'ui'
import { PaddingBlock, BorderRadius, Shadow } from 'ui/theme/mixins'


export const StyledLabel = styled(Label)`
  color: ${palette('primary', 0)};
`

export const StyledLabelWeek = styled(Label)`
  text-transform: uppercase;
  padding-left: 12px;
`

export const Aside = styled.div`
  display: flex;

  justify-content: space-between;
`

export const Wrapper = styled.div`
  height: 380px;
  width: 424px;
  ${PaddingBlock}
`

export const SectionNav = styled.section`
    display: flex;
    flex-direction: row;

   span {
     margin-left: 4px;
   }
`

export const WrapperWeek = styled.div`
  display: flex;
  flex-direction: column;

  ${Shadow}
`

export const BlockWeek = styled.div`
  display: flex;
  align-items: center;
  background-color: ${palette('primary', 0)};
  color: ${palette('grayscale', 0, true)};
  width: 100%;

  ${PaddingBlock}
`

export const IconWrapper = styled.div`
  ${BorderRadius}

  background-color: ${palette('primary', 1)}; 

  margin-right: 8px;

  span {
    height: 3rem;
    width: 3rem;
  }
`

export const Row = styled.div`
  display: flex;
`
