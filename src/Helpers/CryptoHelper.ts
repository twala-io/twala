import * as crypto from 'crypto';

export default class CryptoHelper {
  public signDataHMAC(data: string, key: string): string {
    const signedData = crypto.createHmac('sha256', key).update(data).digest('hex');
    return signedData;
  }

  public verifySignatures(headerSignature: string, webhookSignature: string): boolean {
    const isVerified = crypto.timingSafeEqual(Buffer.from(headerSignature), Buffer.from(webhookSignature));
    return isVerified;
  }
}
