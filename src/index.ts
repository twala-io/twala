import GeneratorHelper from './Helpers/GeneratorHelper'

type Options = {
  apiVersion: string,
  maxNetworkRetries: number,
  timeout: number,
}

export class Twala {
  private appUuid: string
  private appSecret: string
  private options: Options = {
    apiVersion: 'v1',
    maxNetworkRetries: 0,
    timeout: 10000,
  }

  constructor(appUuid: string, appSecret: string, options?: Options) {
    this.appUuid = appUuid
    this.appSecret = appSecret
    if (options) {
      this.options = options
    }
  }

  // utils
  public utils = new class {
    public generateNonce() {
      const generatorHelper = new GeneratorHelper()
      const nonce = generatorHelper.generateNonce()
      return nonce
    }
  }

  // id
  public id = new class {
    public requestClaim() {
      return 'REQUEST CLAIM'
    }
  }

  // sign
  public sign = new class {
    public sendDocument() {
      return 'SEND DOCUMENT'
    }
  }
}
