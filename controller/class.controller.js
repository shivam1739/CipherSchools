const classServices = require("../services/class.services");
const addClass = async (req, res) => {
  if (req.body.name && req.body.link) {
    try {
      const response = await classServices.addClass(req.body, req.user.id);
      return res.json({
        code: 200,
        success: true,
        data: response,
      });
    } catch (err) {
      console.error(err);
    }
  } else {
    return res.json({
      code: 400,
      success: true,
    });
  }
};
const deleteClass = async (req, res) => {
  if (req.params) {
    try {
      const response = await classServices.deleteClass(
        req.params.classId,
        req.user.id
      );
      return res.json({
        code: 200,
        success: true,
        data: response,
      });
    } catch (err) {
      console.error(err);
    }
  } else {
    return res.json({
      code: 400,
      success: true,
    });
  }
};
const updateClass = async (req, res) => {
  if (req.body && req.params.classId) {
    try {
      const response = await classServices.updateClass(
        req.body,
        req.params.classId
      );
      return res.json({
        code: 200,
        success: true,
        data: response,
      });
    } catch (err) {
      console.error(err);
    }
  } else {
    return res.json({
      code: 400,
      success: true,
    });
  }
};
const getAllClasses = async (req, res) => {
  const response = await classServices.getAllClasses();
  return res.json({
    messeage: "successfully find all classes",
    code: 200,
    success: true,
    data: response,
  });
};
const getClassByPk = async (req, res) => {
  const response = await classServices.getClassByPk(req.params.classId);
  if (!response) {
    return res.json({
      messeage: "classes not found",
      code: 400,
      success: true,
      data: response,
    });
  }
  return res.json({
    messeage: "successfully find class",
    code: 200,
    success: true,
    data: response,
  });
};
module.exports = {
  addClass,
  deleteClass,
  updateClass,
  getAllClasses,
  getClassByPk,
};
