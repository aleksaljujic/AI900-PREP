const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

function signToken(user) {
  return jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' },
  );
}

// POST /api/auth/register
async function register(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }
  if (password.length < 4) {
    return res.status(400).json({ error: 'Password must be at least 4 characters.' });
  }

  try {
    const exists = await pool.query(
      'SELECT id FROM users WHERE username = $1',
      [username.trim()],
    );
    if (exists.rows.length > 0) {
      return res.status(409).json({ error: 'Username already taken.' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const { rows } = await pool.query(
      `INSERT INTO users (username, password)
       VALUES ($1, $2)
       RETURNING id, username, created_at`,
      [username.trim(), hashed],
    );

    const user = rows[0];

    // Create empty stats row for the new user
    await pool.query(
      `INSERT INTO user_stats (user_id) VALUES ($1) ON CONFLICT DO NOTHING`,
      [user.id],
    );

    return res.status(201).json({
      token: signToken(user),
      user: { id: user.id, username: user.username },
    });
  } catch (err) {
    console.error('register error:', err.message);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}

// POST /api/auth/login
async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    const { rows } = await pool.query(
      'SELECT id, username, password FROM users WHERE username = $1',
      [username.trim()],
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    // Ensure stats row exists (for seeded users that may not have one)
    await pool.query(
      `INSERT INTO user_stats (user_id) VALUES ($1) ON CONFLICT DO NOTHING`,
      [user.id],
    );

    return res.json({
      token: signToken(user),
      user: { id: user.id, username: user.username },
    });
  } catch (err) {
    console.error('login error:', err.message);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}

module.exports = { register, login };
