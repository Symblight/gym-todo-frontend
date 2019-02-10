import styled from 'styled-components'

import { BorderRadius, Animations, Shadow, PaddingBlock } from 'ui/theme/mixins'


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${PaddingBlock}

  ${Shadow}

  ${BorderRadius}

  width: 140px;
  height: 140px;

  margin: 12px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
  height: 20px;

  ${Animations}
  
  cursor: pointer;
`
