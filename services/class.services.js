const { Classes, Comment, Riply, Like } = require("../models/index");
const addClass = async (body, id) => {
  console.log(body, id);
  const response = await Classes.create({
    name: body.name,
    class: body.link,
    creatorId: id,
  });
  return response;
};
const deleteClass = async (classId, id) => {
  const response = await Classes.destroy({
    where: {
      id: classId,
      creatorId: id,
    },
  });
  return response;
};
const updateClass = async (data, classId) => {
  const response = await Classes.update(
    { name: data.name, class: data.link },
    {
      where: {
        id: classId,
      },
    }
  );
  return response;
};
const getAllClasses = async (creatorId) => {
  const response = await Classes.findAll({
    include: [{ model: Comment }],
    // include: [{ model: Like }],
  });
  return response;
};
const getClassByPk = async (id) => {
  const response = await Classes.findByPk(id, {
    include: [{ model: Comment }],
  });
  return response;
};

module.exports = {
  addClass,
  deleteClass,
  updateClass,
  getAllClasses,
  getClassByPk,
};
