import React from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
} from './index.styled'


export const Block = ({
  children,
  ...props
}) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
)

Block.propTypes = {
  children: PropTypes.any,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

Block.defaultProps = {
  palette: 'primary',
}

