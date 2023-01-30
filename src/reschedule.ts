import {TodoistApi} from '@doist/todoist-api-typescript'
import * as dotenv from 'dotenv'
import invariant from 'tiny-invariant'

dotenv.config()

invariant(process.env.TODOIST_API_TOKEN, 'TODOIST_API_TOKEN must be set')

const api = new TodoistApi(process.env.TODOIST_API_TOKEN)

async function run() {
  console.info('Rescheduler started.')

  try {
    const tasks = await api.getTasks({
      filter: 'overdue',
    })

    if (!tasks.length) {
      console.info('No overdue tasks found.')
      return
    }

    console.info(`Found ${tasks.length} overdue tasks.`)

    const promises = []
    for (const task of tasks) {
      try {
        if (task.due?.isRecurring) {
          console.info(`Task ${task.id} is recurring. Skipping.`)
          continue
        }

        promises.push(api.updateTask(task.id, {dueString: 'Today'}))
        console.info(`Rescheduled task ${task.id} to today`)
      } catch {
        console.error(`Failed to reschedule task ${task.id}`)
      }
    }

    return await Promise.all(promises)
  } catch (error: any) {
    console.error(error.message)
  }
}

run().catch(error => {
  console.error(error)
})
