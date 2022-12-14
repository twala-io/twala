import Base from './base'
import CryptoHelper from './Helpers/CryptoHelper'
import GeneratorHelper from './Helpers/GeneratorHelper'

export default class Utils extends Base {
  public generatorHelper = new GeneratorHelper()
  public cryptoHelper = new CryptoHelper()

  public generateNonce() {
    const nonce = this.generatorHelper.generateNonce()
    return nonce
  }

  public generateWebhookSignature(stringifiedRequestBody: string, key: string) {
    const signature = this.cryptoHelper.signDataHMAC(stringifiedRequestBody, key)
    return signature
  }

  public verifyWebhookSignatures(headerSignature: string, webhookSignature: string) {
    const isVerified = this.cryptoHelper.verifySignatures(headerSignature, webhookSignature)
    return isVerified
  }
}
