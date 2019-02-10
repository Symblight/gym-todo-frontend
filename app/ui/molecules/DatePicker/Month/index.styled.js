import styled from 'styled-components'
import { palette } from 'styled-theme'


const fontColor = ({ today }) => today ? palette('primary', 0) : palette('grayscale', 3)

export const WrapperWeek = styled.div`
  display: flex;
  user-select: none;
  justify-content: space-between;
`

export const DayWeek = styled.span`
  font-weight: 700;
  color: ${fontColor};
  
  display: inline-block;
  width: 2.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
