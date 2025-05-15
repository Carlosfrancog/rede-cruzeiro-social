const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/posts.json');

function getAllPosts() {
  const rawData = fs.readFileSync(dataPath);
  return JSON.parse(rawData);
}

function addPost(newPost) {
  const post = getAllPosts();
  post.push(newPost);
  fs.writeFileSync(dataPath, JSON.stringify(post, null, 2));
}

module.exports = {
    getAllPosts,
    addPost
};