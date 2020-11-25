const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const cors = require("cors");
const expressValidator = require("express-validator");

//routes

const userRoutes = require("./Src/routes/api/V1/user");
const TaskRoutes = require("./Src/routes/api/V1/task");
const authRoutes = require("./Src/routes/api/V1/auth");

//app
const app = express();

require("./Src/db/db")

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
app.use(bodyParser.json());
app.use(cors());



app.use("/api", userRoutes);
app.use("/api", TaskRoutes);
app.use("/api", authRoutes);


const port = 8500;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
