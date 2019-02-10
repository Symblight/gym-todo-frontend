import React from 'react'
import { storiesOf } from '@storybook/react'

import { Link } from './index'


storiesOf('Atoms/Link', module)
  .add('Link', () => (
    <Link href="https://github.com/symblight">Link!</Link>
  ))

