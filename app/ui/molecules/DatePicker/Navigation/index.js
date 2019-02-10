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
  weekmode,
  ...props
}) => {
  const handleClickArrowLeft = () => {
    onChange({ index: !weekmode ? index + 1 : index - 1, action: 'left' })
  }

  const handleClickArrowRight = () => {
    onChange({ index: !weekmode ? index - 1 : index + 1, action: 'right' })
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
  weekmode: PropTypes.bool,
}
