const express = require("express");
const testRouter = require("./routes/testRoute");

const app = express();

app.use(express.json());
app.use("/test", testRouter);

app.listen(3000, () => {
  console.log("Server Start");
});
