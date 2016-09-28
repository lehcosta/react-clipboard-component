import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Clipboard from 'clipboard'

export default class ReactClipboard extends Component {

  constructor (props) {
    super(props)
    this.clipboard = null;
  }

  componentDidMount () {
    let {onSuccess, onError} = this.props

    this.clipboard = new Clipboard(ReactDOM.findDOMNode(this))

    if (onSuccess) {
      this.clipboard.on('success', (e) => { onSuccess(e) })
    }

    if (onError) {
      this.clipboard.on('error', (e) => { onError(e) })
    }
  }

  componentWillUnmount () {
    this.clipboard.destroy()
  }

  render () {
    const {children} = this.props
    return (
      <div data-clipboard-text={this.props['clipboard-text']}>
        {children}
      </div>
    )
  }
}

ReactClipboard.propTypes = {
  ['clipboard-text']: PropTypes.string.isRequired,
  'onError': PropTypes.func,
  'onSuccess': PropTypes.func
}
