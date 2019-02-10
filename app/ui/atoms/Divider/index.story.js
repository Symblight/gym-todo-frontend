import React from 'react'
import { storiesOf } from '@storybook/react'

import { Divider } from './index'


storiesOf('Atoms/Divider', module)
  .add('Default', () => (
    <Divider position="horizontal" />
  ))
  .add('Vertical', () => (
    <div style={{ height: 400 }}><Divider position="vertical" /></div>
  ))
