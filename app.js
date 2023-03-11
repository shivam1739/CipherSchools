const express = require("express");
const { sequelize } = require("./models/index");
const authRoute = require("./routes/auth.routes");
require("dotenv").config();
const app = express();
const Port = process.env.PORT;
const cors = require("cors");
const roleRoute = require("./routes/role.routes");
const classRout = require("./routes/class.routes");
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

authRoute(app);
roleRoute(app);
classRout(app);
app.listen(Port, async () => {
  await sequelize.sync();
  console.log(`app listning to port${Port}`);
});
