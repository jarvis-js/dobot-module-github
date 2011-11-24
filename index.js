var GitHubApi = require("github").GitHubApi;

var github = new GitHubApi();

module.exports = function(bot, module) {

	require('./lib/users.js')(bot, module, github);

};
