import CryptoJS from 'crypto-js';

const encryptWord = (word) => {
    const iv = CryptoJS.lib.WordArray.random(16); // Create random 16 bytes IV
    const encrypted = CryptoJS.AES.encrypt(word, CryptoJS.enc.Utf8.parse(import.meta.env.VITE_SUPER_SECRET_KEY), { iv: iv });
    
    // The cipher text is the first part of the output, the IV is the second part
    return encrypted.ciphertext.toString(CryptoJS.enc.Hex) + ':' + iv.toString(CryptoJS.enc.Hex);
};

export default encryptWord;