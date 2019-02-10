import React from 'react'
import PropTypes from 'prop-types'

import uuid from 'uuid'

import { MenuItem, Icon } from 'ui'

import {
  Wrapper,
  Head,
} from './index.styled'


export const AppMenu = ({
  options,
  head,
  onClick,
  ...props
}) => {
  const setPage = (index) => {
    if (onClick) {
      onClick(index)
    }
  }

  return (
    <Wrapper {...props}>
      <Head>{head}</Head>
      {
        options ? options.map((opt) => (
          <MenuItem
            key={uuid(1)}
            icon={opt.icon}
            label={opt.label}
            onClick={setPage(opt.id)}
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
}
