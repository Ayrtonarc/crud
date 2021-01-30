const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/', studentController.list);
router.post('/add', studentController.save);
router.put('/update/:id', studentController.update);
router.delete('/delete/:id', studentController.delete);

module.exports = router;