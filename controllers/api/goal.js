const Goal = require('../../models/goals');


module.exports = {
  show,
  index,
  create,
  update,
  delete: deleteGoal
}

async function show(req, res) {
  try {
    const goal = await Goal.findById(req.params.id)
    res.json(goal)
  } catch (err) { 
    res.status(500).json(err)
  }
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
  const goal = await Goal.findByIdAndUpdate( req.params.id, req.body, { new: true });
  console.log(req.params.id)
  // await goal.save()
  res.json(goal);
}

async function deleteGoal(req, res) {
  const goal = await Goal.findByIdAndRemove(req.body.id);
  res.json(goal);
  console.log(req.body)
}

async function show(req, res) {
  try {
    const goal = await Goal.findById(req.params.id)
    res.json(goal)
  } catch (err) { 
    res.status(500).json(err)
  }
}