const crypto = require('crypto')
const secp = require('secp256k1')
const keccak = require('keccak')

module.exports = function createEthAccount (privateKey) {
  if (privateKey) {
    if (typeof privateKey === 'string') privateKey = parseKey(privateKey)
  } else {
    do {
      privateKey = crypto.randomBytes(32)
    } while (!secp.privateKeyVerify(privateKey))
  }

  const publicKey = Buffer.from(secp.publicKeyCreate(privateKey, false))

  const hash = keccak('keccak256').update(publicKey.slice(1)).digest()
  const address = hash.slice(-20)

  return {
    address: '0x' + address.toString('hex'),
    privateKey: privateKey.toString('hex')
  }
}

function parseKey (key) {
  const hasPrefix = (key[0] === '0' && key[1] === 'x')
  return Buffer.from(hasPrefix ? key.slice(2) : key, 'hex')
}
