const Task = require('../models/tasks');

const getAllTasks = (req, res) => {
    res.send('All items from file');
}

const createTasks = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task });
}

const getTask = (req, res) => {
    res.json({id: req.params.id});
}

const updateTask = (req, res) => {
    res.send('Update task');
}

const deleteTask = (req, res) => {
    res.send('Delete task');
}

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};