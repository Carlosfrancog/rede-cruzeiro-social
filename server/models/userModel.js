const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/users.json');

function getAllUsers() {
  const rawData = fs.readFileSync(dataPath);
  return JSON.parse(rawData);
}

function findUserByEmail(email) {
  const users = getAllUsers();
  return users.find(user => user.email === email);
}

function addUser(newUser) {
  const users = getAllUsers();
  users.push(newUser);
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
}

module.exports = {
  getAllUsers,
  findUserByEmail,
  addUser
};