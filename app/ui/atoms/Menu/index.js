import React, { useState, useEffect, useRef } from 'react'
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

const useOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event)
      }

      window.addEventListener('click', listener, false)
      return () => {
        window.removeEventListener('click', listener, false)
      }
    },

    [ref, handler],
  )
}

export const Menu = ({
  onClick,
  position,
  palette,
  options,
  ...props
}) => {
  const [toggle, setToggle] = useState(false)

  const menuRef = useRef()

  const onToggle = () => {
    setToggle(!toggle)
  }

  useOnClickOutside(menuRef, () => setToggle(false))

  const handleClick = (option, event) => {
    if (!option.disabled) {
      onToggle()
      if (onClick) {
        onClick(option, event)
      }
    }
  }

  return (
    <Wrapper
      ref={menuRef}
      {...props}
    >
      <Icon height={25} icon={POSITION[position]} onClick={onToggle} />
      {toggle ?
        <WrapperOptions>
          {options ? options.map((option) => (
            <OptionsItem
              palette={palette}
              disabled={option.disabled}
              key={uuid(UUID_ID)}
              onClick={(event) => handleClick(option, event)}
            >
              {option.title}
            </OptionsItem>
            )) : null
          }
        </WrapperOptions>
          : null}
    </Wrapper>
  )
}

Menu.propTypes = {
  opened: PropTypes.bool,
  position: PropTypes.string,
  options: PropTypes.arrayOf(Object),
  onClick: PropTypes.func,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
}

Menu.defaultProps = {
  position: 'horizontal',
  palette: 'white',
  options: [],
}
