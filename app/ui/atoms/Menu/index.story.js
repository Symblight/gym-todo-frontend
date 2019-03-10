import React from 'react'
import { storiesOf } from '@storybook/react'

import { Menu } from 'ui'


const OPTIONS = [
  {
    id: 0,
    title: 'text1',
  },
  {
    id: 1,
    title: 'text2',
  },
  {
    id: 2,
    title: 'text3',
  },
]


storiesOf('Atoms/Menu', module)
  .add('Default', () => (
    <Menu options={OPTIONS} />
  ))
  .add('Vertical', () => (
    <Menu position="vertical" options={OPTIONS} />
  ))
