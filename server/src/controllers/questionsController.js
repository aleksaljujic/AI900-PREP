const Question = require('../models/Question');

const getQuestions = async (req, res) => {
  try {
    const set = req.query.set || 'standard';
    const questions = await Question.find({ set }).lean();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSets = async (req, res) => {
  try {
    const sets = await Question.distinct('set');
    res.json(sets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getQuestions, getSets };
