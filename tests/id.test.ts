import { Twala } from '../src/index'

test('request claim', () => {
  const twala = new Twala('test_app_uuid', 'test_app_secret', {
    apiVersion: 'v2',
    maxNetworkRetries: 1,
    timeout: 20000,
  })
  expect(twala.id.requestClaim()).toMatch('REQUEST CLAIM')
})