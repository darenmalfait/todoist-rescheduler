# Todoist autorescheduler

This is a tool that contains a github action to auto reschedule all over due tasks to today

## Table of contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Todoist autorescheduler](#todoist-autorescheduler)
  - [Table of contents](#table-of-contents)
  - [Environment Variables](#environment-variables)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Environment Variables

```bash
cp .env.example .env
```

All the todoist requests require a user token for authentication. You can find your personal token in the [integrations settings]([https://link](https://todoist.com/prefs/integrations)) view of the Todoist web app.

```bash
TODOIST_API_TOKEN=<token>
```

> ⚠️ **Important!** <br />Add these to the secrets part in github.