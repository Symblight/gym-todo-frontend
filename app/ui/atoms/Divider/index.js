import React from 'react'
import PropTypes from 'prop-types'

import {
  WrapperHorizontal,
  WrapperVertical,
} from './index.styled'


export const Divider = ({
  position,
  ...props
}) => {
  if (position === 'vertical') {
    return <WrapperVertical {...props} />
  }
  return <WrapperHorizontal {...props} />
}

Divider.propTypes = {
  position: PropTypes.oneOf(['vertical', 'horizontal']),
}

Divider.defaultProps = {
  position: 'horizontal',
}
