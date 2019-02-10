import React, { PureComponent } from 'react'
import { copyToClipboard } from 'utils/copy'


// export const withCopyToClipboard = ({ Component }) => ({ ...props }) => (
//   <Component {...props} onCopy={copyToClipboard} />
// )

export const withCopyToClipboard = (Component) => {
  class CopyComponent extends PureComponent {
    copyTo = (value) => {
      copyToClipboard(value)
    }

    render() {
      const { ...props } = this.props

      return <Component {...props} onCopy={this.copyTo} />
    }
  }
  return CopyComponent
}
