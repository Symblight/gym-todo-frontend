import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Icon } from './index'


storiesOf('Atoms/Icons', module)
  .add('Icons list', () => (
    <Fragment>
      <Icon icon='calendar' />
      <Icon icon='arrow-down' />
      <Icon icon='arrow-up' />
      <Icon icon='arrow-left' />
      <Icon icon='arrow-down' />
      <Icon icon='close' />
      <Icon icon='dumbbell' />
      <Icon icon='edit' />
      <Icon icon='energy' />
      <Icon icon='heart' />
      <Icon icon='more-horizontal' />
      <Icon icon='more-vertical' />
      <Icon icon='plus' />
      <Icon icon='trash' />
      <Icon icon='user' />
      <Icon icon='search' />
      <Icon icon='calendar-second' />
      <Icon icon='chevron-down' />
    </Fragment>
  ))
