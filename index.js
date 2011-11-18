var GitHubApi = require("github").GitHubApi;

var github = new GitHubApi(true);

module.exports = function(bot, module) {

	require('./lib/users.js')(bot, module, github);

};
