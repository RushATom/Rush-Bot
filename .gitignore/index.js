const Disocrd - require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready',function() {
	bot.user.setGame("Command: :help);
	console.log("Connected");
});

bot.login("NzY3ODYxMzc0ODk3ODgxMTM4.X44EoQ.IxP5wlO2EaZmCBUmtyisALkr42A");


bot.on('message', message => {
	if (message.content === prefix + "help"){
		message.chanel.sendMessage("Liste des commandes: \n !tt \n !fabriquant");
	}
	
	if (message.content === prefix + "tt"){
		message.channel("Création du bot le _21/10/2020_ à _9h35_");
		console.log("Commande effectué");
	}
	
	if (message.content === prefix + "fabriquant"){
		message.reply("_Ce bot à été crée par RushATom_");
		console.log("Commande effectué");
	}
});		
