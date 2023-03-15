const { Comment, Riply, User } = require("../models/index");

const addComment = async (userId, classId, text) => {
  const response = await Comment.create({
    text: text,
    userId: userId,
    classId: classId,
  });
  return response;
};
const deleteComment = async (id, userId) => {
  const response = await Comment.destroy({
    where: {
      id: id,
      userId: userId,
    },
    include: [{ model: Riply }],
  });
  response.message = "comment delete successfully";
  return response;
};
const findCommentByUser = async (id, userId) => {
  const response = await Comment.findOne({
    where: { id: id, userId: userId },
    include: [{ model: User }],
  });
  return response;
};
const findAllComment = async (classId) => {
  const response = await Comment.findAll({
    where: { classId },
    include: [{ model: Riply }, { model: User }],
  });
  return response;
};
const addReply = async (userId, commentId, text) => {
  const response = await Riply.create({
    text: text,
    userId: userId,
    commentId: commentId,
  });
  return response;
};
const deleteReply = async (userId, replyId) => {
  const response = await Riply.destroy({
    where: { userId: userId, id: replyId },
  });
  return response;
};
const findAllReplyByCommentId = async (commentId) => {
  const response = await Riply.destroy({
    where: { commentId: commentId },
  });
  return response;
};

module.exports = {
  addComment,
  deleteComment,
  findCommentByUser,
  findAllComment,
  addReply,
  deleteReply,
  findAllReplyByCommentId,
};
