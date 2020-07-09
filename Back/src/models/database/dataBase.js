const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./src/models/database/dataBase.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      author TEXT,
      title TEXT,
      description TEXT,
      linkImg TEXT,
      linkMoreDetails TEXT,
      category TEXT
    );
  `);
});

module.exports = db;
