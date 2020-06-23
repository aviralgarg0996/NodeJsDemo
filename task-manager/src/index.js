const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/tasks");
const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("Disables");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
// res.status(503).send('Server is under maintenance')
// });


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is running on port", port);
});
const myFunction = async () => {};
myFunction();
