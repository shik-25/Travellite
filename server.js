const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const user = require("./routes/user.controller");
const post = require("./routes/post.controller");
const path = require("path");
const app = express();
app.use(cors());
// app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());

//DB config
const uri = require("./config/keys").mongoURI;

//connect to mongo
// mongoose.connect(uri, { useNewUrlParser : true, useUnifiedTopology: true}).then(() => console.log('Mongoose connected'))
// .catch(err => console.log(err));
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongoose connected");
});

//use routes
app.use("/user", user);
app.use("/post", post);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT | 4000;

app.listen(port, () => console.log("Server started on port " + port));
