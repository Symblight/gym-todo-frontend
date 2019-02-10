import React from 'react'
import { storiesOf } from '@storybook/react'

import { AlertProvider, useAlert } from 'ui'
import { IconList } from './index'


const ICONS = [
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'calendar-second',
  'calendar',
  'chevron-down',
  'close',
  'dumbbell',
  'edit',
  'energy',
  'heart',
  'more-horizontal',
  'more-vertical',
  'plus',
  'search',
  'trash',
  'user',
  'clipboard',
]


const TestComponent = () => {
  const alert = useAlert()

  return (
    <IconList data={ICONS} onCopy={(props) => alert.success(`${props} Copy to clipboard!`)} />
  )
}

storiesOf('Molecules/Icons', module)
  .add('Default', () => (
    <AlertProvider>
      <TestComponent />
    </AlertProvider>
  ))
