import React from 'react'
import { storiesOf } from '@storybook/react'

import { Color } from './index'


storiesOf('Atoms/Color', module)
  .add('Default', () => (
    <Color />
  ))
