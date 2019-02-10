import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { MenuItem, Icon } from 'ui'


storiesOf('Atoms/MenuItem', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => (
    <MenuItem icon={<Icon icon='user' />} label="Schedule" />
  ))
  .add('Link', () => (
    <MenuItem to="/" icon={<Icon icon='user' />} label="Schedule" />
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
