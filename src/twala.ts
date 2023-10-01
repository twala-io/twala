import GeneratorHelper from './Helpers/GeneratorHelper';
import CryptoHelper from './Helpers/CryptoHelper';
import Web3Helper from './Helpers/Web3Helper';

export default class Twala {
  protected appUuid: string;
  protected appSecret: string;
  protected generatorHelper: GeneratorHelper = new GeneratorHelper();
  protected cryptoHelper: CryptoHelper = new CryptoHelper();
  protected web3Helper: Web3Helper;

  constructor(appUuid: string, appSecret: string, provider: string) {
    this.appUuid = appUuid;
    this.appSecret = appSecret;
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

  public generateAccountKeys() {
    const wallet = this.web3Helper.createAccount();
    return wallet;
  }

  public signDocumentUuid(uuid: string, privateKey: string) {
    const signatureResult = this.web3Helper.sign(uuid, privateKey);
    return signatureResult;
  }
}
