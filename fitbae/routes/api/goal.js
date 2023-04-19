const express = require('express');
const router = express.Router();

const goalCtrl = require('../../controllers/api/goal')



// GET /api/goal
router.get('/', goalCtrl.index);
// GET /api/items/:id
router.get('/:id', goalCtrl.show);



module.exports = router
