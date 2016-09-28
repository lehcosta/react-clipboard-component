# react-clipboard-component

Copy to clipboard React component using [clipboard.js](https://npm.im/clipboard)

## Installation
```sh
npm install --save react-clipboard-component
```

## Usage
```js
import React from, {Component} 'react'
import Clipboard from 'react-clipboard-component'

export default class App extends Component {
  render () {
    return (
      <Clipboard clipboard-text="Lorem ipsum dolor sit amet.">
        <button>copy</button>
      </Clipboard>
    )
  }
}
```

## Options

#### `text`: React.PropTypes.string.isRequired

Text to be copied to clipboard

#### `onSuccess`: React.PropTypes.func

#### `onError`: React.PropTypes.func


## License

MIT
