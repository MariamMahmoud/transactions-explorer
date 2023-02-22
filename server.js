'use strict';

const app = require('./src/Routes');

const { Pool } = require("pg");
// Create a connection pool
const pool = new Pool({
	user: "postgres",
	host: "db",
	database: "mydb",
	password: "mysecretpassword",
	port: 5432,
  });
  const PORT = 8080;

app.listen(PORT, async function() {
	console.log(`Listening on ${PORT}`);
	
});
