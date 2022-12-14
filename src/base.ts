type Options = {
  apiVersion: string,
  maxNetworkRetries: number,
  timeout: number,
}

export default class Base {
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
}
