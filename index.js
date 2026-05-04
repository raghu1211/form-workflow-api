const express = require("express");
const app = express();

app.use(express.json());

app.post("/submit-form", (req, res) => {
  res.json({ status: "Form saved" });
});

app.listen(process.env.PORT);
