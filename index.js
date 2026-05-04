const express = require("express");
const app = express();

app.use(express.json());

app.post("/submit-form", (req, res) => {
  res.json({ status: "Form saved" });
});

app.get("/", (req, res) => {
  res.send("Form & Workflow API running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
``
