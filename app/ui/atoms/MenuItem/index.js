import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
} from './index.styled'


export const MenuItem = ({
  active,
  className,
  onChange,
  label,
  icon,
  palette,
  disabled,
  ...props
}) => {
  const [toggle, setActive] = useState(false)

  const handleToggle = (event) => {
    if (!disabled) {
      if (onChange) {
        onChange(!active, event.target)
      }
      else {
        setActive(!toggle)
      }
    }
  }

  return (
    <Wrapper
      className={className}
      onClick={handleToggle}
      palette={palette}
      active={onChange ? active : toggle}
      disabled={disabled}
      {...props}
    >
      {icon}
      {label}
    </Wrapper>
  )
}

MenuItem.propTypes = {
  active: PropTypes.bool,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
}

MenuItem.defaultProps = {
  palette: 'grayscale',
  height: 40,
}
