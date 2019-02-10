import React from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
} from './index.styled'


export const Day = ({
  data,
  onClick,
  className,
  activeday,
  ...props
}) => {
  const handleClick = (event) => {
    if (onClick) {
      onClick({ day: data.day, articles: data.articles }, event)
    }
  }

  const isActive = activeday && activeday.day.toDateString() === data.day.toDateString()

  return (
    <Wrapper
      className={className}
      active={isActive}
      onClick={handleClick}
      today={data.isToday}
      currentMonth={data.currentMonth}
      {...props}
    >
      {data.day.getDate()}
    </Wrapper>
  )
}

Day.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  activeday: PropTypes.object,
}
