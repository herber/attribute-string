# attribute-string [![Build Status](https://travis-ci.org/herber/attribute-string.svg?branch=master)](https://travis-ci.org/herber/attribute-string) [![Codestyle fyi](https://img.shields.io/badge/code%20style-fyi-E91E63.svg)](https://github.com/tobihrbr/fyi)


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
