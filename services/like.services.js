const { Like } = require("../models/index");
const addLike = async (userId, classId) => {
  const response = await Like.create({
    like: true,
    userId: userId,
    classId: classId,
  });
  return response;
};
const removeLike = async (userId, classId) => {
  const response = await Like.destroy({
    where: {
      classId: classId,
      userId: userId,
    },
  });
  return response;
};
const getLikesByUser = async (userId, classId) => {
  const response = await Like.findOne({
    where: {
      classId: classId,
      userId: userId,
    },
  });
  return response;
};
const countLike = async (classId) => {
  const response = await Like.findAndCountAll({});
  return response;
};

module.exports = {
  addLike,
  removeLike,
  getLikesByUser,
  countLike,
};
