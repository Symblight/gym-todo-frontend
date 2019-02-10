import React from 'react'
import { storiesOf } from '@storybook/react'

import { CheckBox } from './index'


storiesOf('Atoms/Checkbox', module)
  .add('Default', () => (
    <CheckBox />
  ))
  .add('Disabled', () => (
    <CheckBox disabled />
  ))
