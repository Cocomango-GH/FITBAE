const express = require('express');
const router = express.Router();

const goalCtrl = require('../../controllers/api/goals')



// GET /api/goal
router.get('/', goalCtrl.index);
// GET /api/items/:id
router.get('/:id', goalsCtrl.show);



module.exports = router
