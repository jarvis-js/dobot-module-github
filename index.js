
var GitHubApi = require("github").GitHubApi;

var github = new GitHubApi(true);

module.exports = function(bot) {
	var module_name = 'github';
	require('./lib/users.js')(bot, module_name, github);
}
