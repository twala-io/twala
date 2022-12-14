import * as CryptoJS from 'crypto-js';

export default class CryptoHelper {
  public signDataHMAC(data: string, key: string): string {
    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
    hmac.update(data);
    const hash = hmac.finalize();
    return hash.toString(CryptoJS.enc.Base64);
  }

  public verifySignatures(timingSafeEqual: string, webhookSignature: string): boolean {
    const isVerified = timingSafeEqual === webhookSignature;
    return isVerified;
  }
}
