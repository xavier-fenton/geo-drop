const config = require('./knexfile').test
const testDb = require('knex')(config)
const { getMessage } = require('./messages')

// At start of test file
beforeAll(() => {
  return testDb.migrate.latest()
})

// At end of test file
afterAll(() => {
  return testDb.destroy()
})

// Before every single test
beforeEach(() => {
  return testDb.seed.run()
})

test('get all messages from DB', async () => {
  // object we pass through,
  const input = { lat: -36.8682574, long: 174.7656955, r: 0.05 }
  // function which returns data
  const messages = await getMessage(input, testDb)

  expect(messages).toHaveLength(4)
})
