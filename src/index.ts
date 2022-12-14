import GeneratorHelper from './Helpers/GeneratorHelper'

type Options = {
  apiVersion: string,
  maxNetworkRetries: number,
  timeout: number,
}

export default class Twala {
  protected appUuid: string
  protected appSecret: string
  protected options: Options = {
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
}

// Utils class
// export class Utils extends Twala {
//   public generateNonce() {
//     const generatorHelper = new GeneratorHelper()
//     const nonce = generatorHelper.generateNonce()
//     return this.appUuid
//   }
// }
