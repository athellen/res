const express = require("express");

const app = express();

app.use("/api", (req, res) => {
  res.send("working!");
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
