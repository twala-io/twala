import { v1 as uuidv1 } from 'uuid';

export default class GeneratorHelper {
  generateNonce() {
    const nonce = uuidv1();
    return nonce;
  }
}
