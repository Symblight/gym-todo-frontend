import React, { useState } from 'react'
import PropTypes from 'prop-types'

import uuid from 'uuid'

import { MenuItem } from 'ui'

import {
  Wrapper,
  Head,
} from './index.styled'


export const AppMenu = ({
  options,
  head,
  onClick,
  index,
  ...props
}) => {
  const [activeIndex, setActive] = useState(0)

  const setPage = (value) => {
    if (onClick) {
      onClick(value)
    }
    else {
      setActive(value)
    }
  }

  const indexItem = index || activeIndex

  return (
    <Wrapper {...props}>
      <Head>{head}</Head>
      {
        options ? options.map((opt) => (
          <MenuItem
            key={uuid(1)}
            icon={opt.icon}
            label={opt.label}
            onClick={setPage}
            active={indexItem === opt.id}
            {...opt}
          />
        )) : null
      }
    </Wrapper>
  )
}

AppMenu.propTypes = {
  options: PropTypes.arrayOf(Object),
  onClick: PropTypes.func,
  head: PropTypes.string,
  index: PropTypes.number,
}
