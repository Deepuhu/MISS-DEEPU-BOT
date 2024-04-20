module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "PREM BABU",
	description: "THIS BOT WAS MADE BY MR PREM BABU",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
  const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "खुद ही भाग गया 😐👈" : "एडमिन ने गुस्से में निकाल दिया 😑👈";
  (typeof data.customLeave == "undefined") ? msg = "✧══════•❁𝗚𝗢𝗢𝗗𝗕𝗬𝗘❁•══════✧\n\nसुकर है एक ठरकी इस ग्रुप में कम हो गया 😃✌️\nउसका नाम है 𒁍 {name}\nरीजन 𒁍 {type}\n════════════════════════ ❁\nCREATER BY MR PREM PROJECT ♥️" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);
  
  var link = [  
"https://i.ibb.co/2818hs0/1.gif",
"https://i.ibb.co/zSQM3w3/2.gif",
"https://i.ibb.co/f96Z9XQ/3.gif",
"https://i.ibb.co/PmFmWcv/4.gif",
"https://i.ibb.co/P1tFCPH/5.gif",
"https://i.ibb.co/grCXHSx/6.jpg"    
  ];
  var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashO.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashO.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashO.jpg")).on("close", () => callback());
                                                                  }
