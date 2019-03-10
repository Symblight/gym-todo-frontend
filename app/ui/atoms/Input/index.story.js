import React from 'react'
import { storiesOf } from '@storybook/react'

import { Input, Icon } from 'ui'


storiesOf('Atoms/Text input', module)
  .add('Default', () => (
    <div style={{ width: 400 }}><Input label="username" /></div>
  ))

  .add('Icon', () => (
    <>
      <div style={{ width: 400, marginBottom: 24 }}><Input inline placeholder="search" icon={<Icon icon='search' />} /></div>
      <div style={{ width: 400, marginBottom: 24 }}><Input reverse placeholder="search" icon={<Icon icon='search' />} /></div>
    </>
  ))
  .add('Disabled', () => (
    <div style={{ width: 400 }}><Input disabled label="name" /></div>
  ))
  .add('Reverse', () => (
    <div style={{ width: 400 }}><Input reverse label="first name" /></div>
  ))
  .add('Transparent', () => (
    <div style={{ width: 400 }}><Input transparent label="last name" /></div>
  ))
  .add('Invalid', () => (
    <div style={{ width: 400 }}><Input invalid label="username" /></div>
  ))
  .add('Inline', () => (
    <div style={{ width: 400 }}><Input inline label="name" /></div>
  ))
  .add('Password', () => (
    <div style={{ width: 400 }}><Input type="password" inline label="password" /></div>
  ))

storiesOf('Atoms/TextArea input', module)
  .add('Default', () => (
    <div style={{ width: 400 }}><Input type="textarea" placeholder="email" /></div>
  ))
  .add('Disabled', () => (
    <div style={{ width: 400 }}><Input type="textarea" disabled placeholder="name" /></div>
  ))
  .add('Reverse', () => (
    <div style={{ width: 400 }}><Input type="textarea" reverse placeholder="first name" /></div>
  ))
  .add('Transparent', () => (
    <div style={{ width: 400 }}><Input type="textarea" transparent placeholder="last name" /></div>
  ))
  .add('Invalid', () => (
    <div style={{ width: 400 }}><Input type="textarea" invalid placeholder="username" /></div>
  ))
