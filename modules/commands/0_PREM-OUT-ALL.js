module.exports.config = {
	name: "outall",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "PREM BABU",
	description: "THIS BOT WAS MADE BY MR PREM BABU",
	commandCategory: "ALL OUT OF THE GROUP BOT",
	usages: "PREFIX",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "The text you want to send to everyone",
			type: 'Document',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
    const permission = ["100070531069371","100013657129471","100043895143106"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("सॉरी बॉस मुझे सिर्फ मेरे प्रेम बाबू ही सारे ग्रुप से लीव करवा सकते है 🙂✌️", event.threadID, event.messageID);
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
		api.sendMessage('प्रेम बॉस मैं सभी ग्रुप से निकल गया 🙂✌️', event.threadID);
	});
  }
