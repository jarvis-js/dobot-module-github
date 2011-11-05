
module.exports = function(bot, module, github) {

	bot.register(module.name, [
			'show me people following :user',
			'show me people following :user on github',
			'who is following :user',
			'who is following :user on github'
		],
		function(request, response, user) {
			github.getUserApi().getFollowers(user, function(err, followers) {
				var text;
				if(followers) {
					text = "The people following " + user + " on github are:\n" + followers.join('\n');
				}
				else {
					text = user + " has no followers on github";
				}
				response(text);
			});
		}
	);

}
