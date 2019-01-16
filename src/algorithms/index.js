/**
 * Local dependencies
 */
const SupportedAlgorithms = require('./SupportedAlgorithms')

/**
 * Register Supported Algorithms
 */
const supportedAlgorithms = new SupportedAlgorithms()

/**
 * encrypt
 */
supportedAlgorithms.define('RSA-OAEP', 'encrypt', () => require('../algorithms/RSA-OAEP'))
supportedAlgorithms.define('AES-CTR', 'encrypt', () => require('../algorithms/AES-CTR'))
supportedAlgorithms.define('AES-CBC', 'encrypt', () => require('../algorithms/AES-CBC'))
supportedAlgorithms.define('AES-GCM', 'encrypt', () => require('../algorithms/AES-GCM'))
//supportedAlgorithms.define('AES-CFB', 'encrypt', )

/**
 * decrypt
 */
supportedAlgorithms.define('RSA-OAEP', 'decrypt', () => require('../algorithms/RSA-OAEP'))
supportedAlgorithms.define('AES-CTR', 'decrypt', () => require('../algorithms/AES-CTR'))
supportedAlgorithms.define('AES-CBC', 'decrypt', () => require('../algorithms/AES-CBC'))
supportedAlgorithms.define('AES-GCM', 'decrypt', () => require('../algorithms/AES-GCM'))
//supportedAlgorithms.define('AES-CFB', 'decrypt', )

/**
 * sign
 */
supportedAlgorithms.define('RSASSA-PKCS1-v1_5', 'sign', () => require('../algorithms/RSASSA-PKCS1-v1_5'))
supportedAlgorithms.define('RSA-PSS', 'sign', () => require('../algorithms/RSA-PSS'))
supportedAlgorithms.define('ECDSA', 'sign', () => require('../algorithms/ECDSA'))
supportedAlgorithms.define('EDDSA', 'sign', () => require('../algorithms/EDDSA'))
//supportedAlgorithms.define('AES-CMAC', 'sign', )
supportedAlgorithms.define('HMAC', 'sign', () => require('../algorithms/HMAC'))

/**
 * verify
 */
supportedAlgorithms.define('RSASSA-PKCS1-v1_5', 'verify', () => require('../algorithms/RSASSA-PKCS1-v1_5'))
supportedAlgorithms.define('RSA-PSS', 'verify', () => require('../algorithms/RSA-PSS'))
supportedAlgorithms.define('ECDSA', 'verify', () => require('../algorithms/ECDSA'))
supportedAlgorithms.define('EDDSA', 'verify', () => require('../algorithms/EDDSA'))
//supportedAlgorithms.define('AES-CMAC', 'verify', )
supportedAlgorithms.define('HMAC', 'verify', () => require('../algorithms/HMAC'))

/**
 * digest
 */
supportedAlgorithms.define('SHA-1', 'digest', () => require('../algorithms/SHA'))
supportedAlgorithms.define('SHA-256', 'digest', () => require('../algorithms/SHA'))
supportedAlgorithms.define('SHA-384', 'digest', () => require('../algorithms/SHA'))
supportedAlgorithms.define('SHA-512', 'digest', () => require('../algorithms/SHA'))

/**
 * deriveKey
 */
//supportedAlgorithms.define('ECDH', 'deriveKey', )
//supportedAlgorithms.define('DH', 'deriveKey', )
//supportedAlgorithms.define('CONCAT', 'deriveKey', )
//supportedAlgorithms.define('HKDF-CTR', 'deriveKey', )
//supportedAlgorithms.define('PBKDF2', 'deriveKey', )

/**
 * deriveBits
 */
//supportedAlgorithms.define('ECDH', 'deriveBits', )
//supportedAlgorithms.define('DH', 'deriveBits', )
//supportedAlgorithms.define('CONCAT', 'deriveBits', )
//supportedAlgorithms.define('HKDF-CTR', 'deriveBits', )
//supportedAlgorithms.define('PBKDF2', 'deriveBits', )

/**
 * generateKey
 */
supportedAlgorithms.define('RSASSA-PKCS1-v1_5', 'generateKey', () => require('../algorithms/RSASSA-PKCS1-v1_5'))
supportedAlgorithms.define('RSA-PSS', 'generateKey', () => require('../algorithms/RSA-PSS'))
supportedAlgorithms.define('RSA-OAEP', 'generateKey', () => require('../algorithms/RSA-OAEP'))
supportedAlgorithms.define('ECDSA', 'generateKey', () => require('../algorithms/ECDSA'))
supportedAlgorithms.define('EDDSA', 'generateKey', () => require('../algorithms/EDDSA'))
//supportedAlgorithms.define('ECDH', 'generateKey', )
supportedAlgorithms.define('AES-CTR', 'generateKey', () => require('../algorithms/AES-CTR'))
supportedAlgorithms.define('AES-CBC', 'generateKey', () => require('../algorithms/AES-CBC'))
//supportedAlgorithms.define('AES-CMAC', 'generateKey', )
supportedAlgorithms.define('AES-GCM', 'generateKey', () => require('../algorithms/AES-GCM'))
//supportedAlgorithms.define('AES-CFB', 'generateKey', )
supportedAlgorithms.define('AES-KW', 'generateKey', () => require('../algorithms/AES-KW'))
supportedAlgorithms.define('HMAC', 'generateKey', () => require('../algorithms/HMAC'))
//supportedAlgorithms.define('DH', 'generateKey', )
//supportedAlgorithms.define('PBKDF2', 'generateKey', )

