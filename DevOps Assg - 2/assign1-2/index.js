const express = require("express");
const app = express();
app.listen(5040, function () {
console.log("listening on 5040");
});
app.get("/", (req, res) => {
res.send("Users Shown");
});
app.get("/delete", (req, res) => {
res.send("Delete User");
});
app.get("/update", (req, res) => {
res.send("Update User");
});
app.get("/insert", (req, res) => {
res.send("Insert User");
});
