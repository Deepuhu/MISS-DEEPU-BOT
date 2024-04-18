module.exports.config = {
	name: "groupemoji",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "PREM BABU",
	description: "THIS BOT WAS MADE BY MR PREM BABU",
	commandCategory: "CHANGE GROUP EMOJI", 
	usages: "PREFIX", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("बॉस साथ में एक इमोजी डालो जो सेट करना है 😐✌️", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`बॉस मैंने ग्रुप का इमोजी बदल दिया\nअब इस ग्रुप का ये वाला इमोजी है 👉 ${emoji}\n━━━━━━━━━━━━━━━━━━━━━━━\nOWNER  𒁍 MR PREM BABU 🌺`, event.threadID, event.messageID));
}
