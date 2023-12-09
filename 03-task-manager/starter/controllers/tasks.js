const getAllTasks = (req, res) => {
    res.send('All items from file');
}

const createTasks = (req, res) => {
    res.send('Create task');
}

const getTask = (req, res) => {
    res.send('Single task');
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