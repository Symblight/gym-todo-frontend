import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'react-router-dom/Link'
import { palette } from 'styled-theme'
import { ButtonMixin, BorderRadius } from 'ui/theme/mixins'


const INDEX_DISABLED = 2

const backgroundColor = ({ transparent, disabled }) => transparent ? 'transparent' : palette(disabled ? INDEX_DISABLED : 1)

const foregroundColor = ({ transparent, disabled }) => transparent ? palette(disabled ? INDEX_DISABLED : 1) : palette('grayscale', 0, true)

const hoverBackgroundColor = ({ disabled, transparent }) => !disabled && !transparent && palette(0)
const hoverForegroundColor = ({ disabled, transparent }) => !disabled && transparent && palette(0)


const styles = css`
  ${BorderRadius}
  border: 0.0625em solid transparent;
  background-color: ${backgroundColor};
  color: ${foregroundColor};

  ${ButtonMixin}

  &:hover {
        background-color: ${hoverBackgroundColor};
        color: ${hoverForegroundColor};
  }
  &:focus {
    outline: none;
  }  
`

export const Anchor = styled.a`${styles}`
export const StyledButton = styled.button`${styles}`
export const StyledLink = styled((props) => <Link {...props} />)`${styles}`
