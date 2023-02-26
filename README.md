# Transactions explorer
[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=shield)](https://circleci.com/gh/MariamMahmoud/<TODO_REPO_NAME>)



## How to run
# prerequisits:
- Install node.js
- Install typescript
- Install docker
- Run `npm run docker-build`

## Challenges as a list of Learnings :D

- Postgres configuration with node.js and docker
- using `psql` in postgres CLI
- Setting up and doing migrations in prisma with typescript
- converting **big** CSV to JSON using command line `csvtojson ./transactions.csv > ./transactions.json` (it can be further automated, for example, npm command or script)
- stupid but new to me ¯\\\_(ツ)_/¯: importing libraries and json files in `.ts`
- seeding prisma DB with relations

## TODOs:
- [Important] use the full CSV 
- Use scalar for date type in graphql type
- Documentation
- Add tests 
