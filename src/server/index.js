const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("dist"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist", "index.html"));
});
app.use("/api", (req, res) => {
  res.send("working!");
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
