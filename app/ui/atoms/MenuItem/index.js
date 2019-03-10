import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  StyledLink,
  ButtonItem,
  Content,
  ItemText,
} from './index.styled'


export const MenuItem = ({
  active,
  className,
  onClick,
  label,
  icon,
  palette,
  disabled,
  to,
  id,
  ...props
}) => {
  const handleToggle = (event) => {
    if (!disabled) {
      if (onClick) {
        onClick(id, event.target)
      }
    }
  }

  if (to) {
    return (
      <StyledLink
        className={className}
        onClick={handleToggle}
        palette={palette}
        active={active}
        disabled={disabled}
        to={to}
        {...props}
      >
        <Content>
          {icon}
          <ItemText active={active}>{label}</ItemText>
        </Content>
      </StyledLink>
    )
  }

  return (
    <ButtonItem
      className={className}
      onClick={handleToggle}
      palette={palette}
      active={active}
      disabled={disabled}
      {...props}
    >
      <Content>
        {icon}
        <ItemText>{label}</ItemText>
      </Content>
    </ButtonItem>
  )
}

MenuItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  to: PropTypes.string,
}

MenuItem.defaultProps = {
  palette: 'grayscale',
  height: 40,
}
