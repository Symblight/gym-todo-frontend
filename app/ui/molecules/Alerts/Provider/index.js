import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import uuid from 'uuid'

import { Alert } from 'ui'
import DefaultContext from '../Context'

import {
  Wrapper,
} from './index.styled'


const Provider = ({
  children,
  timeout,
  context: Context,
}) => {
  const [alerts, setAlerts] = useState([])
  const timersId = useRef([])

  useEffect(() => {
    () => {
      timersId.current.forEach(clearTimeout)
    }
  }, [])

  const remove = (alert) => {
    setAlerts((prevState) => {
      const newAlerts = prevState.filter((a) => a.id !== alert.id)

      return newAlerts
    })
  }

  const show = (message = '', options = {}) => {
    const alert = {
      id: uuid(1),
      message,
      type: options.type,
    }


    const timerId = setTimeout(() => {
      remove(alert)

      timersId.current.splice(timersId.current.indexOf(timerId), 1)
    }, timeout)

    timersId.current.push(timerId)

    alert.onClose = () => remove(alert)

    setAlerts((oldAlerts) => oldAlerts.concat(alert))
  }

  const success = (message = '') => show(message, { type: 'success' })

  const error = (message = '') => show(message, { type: 'danger' })

  const warning = (message = '') => show(message, { type: 'alert' })

  const alertContext = {
    alerts,
    show,
    remove,
    success,
    error,
    warning,
  }

  return (
    <Context.Provider value={alertContext}>
      <Wrapper>
        {
            alerts ? alerts.map((alert) => (
              <Alert
                key={alert.id}
                message={alert.message}
                palette={alert.type}
                {...alert}
              />
            )) : null
          }
      </Wrapper>
      {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.any,
  timeout: PropTypes.number,
  context: PropTypes.shape({
    Provider: PropTypes.object,
    Consumer: PropTypes.object,
  }),
}

Provider.defaultProps = {
  context: DefaultContext,
  timeout: 2200,
}

export default Provider
