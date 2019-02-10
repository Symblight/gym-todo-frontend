import React from 'react'
import { storiesOf } from '@storybook/react'

import { CircularButton } from './index'


storiesOf('Atoms/CircularButton', module)
  .add('Default', () => (
    <CircularButton />
  ))
  .add('Reverse', () => (
    <CircularButton reverse />
  ))
  .add('Transparent', () => (
    <CircularButton transparent />
  ))
  .add('Disabled', () => (
    <CircularButton disabled />
  ))
