import { Comment, Post } from "../models/models.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
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
    await res.status(200).send(posts);
  } catch (error) {
    res.status(400);
  }
};

export const createPost = async (req, res) => {
  if (!req.body) res.status(400);
  try {
    const post = await Post.create(req.body);
    const createdPost = await Post.findOne({
      where: {
        id: post.id,
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
    res.status(200).send(createdPost);
  } catch (error) {
    res.status(400).send(error);
  }
};
