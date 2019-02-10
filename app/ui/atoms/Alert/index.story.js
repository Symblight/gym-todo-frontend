import React from 'react'
import { storiesOf } from '@storybook/react'

import { Alert } from './index'


storiesOf('Atoms/Alert', module)
  .add('Default', () => (
    <Alert message="Copied to clipboard!" />
  ))
  .add('Error', () => (
    <Alert palette='danger' message="Copied to clipboard! Copied to clipboard! Copied to clipboard! Copied to clipboard!" />
  ))
  .add('Warning', () => (
    <Alert palette='alert' message="Copied to clipboard!" />
  ))

