const express = require("express");
const cors = require("cors");
const pa11y = require("pa11y");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use(cors());

app.get("/api/test", async (request, response) => {
  if (!request.query.url) {
    response.status(400).json({ error: "url is required" });
  } else {
    const results = await pa11y(request.query.url);
    response.status(200).json(results);
  }
});

app.listen("3000", () => {
  console.log(`App listening on ${PORT}`);
});
