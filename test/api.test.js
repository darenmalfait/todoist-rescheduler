// convert to require statements
const { TodoistApi } = require('@doist/todoist-api-typescript')
const dotenv = require('dotenv')
const invariant = require('tiny-invariant')

dotenv.config()

invariant(process.env.TODOIST_API_TOKEN, 'TODOIST_API_TOKEN must be set')

const api = new TodoistApi(process.env.TODOIST_API_TOKEN)

const tests = {
  'Should be able to fetch tasks': {
    input: api.getTasks({}),
    output: true,
  },
}

for (const [
  title,
  { input, output, only = false, skip = false },
] of Object.entries(tests)) {
  async function canExecute() {
    try {
      await input

      return true
    } catch (error) {
      return false
    }
  }

  const testHtml = () =>
    canExecute().then(result => {
      expect(result).toEqual(output)
    })

  if (only) {
    test.only(title, testHtml)
  } else if (skip) {
    test.skip(title, testHtml)
  } else {
    test(title, testHtml)
  }
}
