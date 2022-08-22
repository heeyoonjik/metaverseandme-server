const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())

app.listen(process.env.PORT || 8080, function () {});

app.get("/data", async (req, res) => {
  let data = {
    Comment: [
      {
        "name": "남지수",
        "content": "안녕",
      },
      {
        "name": "지수남",
        "content": "반가워",
      },
      {
        "name": "남수지",
        "content": "해위",
      },
    ],
  };
  res.send(data);
});
