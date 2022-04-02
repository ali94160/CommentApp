import { Comment, Post } from "../models/models.js";

export const createComment = async (req, res) => {
  if (!req.body) res.status(400);
  try {
    const findPost = await Post.findOne({
      where: {
        id: req.body.postId,
      },
    });

    if (!findPost) res.status(400);
    await Comment.create(req.body);
    const post = await Post.findOne({
      where: {
        id: req.body.postId,
      },
      attributes: ["id", "author", "content", "createdAt"],
      include: [
        {
          model: Comment,
          attributes: ["id", "author", "content", "createdAt"],
        },
      ],
      order: [
        ["id", "DESC"],
        [Comment, "createdAt", "DESC"],
      ],
    });
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};
