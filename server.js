const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const apiRoutes = require("./routes/index");
const PORT = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use("/api", apiRoutes);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  
mongoose.connect(process.env.MONGODB_URI || "mongodb://david:ricedrew2732@@ds149844.mlab.com:49844/heroku_l73k32ml");
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
