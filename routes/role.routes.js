const roleController = require("../controller/role.controller");
const AuthenticationMiddleWare = require("../middelWare/authenctication.validators");

const routes = (app) => {
  app.post(
    "/ciphershools/api/v1/role",
    AuthenticationMiddleWare.isAuthenticated,
    roleController.addRoleToUser
  );
  app.delete(
    "/ciphershools/api/v1/role",
    AuthenticationMiddleWare.isAuthenticated,
    AuthenticationMiddleWare.checkAdmin,
    roleController.removeRoleFromUser
  );
};

module.exports = routes;
