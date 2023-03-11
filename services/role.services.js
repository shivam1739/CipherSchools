const { Role, User } = require("../models/index");
const authServices = require("../services/auth.services");

const addRoleToUser = async (userEmail, roleName) => {
  try {
    const user = await authServices.getuserbyEmail(userEmail);
    console.log(user);
    const role = await getRoleByName(roleName);
    if (user && role) {
      const data = await user.addRole(role);
      console.log(user, role, data, "============data in addd role");

      return data;
    }
    return;
  } catch (err) {
    console.log(err);
  }
};

const removeRoleFromUser = async (userEmail, roleName) => {
  try {
    const user = await authServices.getuserbyEmail(userEmail);
    const role = await getRoleByName(roleName);
    //   console.log(role);
    const data = await user.removeRole(role);
    return data;
  } catch (err) {
    console.log(err);
  }
};
const getRoleByName = async (roleName) => {
  try {
    const response = await Role.findOne({
      where: {
        name: roleName,
      },
    });
    console.log(response, "rolename");
    return response;
  } catch (err) {
    console.log(err);
  }
};
/*const getRoleById = async (id) => {
  try {
    const response = await Role.findByPk();
    return response;
  } catch (err) {
    console.log(err);
  }
};*/
module.exports = {
  addRoleToUser,
  removeRoleFromUser,
  getRoleByName,
};
