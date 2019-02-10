import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'ui'

import {
  Wrapper,
  MassageWrap,
} from './index.styled'


export const Alert = ({
  onClose,
  id,
  message,

  ...props
}) => (
  <Wrapper id={id} {...props}>
    <MassageWrap>{message}</MassageWrap>
    <Icon icon="close" onClick={onClose} />
  </Wrapper>
)

Alert.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
  id: PropTypes.string,
  palette: PropTypes.oneOf(['success', 'alert', 'danger']),
}

Alert.defaultProps = {
  id: 'none',
  message: 'message',
  palette: 'success',
}
