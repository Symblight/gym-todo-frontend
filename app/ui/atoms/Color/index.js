import React from 'react'
import PropTypes from 'prop-types'

import { copyToClipboard } from 'utils/copy'
import {
  Wrapper,
  Label,
  ColorBlock,
  LabelIndex,
} from './index.styled'


export const Color = ({
  indexColor,
  color,
  onCopy,
  ...props
}) => {
  const handleCopy = () => {
    copyToClipboard(color)

    if (onCopy) {
      onCopy(color)
    }
  }

  return (
    <Wrapper {...props} onClick={handleCopy}>
      <LabelIndex>{indexColor}</LabelIndex>
      <ColorBlock color={color} />
      <Label>{color}</Label>
    </Wrapper>
  )
}

Color.propTypes = {
  indexColor: PropTypes.number,
  color: PropTypes.string,
  onCopy: PropTypes.func,
}
