import express from "express";
import Todo from "../models/Todo.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const todo = new Todo({
    userId: req.user.id,
    task: req.body.task,
  });
  await todo.save();
  res.json(todo);
});

router.get("/", auth, async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
});

router.delete("/:id", auth, async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
