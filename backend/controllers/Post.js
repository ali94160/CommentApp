import { Comment, Post } from "../models/models.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: Comment }],
    });
    await res.send(posts);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (req, res) => {
  try {
    const test = await Post.create(req.body);
    res.json({ message: "Post created" });
  } catch (error) {
    console.log(error);
  }
};
