const express = require("express");
const schedules = require("node-schedule");
const app = express();



app.listen(3000, () => {
  console.log(`Server is running at http://127.0.0.1:3000`);
});
