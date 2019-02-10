import React from 'react'
import { configure, addDecorator } from '@storybook/react';

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import globals from '../app/ui/theme/globals'
import Theme from '../app/ui/theme/theme'


const GlobalStyle = createGlobalStyle`${globals}`

const CenterDecorator = (storyFn) => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyle />
      { storyFn() }
    </>
  </ThemeProvider>
)

addDecorator(CenterDecorator)

// automatically import all files ending in *.stories.js
const req = require.context('../app/ui/', true, /\.story.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
