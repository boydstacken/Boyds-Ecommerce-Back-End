const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
// imported sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// synced sequelize models to the database and will then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
