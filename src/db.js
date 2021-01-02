import mysql2 from 'mysql2';

export default function db() {
  const mysql = require("mysql2");

  const connection = mysql.createConnection({
    host: "f0501724_base",
    user: "f0501724_base",
    database: "f0501724_base",
    password: "XbB1620"
  });
  connection.connect();
  connection.end();
}
