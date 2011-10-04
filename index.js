
var GitHubApi = require("github").GitHubApi;

var github = new GitHubApi(true);

module.exports = function(bot) {
	require('./lib/users.js')(bot, github);
}