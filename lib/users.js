module.exports = function(bot, module, github) {

	module.addCommand([
			'show me people following :user',
			'show me people following :user on github',
			'who is following :user',
			'who is following :user on github'
		],
		function(request, user) {
			github.getUserApi().getFollowers(user, function(err, followers) {
				var text;
				if(followers) {
					text = "The people following " + user + " on github are:\n" + followers.join('\n');
				}
				else {
					text = user + " has no followers on github";
				}
				request.reply = text;
				bot.reply(request);
			});
		}
	);

};
