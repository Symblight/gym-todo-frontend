/* eslint-disable react/jsx-closing-tag-location */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import uuid from 'uuid'

import {
  StyledInput,
  Wrapper,
  Label,
  StyledTextArea,
  Wrap,
  Divider,
} from './index.styled'


const SIZE_RANDOM = 7

export class Input extends PureComponent {
  static propTypes = {
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
    icon: PropTypes.any,
  }

  static defaultProps = {
    palette: 'primary',
    type: 'text',
    height: 40,
  }

  state = {
    valueInput: '',
    idInput: null,
    focus: false,
  }

  componentWillUpdate() {
    window.addEventListener('click', this.dropFocus, false)
  }


  componentWillUnmount() {
    window.removeEventListener('click', this.dropFocus, false)
  }


 handleFocus = () => {
   this.setState({
     focus: true,
   })
 }

 dropFocus = (event) => {
   if (this.node.contains(event.target)) {
     return
   }

   this.setState({
     focus: false,
   })
 }

  handleChange = (event) => {
    const { onChange } = this.props

    if (onChange) {
      onChange(event.target.value, event.target)
    }
    else {
    //  setValue(event.target.value)
      this.setState({
        valueInput: event.target.value,
      })
    }
  }

  render() {
    const {
      type,
      value,
      className,
      placeholder,
      label,
      id,
      name,
      maxLength,
      ref,
      inline,

      invalid,
      warning,
      success,

      transparent,
      disabled,
      reverse,
      height,
      icon,
      ...props
    } = this.props

    const {
      valueInput,
      idInput,
      focus,
    } = this.state

    // const generateName = () => idInput || setId(uuid(SIZE_RANDOM))

    //  generateName()

    if (type === 'textarea') {
      return (
        <Wrapper
          invalid={invalid}
          warning={warning}
          success={success}

          transparent={transparent}
          disabled={disabled}
          reverse={reverse}
          {...props}
        >
          <StyledTextArea
            name={name}
            placeholder={placeholder}
            className={className}
            id={id}
            onChange={this.handleChange}
            value={value || valueInput}
            maxlength={maxLength}
            ref={ref}
            height={height}
            transparent={transparent}
            disabled={disabled}
            reverse={reverse}
          />
        </Wrapper>
      )
    }
    return (
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
        {icon}
        <Wrap>
          {
          !placeholder ?
            <Label
              htmlFor={id || idInput}
              change={!!(value || valueInput)}
              transparent={transparent}
              disabled={disabled}
              reverse={reverse}
              height={height}
              focus={focus}
            >
              {label}
            </Label>
          : null
        }
          <StyledInput
            type={type}
            name={name}
            placeholder={placeholder}
            className={className}
            id={id || idInput}
            onChange={this.handleChange}
            value={value || valueInput}
            maxlength={maxLength}
            ref={ref}
            height={height}
            inline={inline}
            onFocus={this.handleFocus}

            transparent={transparent}
            disabled={disabled}
            reverse={reverse}
          />
        </Wrap>
        {inline && <Divider focus={focus} inline={inline} />}
      </Wrapper>
    )
  }
}
