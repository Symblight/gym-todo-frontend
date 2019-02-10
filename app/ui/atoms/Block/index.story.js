import React from 'react'
import { storiesOf } from '@storybook/react'

import { Block } from './index'


storiesOf('Atoms/Block', module)
  .add('Block', () => (
    <Block>Text</Block>
  ))
  .add('Reverse', () => (
    <Block reverse>fff</Block>
  ))
  .add('Opaque', () => (
    <Block opaque>Text</Block>
  ))
