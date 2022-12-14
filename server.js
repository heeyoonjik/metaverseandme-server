const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())

app.listen(process.env.PORT || 8080, function () {});

app.get("/data", async (req, res) => {
  let data = [
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
  
    ];
  res.send(data);
});


app.use(express.json());

app.use(express.urlencoded({
  extended: true
}))

app.post('/data', (req, res) => {
  const result = req.body;
  res.send(result);
})