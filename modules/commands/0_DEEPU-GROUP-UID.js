module.exports.config = {
	name: "gid",	
  version: "1.0.0", 
	hasPermssion: 0,
	credits: "PREM BABU",
	description: "THIS BOT IS MADE BY PREM BABU", 
	commandCategory: "GROUP UID",
	usages: "GID",
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage(""+event.threadID, event.threadID, event.messageID);
};
