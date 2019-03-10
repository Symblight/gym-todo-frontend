import React from 'react'
import { storiesOf } from '@storybook/react'

import { DropdownMenu } from './index'


storiesOf('Atoms/DropdownMenu', module)
  .add('Default', () => (
    <DropdownMenu options={[]} />
  ))
