import React from 'react'
import { storiesOf } from '@storybook/react'

import { Switch } from './index'


storiesOf('Atoms/Switch', module)
  .add('Default', () => (
    <Switch />
  ))
  .add('Disabled', () => (
    <Switch disabled />
  ))
