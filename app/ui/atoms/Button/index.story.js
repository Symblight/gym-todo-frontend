import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from './index'


storiesOf('Atoms/Buttons', module)
  .add('Default', () => (
    <Button>Create Widget</Button>
  ))
  .add('Error', () => (
    <Button palette="danger">Create Widget</Button>
  ))
  .add('Reverse', () => (
    <Button reverse>Create Widget</Button>
  ))
  .add('Transparent', () => (
    <Button transparent>Create Widget</Button>
  ))
  .add('Disabled', () => (
    <Button disabled>Create Widget</Button>
  ))
  .add('link', () => (
    <Button href="https://github.com/symblight">Create Widget</Button>
  ))
