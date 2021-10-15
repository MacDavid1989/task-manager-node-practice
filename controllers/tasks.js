const getAllTasks = (req, res) => {
  res.send("All tasks");
};

const createTask = (req, res) => {
  res.send("Created task");
};

const getTask = (req, res) => {
  res.send("Single task");
};

const updateTask = (req, res) => {
  res.send("Updated task");
};

const deleteTask = (req, res) => {
  res.send("Deleted task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
