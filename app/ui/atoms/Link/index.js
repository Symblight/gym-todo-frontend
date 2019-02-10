import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledNavLink,
  Anchor,
} from './index.styled'


export const Link = ({ ...props }) => {
  const { to } = props

  if (to) {
    return <StyledNavLink {...props} />
  }
  return <Anchor {...props} />
}

Link.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  to: PropTypes.string,
}

Link.defaultProps = {
  palette: 'primary',
}
