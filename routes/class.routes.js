const middelWare = require("../middelWare/authenctication.validators");
const classController = require("../controller/class.controller");
const routes = (app) => {
  app.get(
    "/ciphershools/api/v1/classes/:creatorId",
    middelWare.isAuthenticated,
    classController.getAllClasses
  );
  app.post(
    "/ciphershools/api/v1/class/add",
    middelWare.isAuthenticated,
    middelWare.checkTeacher,
    classController.addClass
  );
  app.patch(
    "/ciphershools/api/v1/class/update/:classId",
    middelWare.isAuthenticated,
    middelWare.checkTeacher,
    classController.updateClass
  );
  app.delete(
    "/ciphershools/api/v1/class/delete/:classId",
    middelWare.isAuthenticated,
    middelWare.checkTeacher,
    classController.deleteClass
  );
};
module.exports = routes;
