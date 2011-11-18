var GitHubApi = require("github").GitHubApi;

var github = new GitHubApi(true);

module.exports = function(bot, module) {

	module.load = function() {
		require('./lib/users.js')(bot, this, github);
	};

};
