import GeneratorHelper from './Helpers/GeneratorHelper';
import CryptoHelper from './Helpers/CryptoHelper';
import Web3Helper from './Helpers/Web3Helper';

export default class Twala {
  protected generatorHelper: GeneratorHelper = new GeneratorHelper();
  protected cryptoHelper: CryptoHelper = new CryptoHelper();
  protected web3Helper: Web3Helper;

  constructor(provider: string) {
    this.web3Helper = new Web3Helper(provider);
  }

  public generateNonce() {
    return this.generatorHelper.generateNonce();
  }

  public generateWebhookSignature(stringifiedRequestBody: string, webhookSecret: string) {
    return this.cryptoHelper.signDataHMAC(stringifiedRequestBody, webhookSecret);
  }

  public verifyWebhookSignatures(headerSignature: string, webhookSignature: string) {
    return this.cryptoHelper.verifySignatures(headerSignature, webhookSignature);
  }

  public generateAccountKeys () {
    const wallet = this.web3Helper.createAccount()
    return wallet
  }

  public signDocumentUuid(data: string, privateKey: string) {
    type SignatureResult = {
      message: string;
      message_hash: string;
      v: string;
      r: string;
      s: string;
    };
    return this.web3Helper.sign(data, privateKey) as SignatureResult;
  }
}
