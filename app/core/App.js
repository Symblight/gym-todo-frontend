import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'

import globals from 'ui/theme/globals'
import { Icon, Input, Button } from 'ui'
import { Users } from './Graph'


const GlobalStyle = createGlobalStyle`${globals}`

export default class App extends Component {
  state = {
    value: '',
  }

  onChange = (value, event) => {
    console.log(value, event)

    this.setState({
      value,
    })
  }

  render() {
    return (
      <div>
        React
        <GlobalStyle />
        <Icon icon="heart" />
        <Button>fdf</Button>
        <Input value={this.state.value} onChange={this.onChange} />
        <Users />
      </div>
    )
  }
}
