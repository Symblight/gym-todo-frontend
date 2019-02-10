import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'ui'

import {
  Wrapper,
} from './index.styled'


export const CircularButton = ({
  onClick,
  disabled,
  ...props
}) => {
  const handleClick = (event) => {
    if (!disabled) {
      if (onClick) {
        onClick(event)
      }
    }
  }

  return (
    <Wrapper {...props} disabled={disabled} onClick={handleClick}>
      <Icon icon="plus" />
    </Wrapper>
  )
}

CircularButton.propTypes = {
  onClick: PropTypes.func,
  palette: PropTypes.string,
  type: PropTypes.string,
  height: PropTypes.number,
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
}


CircularButton.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40,
}
