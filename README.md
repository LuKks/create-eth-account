# create-eth-account

Generate a random Ethereum account

```
npm i create-eth-account
```

It's very fast, and can be used in Workers for creating millions of accounts for testing.

## Usage

```js
const createEthAccount = require('create-eth-account')

const account = createEthAccount() // => { address, privateKey }
```

For example

```js
{
  address: '0x121a5212b43b92751081208cd6211984189019ab',
  privateKey: '5a1d37b817acf7d71f86fdf763ec42199938033035f6257a8558b963c26c5924'
}
```

## License

MIT
