const express = require("express");
const app = express();

app.listen(process.env.PORT || 8080, function () {});

app.get("/data", async (req, res) => {
  let data = [
    { name: "김철수", content: "안녕" },
    { name: "남지수", content: "멋지다" },
    { name: "박상민", content: "춥다" },
    { name: "김희윤", content: "배불러" },
    { name: "남", content: "우옹" },
  ];
  res.send(data);
});
