const express = require("express");
const router = express.Router();
const connection = require("../config/db");

router.get("/messages", (req, res) => {
  const sql = "SELECT * FROM messages";
  connection.query(sql, (err, result) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).json({ message: "Database Error" });
    }
    res.json(result);
  });
});

module.exports = router; // Yeh Line Sabse Important 🔥
