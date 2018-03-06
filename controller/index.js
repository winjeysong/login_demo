/**
 * @index js
 */

const userRegister = require('./register');
const userLogin = require('./login');
const userDisplay = require('./display');
const post = require('./post');

const { postSave, postsGet, postShow } = post;

module.exports = {
  userRegister,
  userLogin,
  userDisplay,
  postSave,
  postsGet,
  postShow,
};
