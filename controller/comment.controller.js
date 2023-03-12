const commentServices = require("../services/comment.services");
const addComment = async (req, res) => {
  if (req.user.id) {
    const response = await commentServices.addComment(
      req.user.id,
      req.params.classId,
      req.body.text
    );
    return res.json({
      code: 201,
      success: true,
      data: response,
    });
  } else {
    return res.json({
      code: 404,
      success: true,
      message: "user not found",
    });
  }
};
const deleteComment = async (req, res) => {
  if (req.params.commentId) {
    const comment = await commentServices.findCommentByUser(
      req.params.commentId,
      req.user.id
    );
    if (comment) {
      const response = await commentServices.deleteComment(
        req.params.commentId,
        req.user.id
      );
      return res.json({
        code: 201,
        message: "comment delete successfully",
        success: true,
        data: response,
      });
    } else {
      return res.json({
        code: 201,
        message: "comment not found",
        success: true,
      });
    }

    // console.log(response, "================================");
  } else {
    return res.json({
      code: 404,
      success: true,
      message: "commentId not found",
    });
  }
};
const findAllComment = async (req, res) => {
  const response = await commentServices.findAllComment(req.params.classId);
  return res.json({
    code: 201,
    message: "successfully find all comments",
    success: true,
    data: response,
  });
};

const addReply = async (req, res) => {
  const response = await commentServices.addReply(
    req.user.id,
    req.params.commentId,
    req.body.text
  );
  return res.json({
    code: 201,
    message: "comment add",
    success: true,
    data: response,
  });
};
const deleteReply = async (req, res) => {
  const response = await commentServices.deleteReply(
    req.user.id,
    req.params.commentId
  );
  return res.json({
    code: 201,
    message: "comment deleted",
    success: true,
    data: response,
  });
};

module.exports = {
  addComment,
  deleteComment,
  findAllComment,
  addReply,
  deleteReply,
};
