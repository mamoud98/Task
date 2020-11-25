const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/Task", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connected"));
