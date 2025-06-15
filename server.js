const express = require("express");
const app = express();
const port = 3000;
const sqlite3 = require("sqlite3").verbose();

// Database setup
const db = new sqlite3.Database(":memory:");

db.serialize(function () {
  db.run(
    "CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, number INTEGER, age INTEGER, biodata TEXT)"
  );
});

// Set view engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // parses form submission

// Home route with form
app.get("/", (req, res) => {
  res.render("index");
});

// Handle form submission
app.post("/add-user", (req, res) => {
  const { name, number, age, biodata } = req.body;

  db.run(
    "INSERT INTO users (name, number, age, biodata) VALUES (?, ?, ?, ?)",
    [name, number, age, biodata],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Server Error.");
      } else {
        res.redirect("/users");
      }
    }
  );
});

// Display all users
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server Error.");
    } else {
      res.render("users", { users: rows });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
