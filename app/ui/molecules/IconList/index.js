import React from 'react'
import PropTypes from 'prop-types'

import uuid from 'uuid'

import { IconBlock } from 'ui'

import {
  Wrapper,
} from './index.styled'


export const IconList = ({
  data,
  onCopy,
  ...props
}) => (
  <Wrapper {...props}>
    {
        data ? data.map((icon) => (
          <IconBlock key={uuid(1)} data={icon} onCopy={onCopy} />
        )) : null
      }
  </Wrapper>
)

IconList.propTypes = {
  data: PropTypes.arrayOf(Object),
  onCopy: PropTypes.func,
}
