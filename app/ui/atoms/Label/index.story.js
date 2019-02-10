import React from 'react'
import { storiesOf } from '@storybook/react'

import { Label } from './index'


storiesOf('Atoms/Label', module)
  .add('Default', () => (
    <Label>Class</Label>
  ))
  .add('Reverse', () => (
    <Label reverse>Class</Label>
  ))
  .add('Disabled', () => (
    <Label disabled transparent>Class</Label>
  ))
