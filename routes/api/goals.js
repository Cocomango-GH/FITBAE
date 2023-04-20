const express = require('express');
const router = express.Router();

const goalCtrl = require('../../controllers/api/goal')



// GET /api/goal
router.get('/', goalCtrl.index);
// GET /api/goal/:id
router.get('/:id', goalCtrl.show);
// Post api/goal/
router.post('/', goalCtrl.create);


// // //Put newlyadded goal update goal display goal 
router.put('/:id', goalCtrl.update);

// DELETE /api/goal/:id newly added 
router.delete('/:id', goalCtrl.delete);




module.exports = router

