import React from 'react'
import { storiesOf } from '@storybook/react'

import { ColorPicker, AlertProvider, useAlert } from 'ui'
import Theme from '../../theme/theme'


const TestComponent = () => {
  const alert = useAlert()

  return (
    <ColorPicker data={Theme.palette} onCopy={(props) => alert.success(`${props} Copy to clipboard!`)} />
  )
}

storiesOf('Molecules/Colors', module)
  .add('Palettes', () => (
    <AlertProvider>
      <TestComponent />
    </AlertProvider>
  ))
