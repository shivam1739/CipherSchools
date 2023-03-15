const likeServices = require("../services/like.services");
const classServices = require("../services/class.services");

const likeStatus = async (req, res) => {
  const userId = req.user.id;
  if (userId && req.params.classId) {
    const video = await classServices.getClassByPk(req.params.classId);

    if (video) {
      const like = await likeServices.getLikesByUser(
        userId,
        req.params.classId
      );
      let response = undefined;
      if (like) {
        response =
          like.like == true
            ? await likeServices.updateLike(userId, req.params.classId, false)
            : await likeServices.updateLike(userId, req.params.classId, true);
      } else {
        response = await likeServices.addLike(userId, req.params.classId);
      }
      return res.json({
        code: 200,
        success: true,
        data: response,
      });
    } else {
      return res.json({
        code: 404,
        success: true,
        message: "video not found",
      });
    }
  } else {
    return res.json({
      code: 404,
      success: true,
      message: "plesase provide sufficent data",
    });
  }
};
const countLike = async (req, res) => {
  const response = await likeServices.countLike(req.params.classId);
  return res.json({
    code: 201,
    success: true,
    message: response,
  });
};

module.exports = {
  likeStatus,
  countLike,
};
