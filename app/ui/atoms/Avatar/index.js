import React from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
} from './index.styled'


const COLORS = ['#f1c40f', '#8e44ad', '#3498db', '#1abc9c']
const LENGTH_SYMBOLS = 2

export const Avatar = ({
  name,
  size,
  color,
  ...props
}) => {
  const getInitials = (value) => {
    const acronym = value.split(/\s/).reduce((response, word) => {
      let acr = response

      acr += word.slice(0, 1)

      return acr
    }, '')

    return acronym.length > LENGTH_SYMBOLS ? acronym.slice(0, 1) : acronym
  }

  const COLOR = COLORS[Math.floor(Math.random() * COLORS.length)]

  return (
    <Wrapper color={color || COLOR} size={size} {...props}>
      {getInitials(name)}
    </Wrapper>
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  color: PropTypes.string,
}

Avatar.defaultProps = {
  size: 'medium',
}
