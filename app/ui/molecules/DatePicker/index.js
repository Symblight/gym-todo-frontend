import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, Label, Icon } from 'ui'
import { getMonth, getNumberOfWeek } from './helpers'
import { Month } from './Month'
import { Navigation } from './Navigation'

import {
  Wrapper,
  SectionNav,
  StyledLabel,
  WrapperWeek,
  BlockWeek,
  Row,
  Aside,
  StyledLabelWeek,
  IconWrapper,
} from './index.styled'


const START_MONTH = 11

export const DatePicker = ({
  date,
  onClick,
  weekmode,
  content,
  ...props
}) => {
  const dayNumber = date.getDay()
  const monthNumber = date.getMonth()
  const yearNumber = date.getFullYear()

  const [indexMonth, setMonth] = useState(monthNumber)
  const [indexWeek, setWeek] = useState(0)
  const [year, setYear] = useState(yearNumber)
  const [chooseDay, setDay] = useState(null)


  const handleNavigation = ({ index }) => {
    if (index > START_MONTH) {
      setMonth(0)
      setYear(year + 1)
    }
    else if (index < 0) {
      setMonth(START_MONTH)
      setYear(year - 1)
    }
    else {
      setMonth(index)
    }
  }

  const handleNavigationWeek = ({ index }) => {
    const sizeWeeks = getNumberOfWeek(year, indexMonth)

    sizeWeeks >= index && index > 0 ? setWeek(index) : null
  }

  const month = getMonth(indexMonth)

  const handleClick = (value) => {
    if (onClick) {
      onClick(value)
    }
    else {
      setDay(value)
    }
  }

  if (weekmode) {
    const labelDay = new Date().getDate()

    return (
      <WrapperWeek>
        <StyledLabelWeek height={35} disabled>today</StyledLabelWeek>
        <Aside>
          <StyledLabelWeek>{`${labelDay} ${month} ${year}`}</StyledLabelWeek>
          <Navigation
            index={indexWeek}
            onChange={handleNavigationWeek}
            weekmode
          />
        </Aside>
        <Row>
          <Month
            onClick={handleClick}
            indexMonth={indexMonth}
            indexWeek={indexWeek}
            year={year}
            dayNumber={dayNumber}
            activeday={chooseDay}
            weekmode={weekmode}
          />
          {
            // <BlockWeek>
            //   <IconWrapper>
            //     <Icon icon='calendar-second' />
            //   </IconWrapper>
            //   <Label reverse>Next Week</Label>
            // </BlockWeek>
            content
          }
        </Row>
      </WrapperWeek>
    )
  }

  return (
    <Wrapper {...props}>
      <Navigation
        index={indexMonth}
        onChange={handleNavigation}
      >
        <SectionNav>
          <StyledLabel>{`${month} ${year}`}</StyledLabel>
        </SectionNav>

      </Navigation>
      <Month
        onClick={handleClick}
        indexMonth={indexMonth}
        year={year}
        dayNumber={dayNumber}
        activeday={chooseDay}
      />
    </Wrapper>
  )
}

DatePicker.propTypes = {
  date: PropTypes.any,
  onClick: PropTypes.func,
  weekmode: PropTypes.bool,
  content: PropTypes.any,
}
