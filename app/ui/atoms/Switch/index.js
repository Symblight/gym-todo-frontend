import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
  Container,
  Thumb,
  StyledInput,
} from './index.styled'


export const Switch = ({
  onChange,
  value,
  id,
  name,
  className,
  disabled,
  reverse,
  height,
  ariaLabel,
  ref,
  ...props
}) => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    if (!disabled) {
      if (onChange) {
        onChange(!value)
      }
      else {
        setToggle(!toggle)
      }
    }
  }

  return (
    <Wrapper
      onClick={handleToggle}
      className={className}
      disabled={disabled}
      height={height}
      ref={ref}
      {...props}
    >
      <Container reverse={reverse} toggle={onChange ? value : toggle} />
      <Thumb reverse={reverse} toggle={onChange ? value : toggle} />
      <StyledInput id={id} name={name} type="checkbox" aria-label={ariaLabel} />
    </Wrapper>
  )
}

Switch.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.bool,
  palette: PropTypes.string,
  ariaLabel: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  ref: PropTypes.string,
  onChange: PropTypes.func,
}

Switch.defaultProps = {
  palette: 'primary',
  height: 40,
}
