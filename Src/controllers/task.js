const Task = require("../models/task");

exports.getTasks = (req, res, next) => {
  Task.find({ owner: req.params.userId })
    .then((ta) => {
      res.status(200).json({
        data: ta,
      });
    })
    .catch((e) => {
      res.status(500).json({
        err: e,
      });
    });
};

exports.makeTask = (req, res, nest) => {
  const task = new Task({
    description: req.body.description,
    completed: req.body.completed,
    owner: req.params.userId,
  });
  task
    .save()
    .then((result) => {
      res.status(200).json({
        data: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err: err,
      });
    });
};

exports.updateTask = (req, res, next) => {
  const task = {
    description: req.body.description,
    completed: req.body.completed,
    owner: req.params.userId,
  };

  Task.updateOne({ _id: req.params.taskId }, { $set: task })
    .then((newTask) => {
      res.status(201).json({
        massage: "the update is done",
        data: newTask,
      });
    })
    .catch((e) => {
      res.status(404).json({
        err: err,
      });
    });
};

exports.deleteTask = (req, res, next) => {
  Task.findByIdAndDelete({ _id: req.params.taskId })
    .then((docs) => {
      res.status(201).json({
        massage: "the delete task is done",
        // data: docs,
      });
    })
    .catch((e) => {
      res.status(404).json({
        err: err,
      });
    });
};
