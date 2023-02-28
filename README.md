# Transactions explorer
[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=shield)](https://circleci.com/gh/MariamMahmoud/<TODO_REPO_NAME>)



## How to run
# prerequisits:
- Install docker
- Run `npm run docker`
** this command removes all exisiting containers and builds fresh ones.
If you want to keep you containers run `npm run docker:up`

## Learnings :D
Documenting learnings list for future refrence. The following are the things I learnt while doing this project:

- Postgres configuration with node.js and docker
- using `psql` in postgres CLI
- Setting up and doing migrations in prisma with typescript
- converting big CSV using command line `csvtojson ./transactions.csv > ./transactions.json` (it can be further automated)
- stupid but new to me ¯\_(ツ)_/¯: importing libraries and json files in `.ts`
- seeding prisma DB with relations