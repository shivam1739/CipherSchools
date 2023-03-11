const authServices = require("../services/auth.services");
const roleService = require("../services/role.services");

const isAuthenticated = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.json({
      status: 401,
      message: "JWT token is missing",
      data: {},
      err: "Invalid or missing argument in request header",
    });
  }
  const response = authServices.verifyToken(token);
  if (!response) {
    return res.json({
      status: 401,
      message: "JWT token is invelid",
      data: {},
      err: "Invalid or missing argument in request header",
    });
  }
  const user = await authServices.getuserbyEmail(response.email);
  if (!user) {
    return res.json({
      status: 401,
      message: "JWT token send for an invalid user",
      data: {},
      err: "Invalid credentials  ",
    });
  }
  req.user = user;
  next();
};
const checkAdmin = async (req, res, next) => {
  const user = req.user;
  const adminRole = await roleService.getRoleByName("admin");
  const isAdmin = await user.hasRole(adminRole);
  if (!isAdmin) {
    return res.json({
      status: 401,
      message: "User is not admin",
      data: {},
      err: "Not authorized",
    });
  }

  next();
};

const checkTeacher = async (req, res, next) => {
  const user = req.user;
  //   const adminRole = await roleService.getRoleByName("admin")
  const teacher = await roleService.getRoleByName("teacher");
  //   const isAdmin = await user.hasRole(adminRole);

  const isTeacher = await user.hasRole(teacher);
  console.log(user, isTeacher);
  if (!isTeacher) {
    return res.json({
      status: 401,
      message: "User is not authorized",
      data: {},
      err: "Not authorized",
    });
  }

  next();
};

module.exports = { isAuthenticated, checkAdmin, checkTeacher };
