import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HashRouter as Router } from 'react-router-dom'

import theme from 'ui/theme/theme'
import App from './App'


const rootElement = document.getElementById('root')
const API = window.config.apiGraphURL

const client = new ApolloClient({
  uri: API,
  cache: new InMemoryCache(),
})

const render = (Component) => ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </Router>
  </ApolloProvider>,
  rootElement,
)

render(App)
