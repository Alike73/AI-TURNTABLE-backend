
const { Router } = require('express');
const { getSounds, saveSound, deleteSound, editSound } = require('./SoundsController');

const router = Router();

router.get('/', getSounds)
router.post('/saveSound', saveSound)
router.delete('/deleteSound', deleteSound); // /:_id
router.put('/editSound', editSound)


module.exports = router;