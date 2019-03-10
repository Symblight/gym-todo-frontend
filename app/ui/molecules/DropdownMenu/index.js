import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'ui'

import {
  Wrapper,
} from './index.styled'


export const DropdownMenu = ({
  options,
  label,
  ...props
}) => {
  const [toggle, setToggle] = useState(false)
  const [currentIndex, setIndex] = useState(0)

  return (
    <Wrapper>
      <div>
        <span>{label || ''}</span>
        <Icon icon="chevron-down" />
      </div>
      <div>
        {
          options ? options.map((option) => (
            <div>{option.value}</div>
          )) : null
        }
      </div>
    </Wrapper>
  )
}

DropdownMenu.propTypes = {

}
