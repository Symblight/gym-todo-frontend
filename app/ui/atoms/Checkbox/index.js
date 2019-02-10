import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
  CheckMark,
  StyledInput,
} from './index.styled'


export const CheckBox = ({
  value,
  onChange,
  id,
  ref,
  height,
  disabled,
  className,
  name,
  ariaLabel,
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

  const checkded = onChange ? value : toggle

  return (
    <Wrapper
      onClick={handleToggle}
      toggle={checkded}
      className={className}
      ref={ref}
      height={height}
      disabled={disabled}
      {...props}
    >
      {
          checkded
          && <CheckMark />
       }
      <StyledInput id={id} name={name} type="checkbox" aria-label={ariaLabel} />
    </Wrapper>
  )
}

CheckBox.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.string,
  ref: PropTypes.string,
  ariaLabel: PropTypes.string,
  height: PropTypes.number,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  palette: PropTypes.string,
}

CheckBox.defaultProps = {
  palette: 'primary',
  height: 40,
}

