import Twala from '../src/twala'

test('generate nonce', () => {
  const twala = new Twala('test_app_uuid', 'test_app_secret')
  expect(twala.utils.generateNonce()).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi)
})

test('generate webhook signature', () => {
  const twala = new Twala('test_app_uuid', 'test_app_secret')
  expect(typeof twala.utils.generateWebhookSignature('test', 'test')).toBe('string')
})

test('verify webhook signatures', () => {
  const twala = new Twala('test_app_uuid', 'test_app_secret')
  expect(typeof twala.utils.verifyWebhookSignatures('88cd2108b5347d973cf39cdf9053d7dd42704876d8c9a9bd8e2d168259d3ddf7', '88cd2108b5347d973cf39cdf9053d7dd42704876d8c9a9bd8e2d168259d3ddf7')).toBe('boolean')
})
