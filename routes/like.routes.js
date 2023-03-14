const middelWare = require("../middelWare/authenctication.validators");
const likeController = require("../controller/like.controller");
const routes = (app) => {
  app.post(
    "/ciphershools/api/v1/like",
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
