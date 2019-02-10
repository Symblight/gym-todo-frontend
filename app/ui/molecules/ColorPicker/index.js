import React from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'

import { Color, Label } from 'ui'

import {
  Wrapper,
  Row,
  RowPalette,
  Head,
} from './index.styled'


export const ColorPicker = ({
  data,
  onCopy,
  ...props
}) => (
  <Wrapper {...props}>
    {
      data ? Object.keys(data).map((key) => (
        <Row key={key}>
          <Head>
            <Label>{key}</Label>
          </Head>
          <RowPalette>
            {
              data[key].map((color, index) => (
                <Color key={uuidv4()} indexColor={index} color={color} onCopy={onCopy} />
              ))
            }
          </RowPalette>
        </Row>
      )) : []
    }
  </Wrapper>
)

ColorPicker.propTypes = {
  data: PropTypes.object,
  onCopy: PropTypes.func,
}
