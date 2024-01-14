const mysql = require('mysql2'); 
const fs = require("fs"); 

require('dotenv').config();

// https://stackoverflow.com/questions/74076456/running-a-mysql-seed-file-in-node-js
const parseSqlFile = (sqlFile) => {
  return sqlFile
      .toString()
      .replace(/(\r\n|\n|\r)/gm," ") // remove newlines
      .replace(/\s+/g, ' ') // excess white space
      .split(";") // split into all statements
}

const removeEmptyQueries = (queries) => {
  return queries
      .filter(q => q.length)
      .filter(q => q != ' ');
}

const { 
  DDD_FORUM_DB_USER, 
  DDD_FORUM_DB_PASS, 
  DDD_FORUM_DB_HOST,
  DDD_FORUM_DB_DEV_DB_NAME,
  DDD_FORUM_DB_TEST_DB_NAME,
  NODE_ENV
} = process.env;

const dbName = NODE_ENV === "development" 
  ? DDD_FORUM_DB_DEV_DB_NAME 
  : DDD_FORUM_DB_TEST_DB_NAME

const connection = mysql.createConnection({  
  host: DDD_FORUM_DB_HOST,  
  user: DDD_FORUM_DB_USER,  
  password: DDD_FORUM_DB_PASS  
});  

connection.connect((err) => {
  if (err) throw err;

  const path = require("path");
  const seed = parseSqlFile(fs.readFileSync(path.resolve("scripts/db/seed-us016.sql")));
  const queries = removeEmptyQueries([...seed]);
  queries.forEach(q => {
    connection.query(q, (err, result) => {
    
      if (err) {
        console.log('Seed error', err);
        process.exit(0);
      } 
      
      if (err) {
        throw err;
      }

    });
  });

  console.log('Seed db completed');
  connection.end();
})