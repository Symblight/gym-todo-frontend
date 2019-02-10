import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { copyToClipboard } from 'utils/copy'
import { Icon, Label } from 'ui'

import {
  Wrapper,
  Container,
  Nav,
} from './index.styled'


export const IconBlock = ({
  data,
  onCopy,
  ...props
}) => {
  const [mouse, setMouse] = useState(false)

  if (!data) return null

  const handleMouseEnter = () => {
    setMouse(true)
  }

  const handleMouseLeave = () => {
    setMouse(false)
  }

  const handleCopy = () => {
    copyToClipboard(data)

    if (onCopy) {
      onCopy(data)
    }
  }

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...props}>
      <Nav>{mouse && <Icon icon="clipboard" height={15} onClick={handleCopy} />}</Nav>
      <Container>
        <Icon icon={data} height={35} />
        <Label disabled height={28}>{data}</Label>
      </Container>
    </Wrapper>
  )
}

IconBlock.propTypes = {
  data: PropTypes.string,
  onCopy: PropTypes.func,
}