/**
 * importKey
 */
supportedAlgorithms.define('RSASSA-PKCS1-v1_5', 'importKey', () => require('../algorithms/RSASSA-PKCS1-v1_5'))
supportedAlgorithms.define('RSA-PSS', 'importKey', () => require('../algorithms/RSA-PSS'))
supportedAlgorithms.define('RSA-OAEP', 'importKey', () => require('../algorithms/RSA-OAEP'))
supportedAlgorithms.define('ECDSA', 'importKey', () => require('../algorithms/ECDSA'))
supportedAlgorithms.define('EDDSA', 'importKey', () => require('../algorithms/EDDSA'))
//supportedAlgorithms.define('ECDH', 'importKey', )
supportedAlgorithms.define('AES-CTR', 'importKey', () => require('../algorithms/AES-CTR'))
supportedAlgorithms.define('AES-CBC', 'importKey', () => require('../algorithms/AES-CBC'))
//supportedAlgorithms.define('AES-CMAC', 'importKey', )
supportedAlgorithms.define('AES-GCM', 'importKey', () => require('../algorithms/AES-GCM'))
//supportedAlgorithms.define('AES-CFB', 'importKey', )
supportedAlgorithms.define('AES-KW', 'importKey', () => require('../algorithms/AES-KW'))
supportedAlgorithms.define('HMAC', 'importKey', () => require('../algorithms/HMAC'))
//supportedAlgorithms.define('DH', 'importKey', )
//supportedAlgorithms.define('CONCAT', 'importKey', )
//supportedAlgorithms.define('HKDF-CTR', 'importKey', )
//supportedAlgorithms.define('PBKDF2', 'importey', )

/**
 * exportKey
 */
supportedAlgorithms.define('RSASSA-PKCS1-v1_5', 'exportKey', () => require('../algorithms/RSASSA-PKCS1-v1_5'))
supportedAlgorithms.define('RSA-PSS', 'exportKey', () => require('../algorithms/RSA-PSS'))
supportedAlgorithms.define('RSA-OAEP', 'exportKey', () => require('../algorithms/RSA-OAEP'))
supportedAlgorithms.define('EDDSA', 'exportKey', () => require('../algorithms/EDDSA'))
supportedAlgorithms.define('ECDSA', 'exportKey', () => require('../algorithms/ECDSA'))
//supportedAlgorithms.define('ECDH', 'exportKey', )
supportedAlgorithms.define('AES-CTR', 'exportKey', () => require('../algorithms/AES-CTR'))
supportedAlgorithms.define('AES-CBC', 'exportKey', () => require('../algorithms/AES-CBC'))
//supportedAlgorithms.define('AES-CMAC', 'exportKey', )
supportedAlgorithms.define('AES-GCM', 'exportKey', () => require('../algorithms/AES-GCM'))
//supportedAlgorithms.define('AES-CFB', 'exportKey', )
supportedAlgorithms.define('AES-KW', 'exportKey', () => require('../algorithms/AES-KW'))
supportedAlgorithms.define('HMAC', 'exportKey', () => require('../algorithms/HMAC'))
//supportedAlgorithms.define('DH', 'exportKey', )

/**
 * wrapKey
 */
supportedAlgorithms.define('RSA-OAEP', 'wrapKey', () => require('../algorithms/RSA-OAEP'))
supportedAlgorithms.define('AES-CTR', 'wrapKey', () => require('../algorithms/AES-CTR'))
supportedAlgorithms.define('AES-CBC', 'wrapKey', () => require('../algorithms/AES-CBC'))
supportedAlgorithms.define('AES-GCM', 'wrapKey', () => require('../algorithms/AES-GCM'))
//supportedAlgorithms.define('AES-CFB', 'wrapKey', )
supportedAlgorithms.define('AES-KW', 'wrapKey', () => require('../algorithms/AES-KW'))

/**
 * unwrapKey
 */
supportedAlgorithms.define('RSA-OAEP', 'unwrapKey', () => require('../algorithms/RSA-OAEP'))
supportedAlgorithms.define('AES-CTR', 'unwrapKey', () => require('../algorithms/AES-CTR'))
supportedAlgorithms.define('AES-CBC', 'unwrapKey', () => require('../algorithms/AES-CBC'))
supportedAlgorithms.define('AES-GCM', 'unwrapKey', () => require('../algorithms/AES-GCM'))
//supportedAlgorithms.define('AES-CFB', 'unwrapKey', )
supportedAlgorithms.define('AES-KW', 'unwrapKey', () => require('../algorithms/AES-KW'))

/**
 * Export
 */
module.exports = supportedAlgorithms