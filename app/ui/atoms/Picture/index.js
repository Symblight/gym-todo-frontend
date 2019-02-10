import React from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
} from './index.styled'


export const Picture = ({
  src,
  ...props
}) => (
  <Wrapper src={src} {...props} alt="*" />
)

Picture.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
}
