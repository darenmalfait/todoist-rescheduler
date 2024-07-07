# Todoist autorescheduler

This is a tool that contains a github action to auto reschedule all over due
tasks to today

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Todoist autorescheduler](#todoist-autorescheduler)
  - [Table of contents](#table-of-contents)
  - [How to use this](#how-to-use-this)
  - [Developing](#developing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How to use this

After forking the repo you only need to fill in your github secret with your
todoist API token. You can find your personal token in the
[integrations settings](https://todoist.com/prefs/integrations) view of the
Todoist web app.

```bash
TODOIST_API_TOKEN=<token>
```

## Developing

To use this locally you need to configure the environment variables.

```bash
cp .env.example .env
```

All the todoist requests require a user token for authentication. You can find
your personal token in the
[integrations settings](https://todoist.com/prefs/integrations) view of the
Todoist web app.

```bash
TODOIST_API_TOKEN=<token>
```
