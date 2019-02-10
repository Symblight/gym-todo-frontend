import React from 'react'
import { storiesOf } from '@storybook/react'

import { DatePicker } from './index'


storiesOf('Molecules/DatePicker', module)
  .add('Default', () => (
    <DatePicker date={new Date()} />
  ))
  .add('Week mode', () => (
    <DatePicker weekmode date={new Date()} />
  ))
