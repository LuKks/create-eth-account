const test = require('brittle')
const createEthAccount = require('./index.js')

test('basic', async function (t) {
  const account = createEthAccount()

  t.is(typeof account.address, 'string')
  t.is(typeof account.privateKey, 'string')

  t.is(account.address.length, 42)
  t.is(account.privateKey.length, 64)
})

test('input private key as string (without prefix)', async function (t) {
  const privateKey = '5a1d37b817acf7d71f86fdf763ec42199938033035f6257a8558b963c26c5924'
  const account = createEthAccount(privateKey)

  t.is(account.address, '0x121a5212b43b92751081208cd6211984189019ab')
  t.is(account.privateKey, privateKey)
})

test('input private key as string (with prefix)', async function (t) {
  const privateKey = '0x5a1d37b817acf7d71f86fdf763ec42199938033035f6257a8558b963c26c5924'
  const account = createEthAccount(privateKey)

  t.is(account.address, '0x121a5212b43b92751081208cd6211984189019ab')
  t.is(account.privateKey, privateKey.slice(2))
})

test('input private key as buffer', async function (t) {
  const privateKey = Buffer.from('5a1d37b817acf7d71f86fdf763ec42199938033035f6257a8558b963c26c5924', 'hex')
  const account = createEthAccount(privateKey)

  t.is(account.address, '0x121a5212b43b92751081208cd6211984189019ab')
  t.is(account.privateKey, privateKey.toString('hex'))
})
