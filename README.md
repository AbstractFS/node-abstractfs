# Node Abstract Filesystem

A very basic and experimental filesystem wrapper for node, allowing the same interface to be used across multiple filesystem implementations.

Currently only supports Local, but should be easy enough to extend. It is also highly untested, so use it at your own risk. That being said, if you notice any issues feel free to open an issue or fix it and make a pull request.

## Installation

`npm install abstractfs`

## Features

- Promises via bluebird
- Prefixing of paths
- One unified API for every filesystem type, no worrying about special packages

## Example

```javascript

const AbstractFS = require('abstractfs');

const filesystem = new AbstractFS.Filesystem(new AbstractFS.Adapters.Local('./'));

filesystem.write('test.txt', 'Testing data').then(() => console.log('Written!')).catch((e) => console.log(e, e.stack));

```

## Credits

This module was heavily inspired by and follows the API of Flysystem.