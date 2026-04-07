const express = require('express');
const router = express.Router();
const { getQuestions, getSets } = require('../controllers/questionsController');
const auth = require('../middleware/authMiddleware');

router.get('/sets', auth, getSets);
router.get('/', auth, getQuestions);

module.exports = router;
