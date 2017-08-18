# attribute-string [![Build Status](https://travis-ci.org/tobihrbr/attribute-string.svg?branch=master)](https://travis-ci.org/tobihrbr/attribute-string)

> Generate html attribute strings

## Install

```
$ npm install --save attribute-string
```

## Usage

```js
const attributeString = require('attribute-string');

attributeString({ href: 'https://google.com' });
//=> 'href="https://google.com"'
```

## API

### attributeString(attributes)

#### attributes

Type: `object`

## License

MIT © [Tobias Herber](https://tobihrbr.com)
