import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledLabel,
} from './index.styled'


export const Label = ({
  disabled,
  reverse,
  className,
  ref,
  id,
  height,
  children,
  ...props
}) => (
  <StyledLabel
    className={className}
    disabled={disabled}
    reverse={reverse}
    height={height}
    ref={ref}
    id={id}
    {...props}
  >
    {children}
  </StyledLabel>
)

Label.propTypes = {
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  children: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  ref: PropTypes.string,
}

Label.defaultProps = {
  palette: 'primary',
  height: 40,
}

