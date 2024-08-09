//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "THANK YOU",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", 
	description: "THIS BOT IS PREM SHARMA",
	commandCategory: "NO PREFIX",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("welcome") ||
     react.includes("Welcome") || react.includes("WELCOME") || react.includes("स्वागत") ||
react.includes("WELCOME") ||
react.includes("Walcome")) {
		var msg = {
				body: `धन्यवाद 🙂🖐️`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
