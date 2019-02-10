import React from 'react'
import randomstring from 'randomstring'


const SIZE_RANDOM = 7

// eslint-disable-next-line react/prop-types
export const withId = ({ Component }) => ({ id, ...props }) => (
  <Component {...props} id={id || randomstring.generate(SIZE_RANDOM)} />
)
