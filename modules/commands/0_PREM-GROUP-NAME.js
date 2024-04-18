module.exports.config = {
	name: "groupname",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "PREM BABU",
	description: "THIS BOT WAS MADE BY MR PREM BABU",
	commandCategory: "CHANGE GROUP NAME", 
	usages: "PREFIX", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var name = args.join(" ")
	if (!name) api.sendMessage("बॉस साथ में ग्रुप का नाम लिखो जो आप रखना चाहते हो 😐✌️", event.threadID, event.messageID)
	else api.setTitle(name, event.threadID, () => api.sendMessage(`अब इस ग्रुप का नाम ये है 👉 ${name}\n━━━━━━━━━━━━━━━━━━━━━━━\nOWNER  𒁍 MR PREM BABU 🌺`, event.threadID, event.messageID));
}
