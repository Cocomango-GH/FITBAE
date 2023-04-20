const Goal = require('../../models/goals');
// const { createGoal } = require('../../src/utilities/goal-api');

module.exports = {
  show,
  index,
  create,
  update,
  delete: deleteGoal
}

async function show(req, res) {
  const goals = await Goal.findById(req.params.id);
  res.json(goals);
}

async function index(req, res) {
  const goal = await Goal.find({});
  res.json(goal);
}

async function create(req, res) {
  const goal = new Goal(req.body);
  await goal.save();
  res.json(goal);
}

async function update(req, res) {
  const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(goal);
}

async function deleteGoal(req, res) {
  const goal = await Goal.findByIdAndRemove(req.params.id);
  res.json(goal);
}
