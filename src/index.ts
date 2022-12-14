import GeneratorHelper from './Helpers/GeneratorHelper'

export class Twala {
  private appUuid: string
  private appSecret: string

  constructor(appUuid: string, appSecret: string) {
    this.appUuid = appUuid
    this.appSecret = appSecret
  }

  public generateNonce() {
    const generatorHelper = new GeneratorHelper()
    const nonce = generatorHelper.generateNonce()
    return nonce
  }
}
