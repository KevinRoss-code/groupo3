const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur Groupomania" });
});

const db = require('./models');

/*
db.sequelize.sync({force: true}).then(() => {
    console.log("sync db");
});
*/

///*
db.sequelize.sync().then(() => {
  console.log("sync db");
});
//*/
//routes
require("./routes/auth.routes")(app);
require('./routes/user.routes')(app);
require('./routes/article.routes')(app);
require('./routes/commentaire.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});