import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'


const INDEX_DISABLED = 2

const backgroundColor = ({ transparent, disabled }) => transparent ? 'transparent' : palette(disabled ? INDEX_DISABLED : 1)

const foregroundColor = ({ transparent, disabled }) => transparent ? palette(disabled ? INDEX_DISABLED : 1) : palette('grayscale', 0, true)

const hoverBackgroundColor = ({ disabled, transparent }) => !disabled && !transparent && palette(0)
const hoverForegroundColor = ({ disabled, transparent }) => !disabled && transparent && palette(0)

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.0625em solid transparent;
  border-radius: 50%;
  background-color: ${backgroundColor};
  color: ${foregroundColor};

  width: 50px;
  height: 50px;

  cursor: pointer;

  svg {
    display: block;
    margin: auto;
  }

  &:hover {
        background-color: ${hoverBackgroundColor};
        color: ${hoverForegroundColor};
  }
  &:focus {
    outline: none;
  }  
`
