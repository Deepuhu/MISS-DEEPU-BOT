module.exports.config = {
	name: "unsend",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "PREM BABU",
	description: "THIS BOT WAS MADE BY MR PREM BABU",
	commandCategory: "BOT MESSAGE DELET",
	usages: "PREFIX",
	cooldowns: 0
};

module.exports.languages = {
	"en": {
		"returnCant": "किसी और का मैसेज मैं कैसे डिलीट करूं 😐✌️",
		"missingReply": "मेरे जिस मैसेज को डिलीट करना है उस मैसेज पे रिप्लाई कर के लिखो 😐✌️"
	}
}

module.exports.run = function({ api, event, getText }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
	return api.unsendMessage(event.messageReply.messageID);
	}
