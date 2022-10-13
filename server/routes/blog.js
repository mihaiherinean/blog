const express = require("express");
const blogRouter = require("express").Router();

let Blog = require("../models/blog.model");

blogRouter.route("/").get(async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(400).json("Error" + err);
  }
});

blogRouter.route("/").post(async (req, res) => {
  const newBlog = new Blog(req.body);
  try {
    newBlog.save();
    res.json(newBlog);
  } catch (err) {
    res.status(400).json((err) => "Error " + err);
  }
});

blogRouter.route("/:id").get(async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
      res.json(blog);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

blogRouter.route("/:id").delete(async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    res.json("Blog deleted");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

blogRouter.route("/:id").put(async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    blog.title = req.body.title;
    blog.image = req.body.image;
    blog.content = req.body.content;
    blog.save();
    res.json(blog);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = blogRouter;
