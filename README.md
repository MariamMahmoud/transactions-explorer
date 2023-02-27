# Transactions explorer
[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=shield)](https://circleci.com/gh/MariamMahmoud/<TODO_REPO_NAME>)



## How to run
# prerequisits:
- Install node.js
- Install typescript
- Install docker
- Run `npm run docker`

## Challenges as a list of Learnings :D

- Postgres configuration with node.js and docker
- using `psql` in postgres CLI
- Setting up and doing migrations in prisma with typescript
- converting **big** CSV to JSON using command line `csvtojson ./transactions.csv > ./transactions.json` (it can be further automated, for example, npm command or script)
- stupid but new to me ¯\\\_(ツ)_/¯: importing libraries and json files in `.ts`
- seeding prisma DB with relations
- prisma fetching records doesn't include the reltions automatically. must `{include: {blabla: true}}`

## Notes:
Although I have used nodejs for 3 years in my career, this is my first time using typescript, postgres, sql in general with JS.

Although, this task was not a peice of cake, but I am happy I had  learnt a lot and read full tutorials on prisma, postgres and graphql to put it together.
Most importantly Graphql has been on my learning list for a long time. I am happy I got the opportunity to have some hands-on with it.


## TODOs:
- [Important] use the full CSV 
- search query
- Are edits being persisted after restarting the docker?
- Documentation
- Add tests 
