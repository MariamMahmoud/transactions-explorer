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
- Using `psql` in postgres CLI
- prisma as a **powerful** ORM
- Setting up and doing migrations in prisma with typescript
- converting **big** CSV to JSON using command line `csvtojson ./transactions.csv > ./transactions.json` (it can be further automated,  added a TODO in script.sh file)
- stupid but new to me ¯\\\_(ツ)_/¯: configuration for importing libraries and json files in `.ts`
- seeding prisma DB with relations
- prisma fetching records doesn't include the reltions automatically. must `{include: {blabla: true}}`
- GraphQl with Apollo server and prisma as a **powerful** comibination of tools
- Quering and mutating data using graphQl
- Exposing endpoints with graphQl

## Notes:
Although I have used nodejs for 3 years in my career, this is my first time using typescript, postgres, sql in general with JS.

Although, this task was not a peice of cake, but I am happy I had  learnt a lot and read full tutorials on prisma, postgres and graphql to put it together.
Most importantly Graphql has been on my learning list for a long time. I am happy I got the opportunity to have some hands-on with it.


## TODOs:
- Use the full CSV 
- Test all search combinations
- Remove allTransactions query when search works, it's redundant (empty search lists all)
- Know more about Graphql Documentation
- Add tests
