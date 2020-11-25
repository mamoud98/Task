const express = require("express");
const router = express.Router();

const {
  getTasks,
  makeTask,
  updateTask,
  deleteTask,
} = require("../../../controllers/task");


const { verify } = require("../../../utils/JWTManager");

router.get("/task/:userId", verify, getTasks);
router.post("/task/:userId", verify, makeTask);
router.put("/task/:taskId/:userId", verify, updateTask);
router.delete("/task/:taskId/:userId", verify, deleteTask);

module.exports = router;
