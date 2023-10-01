import Web3 from "web3";

export default class Web3Helper {
  protected provider: string
  protected web3
  constructor(provider: string) {
    this.provider = provider
    this.web3 = new Web3(this.provider)
  }

  createAccount () {
    type Account = {
      publicKey: string,
      privateKey: string,
    }
  
    const wallet = this.web3.eth.accounts.create()
    const account: Account = {
      publicKey: wallet.address,
      privateKey: wallet.privateKey,
    }
    return account
  }

  public sign(data: string, privateKey: string) {
    type SignatureResult = {
      message: string;
      message_hash: string;
      v: string;
      r: string;
      s: string;
    };
  
    const hexedData = this.web3.utils.asciiToHex(data);
    const signature = this.web3.eth.accounts.sign(hexedData, privateKey);
  
    if (signature && signature.message && signature.messageHash && signature.v && signature.r && signature.s) {
      const message = signature.message;
      const messageHash = signature.messageHash;
      const v = signature.v;
      const r = signature.r;
      const s = signature.s;
  
      const signatureResult: SignatureResult = {
        message: message,
        message_hash: messageHash,
        v: v,
        r: r,
        s: s
      };
  
      return signatureResult;
    } else {
      throw new Error("Signature properties are undefined");
    }
  }
}
