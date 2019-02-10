import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Icon, Button, Input, Label, Switch, CheckBox, Link, Block, MenuItem, ColorPicker, DatePicker, CircularButton, Menu } from 'ui'
import globals from '../app/ui/theme/globals'
import Theme from '../app/ui/theme/theme'

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ))

const GlobalStyle = createGlobalStyle`${globals}`

const OPTIONS = [
  {
    id: 0,
    title: 'text1',
  },
  {
    id: 1,
    title: 'text2',
    disabled: true,
  },
  {
    id: 2,
    title: 'text3',
  },
]

const CenterDecorator = (storyFn) => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyle />
      { storyFn() }
    </>
  </ThemeProvider>
)

addDecorator(CenterDecorator)

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
    </Fragment>
  ))

storiesOf('Atoms/Buttons', module)
  .add('Default', () => (
    <Button>Create Widget</Button>
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

storiesOf('Atoms/CircularButton', module)
  .add('Default', () => (
    <CircularButton />
  ))
  .add('Reverse', () => (
    <CircularButton reverse />
  ))
  .add('Transparent', () => (
    <CircularButton transparent />
  ))
  .add('Disabled', () => (
    <CircularButton disabled />
  ))

storiesOf('Atoms/Menu', module)
  .add('Default', () => (
    <Menu options={OPTIONS} />
  ))
  .add('Vertical', () => (
    <Menu position="vertical" options={OPTIONS} />
  ))

storiesOf('Atoms/Text input', module)
  .add('Default', () => (
    <div style={{ width: 400 }}><Input label="username" /></div>
  ))

  .add('Icon', () => (
    <>
      <div style={{ width: 400, marginBottom: 24 }}><Input placeholder="search" icon={<Icon icon='search' />} /></div>
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

storiesOf('Atoms/Label', module)
  .add('Default', () => (
    <Label>Class</Label>
  ))
  .add('Reverse', () => (
    <Label reverse>Class</Label>
  ))
  .add('Disabled', () => (
    <Label disabled transparent>Class</Label>
  ))

storiesOf('Atoms/Switch', module)
  .add('Default', () => (
    <Switch />
  ))
  .add('Disabled', () => (
    <Switch disabled />
  ))

storiesOf('Atoms/Checkbox', module)
  .add('Default', () => (
    <CheckBox />
  ))
  .add('Disabled', () => (
    <CheckBox disabled />
  ))

storiesOf('Atoms/Link', module)
  .add('Link', () => (
    <Link href="https://github.com/symblight">Link!</Link>
  ))

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

storiesOf('Atoms/Colors', module)
  .add('Palettes', () => (
    <ColorPicker data={Theme.palette} />
  ))

storiesOf('Atoms/DatePicker', module)
  .add('Default', () => (
    <DatePicker date={new Date()} />
  ))
  .add('Week mode', () => (
    <DatePicker weekmode date={new Date()} />
  ))

