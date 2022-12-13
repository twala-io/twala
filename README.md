# Twala Node.js Library

The official Node.js library for Twala API that provides convenient access and utilities for applications written in JavaScript.

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
# or
$ yarn add @twala-io/twala-js
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

console.log(customer.id);
```