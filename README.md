# Twala Node.js Library

The official Node.js library of Twala API for applications written in server-side JavaScript.

[![Version](https://img.shields.io/npm/v/@twala-io/twala-js.svg)](https://npmjs.org/package/@twala-io/twala-js)
[![Downloads/week](https://img.shields.io/npm/dw/@twala-io/twala-js.svg)](https://npmjs.org/package/@twala-io/twala-js)
[![License](https://img.shields.io/npm/l/@twala-io/twala-js.svg)](https://github.com/twala-io/twala/blob/master/package.json)

## Requirements

Before proceeding, please make sure that the below requirements is installed and running on your machine.

- Node.js >= 14.16.0
- npm >= 7.6.1

## Installation

Open your terminal (for Mac and Linux) or command prompt (for Windows) and install the `twala-js` npm package.

```sh-session
$ npm install @twala-io/twala-js --save
```

## Usage

The library needs to be configured with your account's application UUID and secret key, which is available in your respective Twala product dashboard. Require the library with the application values:

```js
const twala = require('twala-js')('app_uuid...', 'app_secret...');

twala.id.requestClaim({
  soul_account_address: '0xf40ceA2a71b65A553913C867d023F8ac30F1b726',
  claim: 1
})
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

or by using ES modules and async/await:

```js
import Twala from 'twala-js';
const twala = new Twala('app_uuid...', 'app_secret...');

const document = await twala.sign.sendDocument({
  document_name: 'Document 1',
  template_uuid: 'd7898f60-2f27-11ed-9335-bf81eb62a959',
  ...
});

console.log(document.uuid);
```

## Configuration

The package can be initialized with several options:

```js
const twala = Twala('app_uuid...', 'app_secret...', {
  apiVersion: 'v1',
  maxNetworkRetries: 1
  timeout: 8000,
});
```

| Option                    | Default     | Description                                                                     |
| ------------------------- | ----------- | ------------------------------------------------------------------------------- |
| apiVersion                | v1          | Twala API version to be used. If not set the latest version will be used.       |
| maxNetworkRetries         | 0           | The amount of times a request should be retried.                                |
| timeout                   | 80000       | Maximum time each request can take in ms.                                       |

## Support

The most recent major release of `twala-js` includes both new functionality and problem fixes. To take advantage of new features and bug patches, including those for security vulnerabilities, if you are using an earlier major version, we advise you to upgrade to the most recent version. The package's older major versions will still be usable but won't be receiving any updates.

## Development

Clone repository:

```sh
$ git clone git@github.com:twala-io/twala-js.git && cd twala-js
```

Install dependencies:

```sh
$ npm install
```

Run tests:

```sh
$ npm run test
```

Run linter:

```sh
$ npm run lint
```

Run formatter:

```sh
$ npm run format
```

Build package:

```sh
$ npm run build
```

Publish package:
```sh
$ npm publish --public
```
