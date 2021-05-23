## About StringCrypto

This is simple package for encrypt/decrypt small strings like database IDs with ease. It is based on inbuilt node module `crypto`.

The encrypt method used is `AES-256-CBC`.

## Usage

`npm i @ronak.iihglobal/stringcrypto`

then 

`const { encrypt, decrypt } = require('@ronak.iihglobal/stringcrypto')
.init("random_secret_string_of_length_32","random_secret_string_of_length_16");` 

Note init method and constraints on key and IV length.

# or

Just copy index.js file from github and put it in you project as it is simple one file module.

Once module imported and init method called with proper arguments, we can simply use it like below,

`let encrypted = encrypt("mystring")`

`let decrypted = decrypt(encrypted)`

In framework like expressJs we can simply declare it in app.js/index.js once global like below

`global._encrypt = encrypt;`

and reuse it in whole app like below 

`let encrypted = _encrypt("mystring")`