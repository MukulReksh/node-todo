const express = require("express");
const homescreen = require("./home");
const mongodb = require("mongodb");

const app = express();
app.use(express.urlencoded({ extended: false }));
let db;
app.use(express.json());
app.use(express.static("public"));

let connectionstr =
  "mongodb+srv://admin123:admin123@cluster0.qt328.mongodb.net/Todo?retryWrites=true&w=majority";
mongodb.connect(
  connectionstr,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    db = client.db();
    app.listen(3000, console.log("my app is running"));
  }
);

app.get("/", function (req, res) {
  db.collection("tasks")
    .find()
    .toArray(function (err, tasks) {
      res.send(`${homescreen} 
      <div class="container">
      <ul class="collection">
      ${tasks
        .map(
          (item) => `
        <li class="collection-item">
            <span class="items">${item.tasks}</span>
            <button class="secondary-content">
              <i data-id="${item._id}" class="material-icons edit-btn">create</i>
            </button>
            <button  class="secondary-content">
              <i data-id="${item._id}" class="material-icons delete-btn">delete</i>
            </button>
        </li>`
        )
        .join("")}
      
    </ul>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
    <script src="/todoscript.js"></script>
      `);
    });
});

app.post("/newitem", function (req, res) {
  if (req.body.tasks.length >= 1) {
    db.collection("tasks").insertOne({ tasks: req.body.tasks }, function () {
      res.redirect("/");
    });
  } else {
    res.send(`<a href="/">Go Back</a><br> please type something`);
  }
});

app.post("/update-item", function (req, res) {
  db.collection("tasks").findOneAndUpdate(
    { _id: new mongodb.ObjectId(req.body.id) },
    { $set: { tasks: req.body.tasks } },
    function () {
      res.send("sucess");
    }
  );
});

app.post("/delete-item", function (req, res) {
  db.collection("tasks").removeOne(
    { _id: new mongodb.ObjectId(req.body.id) },
    function () {
      res.send("item deleted");
    }
  );
});
