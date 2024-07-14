import CryptoJS from 'crypto-js';

const generateHash = () => {
    return CryptoJS.HmacSHA256(import.meta.env.VITE_API_KEY, import.meta.env.VITE_SUPER_SECRET_KEY).toString(CryptoJS.enc.Hex);
}

export default generateHash;