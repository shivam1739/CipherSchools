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
      const response = like
        ? await likeServices.removeLike(userId, req.body.classId)
        : await likeServices.addLike(userId, req.body.classId);
      //   console.log(response);
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
  const response = await likeServices.countLike();
  return res.json({
    code: 404,
    success: true,
    message: response,
  });
};

module.exports = {
  likeStatus,
  countLike,
};
