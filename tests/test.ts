import Twala from '../src/twala'

test('generate nonce', () => {
  const twala = new Twala('testAppUuid', 'testAppSecret', 'https://remotenode.com')
  expect(twala.generateNonce()).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi)
})

test('generate webhook signature', () => {
  const twala = new Twala('testAppUuid', 'testAppSecret', 'https://remotenode.com')
  expect(typeof twala.generateWebhookSignature('test', 'test')).toBe('string')
})

test('verify webhook signatures', () => {
  const twala = new Twala('testAppUuid', 'testAppSecret', 'https://remotenode.com')
  expect(typeof twala.verifyWebhookSignatures('Aq+1YwSQLGVvy3N83QPeYgW7bUAdooEu/ZstNqCK8Vk=', 'Aq+1YwSQLGVvy3N83QPeYgW7bUAdooEu/ZstNqCK8Vk=')).toBe('boolean')
})

test('generate account keys', () => {
  const twala = new Twala('testAppUuid', 'testAppSecret', 'https://remotenode.com')
  const accountKeys = twala.generateAccountKeys();

  // Verify that accountKeys is an object
  expect(typeof accountKeys).toBe('object');

  // Verify that accountKeys contains the required properties
  expect(accountKeys).toHaveProperty('privateKey');
  expect(accountKeys).toHaveProperty('publicKey');
  
  // Verify that privateKey and publicKey are strings
  expect(typeof accountKeys.privateKey).toBe('string');
  expect(typeof accountKeys.publicKey).toBe('string');

  // Verify that publicKey is a string and has a valid Ethereum publicKey format
  expect(typeof accountKeys.publicKey).toBe('string');
  expect(accountKeys.publicKey).toMatch(/^0x[a-fA-F0-9]{40}$/);
});

test('sign document uuid', () => {
  const twala = new Twala('testAppUuid', 'testAppSecret', 'https://remotenode.com');
  const expectedSignatureResult = {
    message: '0x38326631613235312d363164362d343734382d383437642d363666656531333838663434',
    message_hash: '0x6992bc29d1b9a16653294adc38365cd7b4c15f3e61648df108fd68033280c4f7',
    v: '0x1c',
    r: '0x3ee6624b95751a9b10e45b5a75e06f3e198413c3de50608b26015286f2f85ef1',
    s: '0x5931ac2a3ed51ee1dd297bbb765c476aa278d28bb4b770677d12d872704ad23b',
  };

  const signatureResult = twala.signDocumentUuid('82f1a251-61d6-4748-847d-66fee1388f44', '0x0c5b15aff34cb04d88896de82973d912594e18c18f19cf31baaaff2646956a8f');
  
  expect(signatureResult).toEqual(expectedSignatureResult);
});
