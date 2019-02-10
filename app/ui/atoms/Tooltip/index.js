import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
  Arrow,
} from './index.styled'


export const TooltipComp = ({
  active,
  className,
  children,
  ...props
}) => {
  const [toggle, setToggle] = useState(false)

  return (
    <Wrapper active={active} className={className} {...props}>
      {children}
    </Wrapper>
  )
}

TooltipComp.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
}
