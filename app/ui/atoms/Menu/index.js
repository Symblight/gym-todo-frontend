import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import uuid from 'uuid'
import { Icon } from 'ui'

import {
  Wrapper,
  WrapperOptions,
  OptionsItem,
} from './index.styled'


const UUID_ID = 3
const POSITION = {
  horizontal: 'more-horizontal',
  vertical: 'more-vertical',
}

export class Menu extends PureComponent {
  static propTypes = {
    opened: PropTypes.bool,
    position: PropTypes.string,
    options: PropTypes.arrayOf(Object),
    onClick: PropTypes.func,
    palette: PropTypes.string,
    transparent: PropTypes.bool,
  }

  static defaultProps = {
    position: 'horizontal',
    palette: 'white',
    options: [],
  }

  state = {
    toggle: false,
  }

  componentWillUpdate() {
    window.addEventListener('click', this.onWindowClick, false)
  }


  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick, false)
  }


  onToggle = () => {
    const { toggle } = this.state

    this.setState({
      toggle: !toggle,
    })
  }

  onWindowClick = (event) => {
    if (this.node.contains(event.target)) {
      return
    }

    this.setState({
      toggle: false,
    })
  }

  onClick = (option, event) => {
    const { onClick } = this.props

    if (!option.disabled) {
      this.onToggle()
      if (onClick) {
        onClick(option, event)
      }
    }
  }

  renderOptions() {
    const { options, palette } = this.props

    return (
      <WrapperOptions>
        {options.map((option) => (
          <OptionsItem
            palette={palette}
            disabled={option.disabled}
            key={uuid(UUID_ID)}
            onClick={(event) => this.onClick(option, event)}
          >
            {option.title}
          </OptionsItem>
          ))
         }
      </WrapperOptions>
    )
  }

  render() {
    const {
      position,
      ...props
    } = this.props
    const { toggle } = this.state

    return (
      <Wrapper
        ref={(node) => {
        this.node = node
      }}
        {...props}
      >
        <Icon height={25} icon={POSITION[position]} onClick={this.onToggle} />
        {toggle ? this.renderOptions() : null}
      </Wrapper>
    )
  }
}
