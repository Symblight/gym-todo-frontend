import React from 'react'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import NavLink from 'react-router-dom/NavLink'


const styles = css`
  font-family: ${font('primary')};
  text-decoration: none;
  font-weight: 500;
  color: ${palette({ grayscale: 0 }, 1)};
  &:hover {
    text-decoration: underline;
  }
`

export const StyledNavLink = styled(({
  theme, reverse, ...props
}) => <NavLink {...props} />)`${styles}`

export const Anchor = styled.a`${styles}`
