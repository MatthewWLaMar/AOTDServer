const User = require("./user");
const Posting = require('./posting')
const Merchandise = require('./merchandise')
const Comments = require('./comments')
// create individual files for your models and import them here

// Setup Associations

module.exports = {
  User,
  Posting,
  Comments,
  Merchandise
};
