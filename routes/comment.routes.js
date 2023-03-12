const commentController = require("../controller/comment.controller");
const middelWare = require("../middelWare/authenctication.validators");
const routes = (app) => {
  app.post(
    "/ciphershools/api/v1/:classId/comment",
    middelWare.isAuthenticated,
    commentController.addComment
  );
  app.delete(
    "/ciphershools/api/v1/delete/:commentId",
    middelWare.isAuthenticated,
    commentController.deleteComment
  );
  app.get(
    "/ciphershools/api/v1/find/:classId",
    middelWare.isAuthenticated,
    commentController.findAllComment
  );
  app.post(
    "/ciphershools/api/v1/add/:classId/:commentId/",
    middelWare.isAuthenticated,
    commentController.addReply
  );
  app.delete(
    "/ciphershools/api/v1/delete/:classId/:commentId",
    middelWare.isAuthenticated,
    commentController.deleteReply
  );
};

module.exports = routes;
