const express = require("express");
const { sequelize } = require("./models/index");
const authRoute = require("./routes/auth.routes");
require("dotenv").config();
const app = express();
const Port = process.env.PORT;
const cors = require("cors");
const roleRoute = require("./routes/role.routes");
const classRout = require("./routes/class.routes");
const likeRoutes = require("./routes/like.routes");
const commentRoute = require("./routes/comment.routes");
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

authRoute(app);
roleRoute(app);
classRout(app);
likeRoutes(app);
commentRoute(app);
app.listen(Port, async () => {
  await sequelize.sync({ force: false });
  console.log(`app listning to port${Port}`);
});
