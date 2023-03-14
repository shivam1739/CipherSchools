const middelWare = require("../middelWare/authenctication.validators");
const likeController = require("../controller/like.controller");
const routes = (app) => {
  app.get(
    "/ciphershools/api/v1/class/:classId/like",
    middelWare.isAuthenticated,
    likeController.likeStatus
  );
  app.get(
    "/ciphershools/api/v1/like/:classId",
    middelWare.isAuthenticated,
    likeController.countLike
  );
};
module.exports = routes;
