import React from 'react'
import { storiesOf } from '@storybook/react'

import { AppMenu, Icon } from 'ui'


const OPTIONS = [
  {
    id: 0,
    label: 'Schedule',
    icon: <Icon icon='calendar' />,
  },
  {
    id: 1,
    label: 'Workouts',
    icon: <Icon icon='dumbbell' />,
  },
  {
    id: 2,
    label: 'Excercise',
    icon: <Icon icon='energy' />,
  },
  {
    id: 3,
    label: 'Profile',
    icon: <Icon icon='user' />,
  },
]

storiesOf('Molecules/AppMenu', module)
  .add('Default', () => (
    <AppMenu options={OPTIONS} />
  ))
