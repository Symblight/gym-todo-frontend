import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button, useAlert, AlertProvider } from 'ui'


const TestComponent = () => {
  const alert = useAlert()

  return (
    <>
      <Button type="button" palette="success" onClick={() => alert.success('Oh look, an alert!')}>success</Button>
      <Button type="button" palette="danger" onClick={() => alert.error('Oh look, an alert!')}>error</Button>
      <Button type="button" palette="alert" onClick={() => alert.warning('Oh look, an alert!')}>warning</Button>
    </>
  )
}

storiesOf('Molecules/Alerts', module)
  .add('Default', () => (
    <AlertProvider>
      <TestComponent />
    </AlertProvider>
  ))

