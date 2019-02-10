import React from 'react'
import PropTypes from 'prop-types'

import {
  Anchor,
  StyledButton,
  StyledLink,
} from './index.styled'


export const Button = ({ type, ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />
  } if (props.href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40,
}
