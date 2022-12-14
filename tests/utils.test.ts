import Twala from '../src/index'

test('generate nonce', () => {
  const twala = new Twala('test_app_uuid', 'test_app_secret', {
    apiVersion: 'v2',
    maxNetworkRetries: 1,
    timeout: 20000,
  })
  expect(twala.utils.generateNonce()).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi)
})
