const bcrypt = require('bcryptjs');

const adjectives = ['swift', 'bright', 'calm', 'bold', 'keen'];
const nouns = ['panda', 'falcon', 'tiger', 'eagle', 'wolf'];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Generate a single user object (plain, not yet hashed).
 * @param {Partial<{username: string, password: string}>} overrides
 */
function makeUser(overrides = {}) {
  const username =
    overrides.username ||
    `${randomItem(adjectives)}_${randomItem(nouns)}${Math.floor(Math.random() * 100)}`;

  return {
    username,
    password: overrides.password || 'test1234',
  };
}

/**
 * Make N users with hashed passwords.
 */
async function makeUsers(n = 1, overrides = {}) {
  const users = [];
  for (let i = 0; i < n; i++) {
    const user = makeUser(overrides);
    const hashed = await bcrypt.hash(user.password, 10);
    users.push({ ...user, password: hashed });
  }
  return users;
}

module.exports = { makeUser, makeUsers };
