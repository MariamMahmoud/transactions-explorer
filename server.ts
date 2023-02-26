// 'use strict';
// const  Pool  = require('pg');
import Pool from 'pg';
import { ApolloServer } from 'apollo-server';
import typeDefs from './src/graphql/schema';
// import resolvers from './resolvers';
// // Create a connection pool
// const pool = new Pool({
// 	user: "postgres",
// 	host: "db",
// 	database: "mydb",
// 	password: "mysecretpassword",
// 	port: 5432,
//   });
const PORT = 8080;
let server = new ApolloServer({ typeDefs, mocks: true });

server.listen(PORT).then(() => {
	console.log(`🚀 Server ready http://localhost:${PORT}`);
});
