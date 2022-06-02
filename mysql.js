const mysql = require("mysql");
require("dotenv").config();

// ? Getting the environment variables
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, PORT } = process.env;

// * Making the connection
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

// * Testing the connection

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to database");
});

connection.query("SELECT * FROM estudiantes", (err, rows) => {
  if (err) throw err;
  console.log("Data received from estudiantes table: ");
  console.log(rows);
  console.log("Quantity of results: ");
  console.log(rows.length);
});

/*
! Second option to handle the connection to the database

try {
  connection.connect(() => {
    console.log("Connected to database");
  });
} catch (err) {
  console.log(err);
} 

*/
