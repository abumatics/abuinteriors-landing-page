const express = require("express");
const router = express.Router();
const connection = require("../config/db");
const { sendEmail } = require("../config/email");

router.post("/contact", async (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;

  // ✅ Validate Email Format (Only @gmail.com Allowed)
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!gmailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email! Please use a valid @gmail.com address." });
  }

  const sql = `INSERT INTO messages (firstName, lastName, phone, email, message) VALUES (?, ?, ?, ?, ?)`;

  connection.query(sql, [firstName, lastName, phone, email, message], async (err, result) => {
    if (err) {
      console.error("❌ Database Insertion Error:", err);
      return res.status(500).json({ message: "Database Insertion Failed" });
    }

    console.log("✅ Message Inserted Successfully!");

    const subject = `New Message from ${firstName} ${lastName}`;
    const emailMessage = `
      <h3>Thank You ${firstName} ${lastName}!</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    const emailSent = await sendEmail("abuinteriorsales@gmail.com", subject, emailMessage);

    if (emailSent) {
      return res.status(200).json({ message: "Message Sent Successfully + Email Sent!" });
    } else {
      return res.status(500).json({ message: "Email Sending Failed" });
    }
  });
});

module.exports = router;
