var GitHubApi = require("github").GitHubApi;

var github = new GitHubApi(true);

module.exports = function(bot) {

	var module = new bot.Module();

	module.load = function() {
		require('./lib/users.js')(bot, this, github);
	};

	return module;

};
