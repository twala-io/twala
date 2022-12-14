import Twala from '../src/twala'

test('generate nonce', () => {
  const twala = new Twala('test_app_uuid', 'test_app_secret')
  expect(twala.utils.generateNonce()).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi)
})

test('generate webhook signature', () => {
  const twala = new Twala('test_app_uuid', 'test_app_secret')
  console.log(twala.utils.generateWebhookSignature('test', 'test'))
  expect(typeof twala.utils.generateWebhookSignature('test', 'test')).toBe('string')
})

test('verify webhook signatures', () => {
  const twala = new Twala('test_app_uuid', 'test_app_secret')
  expect(typeof twala.utils.verifyWebhookSignatures('Aq+1YwSQLGVvy3N83QPeYgW7bUAdooEu/ZstNqCK8Vk=', 'Aq+1YwSQLGVvy3N83QPeYgW7bUAdooEu/ZstNqCK8Vk=')).toBe('boolean')
})
