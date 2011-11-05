var GitHubApi = require("github").GitHubApi;

var github = new GitHubApi(true);

module.exports = function(bot) {

	githubModule = new bot.Module();

	githubModule.load = function() {
		require('./lib/users.js')(bot, this, github);
	}

	return githubModule;

}
