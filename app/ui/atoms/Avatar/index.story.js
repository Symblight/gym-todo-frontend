import React from 'react'
import { storiesOf } from '@storybook/react'

import { Avatar } from './index'


storiesOf('Atoms/Avatar', module)
  .add('Default', () => (
    <>
      <Avatar size="small" name='Alexey Tkachenko' />
      <Avatar size="medium" name='Alexey Tkachenko' />
      <Avatar size="large" name='Alexey Tkachenko' />
    </>
  ))
