const { Router } = require('express');
const auth = require('../middleware/authMiddleware');
const { getStats, recordExam, updateTopics, resetStats } = require('../controllers/statsController');

const router = Router();

router.use(auth); // all stats routes require JWT

router.get('/', getStats);
router.post('/exam', recordExam);
router.put('/topics', updateTopics);
router.delete('/', resetStats);

module.exports = router;
