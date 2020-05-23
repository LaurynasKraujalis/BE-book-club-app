const express = require("express");
const { PORT } = require("./config/constants");
const loggerMiddleWare = require("morgan");
// const bodyParserMiddleWare = express.json();
const corsMiddleWare = require("cors");
const homepageRouter = require("./routers/homepageRouter");
const detailsPageRouter = require("./routers/detailsRouter");
const userRouter = require("./routers/userRouter");
const authRouter = require("./routers/auth");

const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

app.use(loggerMiddleWare("dev"));

// app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

app.use("/", homepageRouter);

app.use("/books", detailsPageRouter);

app.use("/", userRouter);

app.use("/", authRouter);

// Listen for connections on specified port (default is port 4000)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
