const express = require("express");
const mongoose  = require("mongoose");
const Quiz = require("../database/index")
const cors = require ("cors")
mongoose.connect("mongodb+srv://wahbi:habloun90@cluster.vwyfx.mongodb.net/Questions?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("we are connected")
});

let app = express();
app.use(cors());

// Quiz.create({"question":" who created Angular? ","answers":[" Google "," Facebook "," Opera "," Microsoft "],"correct":" Google "}).then(console.log)



app.get("/all", function (req,res) {
    Quiz.find({}).then(result => res.send(result))
})


let port = 5000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});