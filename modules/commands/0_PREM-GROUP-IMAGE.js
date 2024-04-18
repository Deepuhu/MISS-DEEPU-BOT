const fs = require("fs");
const axios = require("axios")
module.exports.config = {
	name: "groupimage",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "PREM BABU",
	description: "THIS BOT WAS MADE BY MR PREM BABU",
	commandCategory: "CHANGE GROUP DP", 
	usages: "PREFIX", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event }) => {
	if (event.type !== "message_reply") return api.sendMessage("बॉस किसी एक डीपी को रिप्लाई कर के कमांड दो", event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("बॉस किसी एक डीपी को रिप्लाई कर के कमांड दो", event.threadID, event.messageID);
	if (event.messageReply.attachments.length > 1) return api.sendMessage(`बॉस सिर्फ एक फोटो को रिप्लाई देके कमांड दो`, event.threadID, event.messageID);
	var abc = event.messageReply.attachments[0].url
	let pathImg = __dirname + '/cache/loz.png';
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(pathImg, Buffer.from(getdata, 'utf-8'));
    return api.changeGroupImage(fs.createReadStream(__dirname + '/cache/loz.png'), event.threadID, () => fs.unlinkSync(pathImg), event.messageID);
  }
