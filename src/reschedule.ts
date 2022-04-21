import { TodoistApi } from '@doist/todoist-api-typescript'
import invariant from 'tiny-invariant'

const chalk = require('chalk')

require('dotenv').config()

invariant(process.env.TODOIST_API_TOKEN, 'TODOIST_API_TOKEN must be set')

const api = new TodoistApi(process.env.TODOIST_API_TOKEN)

;(async () => {
  console.info(chalk.blue('Rescheduler started.'))

  try {
    const tasks = await api.getTasks({
      filter: 'overdue',
    })

    if (!tasks.length) {
      console.info(chalk.blue('No overdue tasks found.'))
      return
    }

    console.info(chalk.blue(`Found ${tasks.length} overdue tasks.`))

    for (const task of tasks) {
      const success = await api.updateTask(task.id, { dueString: 'Today' })

      if (!success) {
        console.error(chalk.red(`Failed to reschedule task ${task.id}`))
      }

      console.info(chalk.blue(`Rescheduled task ${task.id} to today`))
    }
  } catch (error: any) {
    console.error(error.message)
  }
})()
