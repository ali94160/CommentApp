import express from "express";
import { getPosts, createPost } from "../controllers/Post.js";
import { createComment } from "../controllers/Comment.js";

const router = express.Router();

router.get("/rest/posts", getPosts);
router.post("/rest/post", createPost);
router.post("/rest/comment", createComment);

export default router;
