import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledIcon,
  WrapperNavigation,
} from './index.styled'


export const Navigation = ({
  children,
  onChange,
  index,
  ...props
}) => {
  const handleClickArrowLeft = () => {
    onChange({ index: index - 1, action: 'left' })
  }

  const handleClickArrowRight = () => {
    onChange({ index: index + 1, action: 'right' })
  }


  return (
    <WrapperNavigation {...props}>
      <StyledIcon icon="arrow-left" onClick={handleClickArrowLeft} />
      {children}
      <StyledIcon icon="arrow-right" onClick={handleClickArrowRight} />
    </WrapperNavigation>
  )
}


Navigation.propTypes = {
  children: PropTypes.any,
  onChange: PropTypes.func,
  index: PropTypes.number,
}
