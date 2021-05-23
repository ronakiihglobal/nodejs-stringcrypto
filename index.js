const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
let secretKey = "";
let secretIV = "";



const encrypt = (text) => {


    if(!isNaN(text)){
        text = text.toString()
    }

    const cipher = crypto.createCipheriv(algorithm, secretKey, secretIV);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return encrypted.toString('hex');
};

const decrypt = (content) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, secretIV);
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(content, 'hex')), decipher.final()]);
    return decrpyted.toString();
};

const init = (key, iv) => {

    secretKey = key;
    secretIV = iv;

    return {
        encrypt,
        decrypt
    }

}

module.exports = (key, iv) => init(key, iv);
