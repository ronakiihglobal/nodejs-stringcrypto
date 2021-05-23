## About StringCrypto

This is simple package for encrypt/decrypt small strings like database IDs with ease. It is based on inbuilt node module `crypto`.

The encrypt method used is `AES-256-CBC`.

## Usage

`npm i @ronak.iihglobal/stringcrypto`

then 

`const { encrypt, decrypt } = require('@ronak.iihglobal/stringcrypto')("str_of_len_32","str_of_len_16");` 

Note args and constraints on key and IV length. Also keep both strings secret in .env.

OR

Just copy index.js file from github and put it in you project as it is simple one file module.

Once module imported and init method called with proper arguments, we can simply use it like below,

`let encrypted = encrypt("mystring")`

`let decrypted = decrypt(encrypted)`

In framework like expressJs we can simply declare it in app.js/index.js once global like below

`global._encrypt = encrypt;`

and reuse it in whole app like below 

`let encrypted = _encrypt("mystring")`