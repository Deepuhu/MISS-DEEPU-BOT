module.exports.config = {
	name: "kick",
	version: "1.0.1", 
	hasPermssion: 1,
	credits: "PREM BABU",
	description: "THIS BOT WAS MADE BY MR PREM BABU",
	commandCategory: "KIKED OF THE MEMBER", 
	usages: "PREFIX", 
	cooldowns: 0,
};

module.exports.languages = {
	"en": {
		"error": "सॉरी बॉस कुछ गड़बड़ है 🤔",
		"needPermssion": "सॉरी बॉस मैं इस ग्रुप में एडमिन नही हूं बिना एडमिन के मैं किसी को रिमूव नही कर सकता 😐✌️",
		"missingTag": "बॉस जिसको रिमूव करना है ग्रुप से उसको मेंशन करो साथ में 😐✌️"
	}
}

module.exports.run = async function({ api, event, getText, Threads }) {
	var mention = Object.keys(event.mentions);
	try {
		let dataThread = (await Threads.getData(event.threadID)).threadInfo;
		if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(getText("needPermssion"), event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("बॉस जिसको रिमूव करना है ग्रुप से उसको मेंशन करो साथ में 😐✌️",event.threadID);
		if (dataThread.adminIDs.some(item => item.id == event.senderID)) {
			for (const o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	} catch { return api.sendMessage(getText("error"),event.threadID) }
}
