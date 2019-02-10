import styled from 'styled-components'

import { palette } from 'styled-theme'
import { PaddingBlock, BorderRadius } from 'ui/theme/mixins'


export const Wrapper = styled.li`
  display: flex;
  align-items: center;

  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 4px;
  justify-content: space-between;
  
  max-width: 400px;
  min-height: 50px;

  background-color: ${palette(1)};
  color: ${palette('white', 1)};

  cursor: pointer;

  ${PaddingBlock}

  ${BorderRadius}
`

export const MassageWrap = styled.p`
    word-wrap: break-word;
    font-weight: 600;

    width: 100%;
    height: 100%;
`
