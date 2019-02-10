import React from 'react'
import { storiesOf } from '@storybook/react'

import { MenuItem, Icon } from 'ui'


storiesOf('Atoms/MenuItem', module)
  .add('Default', () => (
    <MenuItem icon={<Icon icon='user' />} label="Schedule" />
  ))
  .add('Disabled', () => (
    <MenuItem disabled icon={<Icon icon='user' />} label="Schedule" />
  ))
  .add('Reverse', () => (
    <MenuItem reverse icon={<Icon icon='user' />} label="Schedule" />
  ))
  .add('Transparent', () => (
    <MenuItem transparent icon={<Icon icon='user' />} label="Schedule" />
  ))
