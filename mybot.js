const Discord = require("discord.js");
const client = new Discord.Client();


const prefix = ">";


client.on("message", (message) => {
	if (!message.content.startsWith(prefix)) return;

	if (message.content.startsWith(prefix + "ayuda")) {
		message.channel.send("No tengo muchos comandos aún, puedes probar con **roster**");
	}else if (message.content.startsWith(prefix + "roster")) {
		const embed = {
			"title": "Info Principal",
			"description": "El remi es weco\n\n\n",
			"color": 8134174,
			"footer": {
			"icon_url": "https://i.imgur.com/6lmtFAq.png",
			"text": "~ The Lost Fantasy ~"
			},
			"author": {
			"name": "WoE Sabado",
			"icon_url": "https://i.imgur.com/yOFycg6.png"
			},
			"thumbnail": {
			"url": "https://i.imgur.com/6lmtFAq.png"
			},
			"fields": [
			{
				"name": "Roster TLF",
				"value": "Weon1 OLP\nWeon2 DLP\nWeon3 DLP\nWeon4 Clown\nBoludo5 HW\nWeon6 Devo\nAsdf\nAsdf\nAsdf\nAsdf\nAsdf\nAsdf\nAsdf\nAsdf\n\n\n\n"
			},
			{
				"name": "Info Extra",
				"value": "blablabla oliolioli adsdassadsa faeffad"
			}
			]
		};
		message.channel.send({embed});
	}
});




client.login("NDIwMTY1MDAwMTY2ODk5NzIy.DX6wuw.4VbYSDz6nUHIeOMnewyeogsatlk");
