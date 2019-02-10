import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Animations } from 'ui/theme/mixins'


const backgroundColor = ({ color }) => color || palette('grayscale', 0)

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${Animations}
  padding: 10px;
  min-width: 80px;
  
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${palette('grayscale', 1, true)};
  }
`

export const ColorBlock = styled.div`
  border-radius: 50%;
  height: 25px;
  width: 25px;
  background-color: ${backgroundColor};
  margin-bottom: 10px;
`

export const Label = styled.span`
  color: ${palette('grayscale', 0)};
  font-weight: 600;
`

export const LabelIndex = styled.span`
  margin: 10px;
  font-weight: 500;
  color: ${palette('grayscale', 3)};
`
