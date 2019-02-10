import React from 'react'
import PropTypes from 'prop-types'


import {
  StyledInput,
  Wrapper,
  Divider,
} from '../index.styled'


export const InputTime = ({
  type,
  value,
  className,
  placeholder,
  id,
  name,
  ref,
  inline,
  focus,

  invalid,
  warning,
  success,

  transparent,
  disabled,
  reverse,
  height,
  handleChange,
  handleFocus,
  ...props
}) => (
  <Wrapper
    invalid={invalid}
    warning={warning}
    success={success}
    height={height}
    inline={inline}
    ref={(node) => {
          this.node = node
        }}

    transparent={transparent}
    disabled={disabled}
    reverse={reverse}
    {...props}
  >
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
      id={id}
      onChange={handleChange}
      value={value}
      ref={ref}
      height={height}
      inline={inline}
      onFocus={handleFocus}

      transparent={transparent}
      disabled={disabled}
      reverse={reverse}
    />
    {inline && <Divider focus={focus} inline={inline} />}
  </Wrapper>
)

InputTime.propTypes = {
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  maxLength: PropTypes.string,
  ref: PropTypes.string,
  onChange: PropTypes.func,
  invalid: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  inline: PropTypes.bool,
}

export default InputTime
