// test-db.js
import pg from "pg";

const pool = new pg.Pool({
  host: "172.18.0.2",
  port: 5432,
  user: "postgres",
  password: "PrinceKumar@123",
  database: "mydb",
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Connection failed", err);
  } else {
    console.log("Connected! Server time:", res.rows[0]);
  }
  pool.end();
});
