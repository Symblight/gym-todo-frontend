import React from 'react'
import PropTypes from 'prop-types'

import uuid from 'uuid'

import { getWeeksForMonth, getAbbreviationWeek, todayDayWeek } from '../helpers'
import { Day } from '../Day'

import {
  WrapperWeek,
  DayWeek,
  Row,
} from './index.styled'


const UUID_ID = 3

export const Month = ({
  indexMonth,
  indexWeek,
  year,
  dayNumber,
  onClick,
  activeday,
  weekmode,
  ...props
}) => {
  const weeksMarkup = getWeeksForMonth(year, indexMonth)

  if (weekmode) {
    return (
      <div {...props}>
        <WeekSymbols indexMonth={indexMonth} year={year} dayNumber={dayNumber} />
        <Row>
          {
            weeksMarkup[indexWeek].map((dayWeek) => (
              <Day
                onClick={onClick}
                activeday={activeday}
                key={uuid(UUID_ID)}
                data={dayWeek}
              />))
          }
        </Row>
      </div>
    )
  }

  return (
    <div {...props}>
      <WeekSymbols indexMonth={indexMonth} year={year} dayNumber={dayNumber} />
      {
        weeksMarkup.map((week) => (
          <Row key={uuid(UUID_ID)}>
            {
              week.map((dayWeek) => (
                <Day
                  onClick={onClick}
                  activeday={activeday}
                  key={uuid(UUID_ID)}
                  data={dayWeek}
                />))
            }
          </Row>
        ))
      }
    </div>
  )
}


const WeekSymbols = ({
  currentDay,
  dayNumber,
  indexMonth,
  year,
  ...props
}) => {
  const today = todayDayWeek(indexMonth, year, dayNumber)

  return (
    <WrapperWeek {...props}>
      {
        getAbbreviationWeek().map((day, index) => (
          <DayWeek
            today={today === index}
            key={uuid(UUID_ID)}
            isToday={currentDay}
          >
            {day}
          </DayWeek>
        ))
      }
    </WrapperWeek>
  )
}

Month.propTypes = {
  currentDay: PropTypes.number,
  dayNumber: PropTypes.number,
  indexMonth: PropTypes.number,
  year: PropTypes.number,
  onClick: PropTypes.func,
  activeday: PropTypes.object,
}

WeekSymbols.propTypes = {
  currentDay: PropTypes.number,
  dayNumber: PropTypes.number,
  indexMonth: PropTypes.number,
  year: PropTypes.number,
}
