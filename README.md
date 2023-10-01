# Twala Node.js Library

The official Node.js library of Twala API for applications written in server-side JavaScript.

[![Version](https://img.shields.io/npm/v/@twala-io/twala-js.svg)](https://npmjs.org/package/@twala-io/twala-js)
[![Downloads/week](https://img.shields.io/npm/dw/@twala-io/twala-js.svg)](https://npmjs.org/package/@twala-io/twala-js)
[![License](https://img.shields.io/npm/l/@twala-io/twala-js.svg)](https://github.com/twala-io/twala/blob/master/package.json)

## Requirements

Before proceeding, please make sure that the below requirements are installed and running on your machine.

- Node.js >= v19.4.0
- npm >= 9.2.0

## Installation

Open your terminal (for Mac and Linux) or command prompt (for Windows) and install the `twala-js` npm package.

```sh
$ npm install @twala-io/twala-js --save
```

## Usage

Initialize the library with your RPC provider:

```js
import Twala from '@twala-io/twala-js';
const twala = new Twala(appUuid, appSecret, provider);
```

Use the library's methods as needed, such as generating nonces, creating webhook signatures, verifying webhook signatures, and signing data:

```js
// Generate a nonce
const nonce = twala.generateNonce();

// Generate a webhook signature
const webhookSignature = twala.generateWebhookSignature(stringifiedRequestBody, webhookSecret);

// Verify webhook signatures
const isVerified = twala.verifyWebhookSignatures(headerSignature, webhookSignature);

// Generate account keys
const keys = twala.generateAccountKeys()

// Sign document
const signatureResult = twala.signDocumentUuid(uuid, privateKey);
```

## Support

The most recent major release of twala-js includes both new functionality and bug fixes. To take advantage of new features and bug patches, including those for security vulnerabilities, if you are using an earlier major version, we advise you to upgrade to the most recent version. Older major versions of the package will still be usable but won't receive updates.

## Development

To contribute to the development of the Twala Node.js Library, follow these steps:

Clone the repository:
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

Build the package:
```sh
$ npm run build
```

Publish the package:
```sh
$ npm publish --access public
```
