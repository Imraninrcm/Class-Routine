const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "public", "routine.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading JSON file.");
    }
    const routine = JSON.parse(data);
    res.render("index", { routine }); // Pass routine to EJS
  });
});

// Server port
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
