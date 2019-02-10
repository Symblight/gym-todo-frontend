/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const SIZE_FONT = 16

const fontSize = ({ width, height }) => {
  const size = width || height

  return size ? `${size / SIZE_FONT}rem` : '1.25em'
}

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;
  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
  }
`

export const Icon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`)

  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

Icon.propTypes = {
  icon: PropTypes.string,
}
