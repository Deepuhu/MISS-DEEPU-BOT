module.exports.config = {
  name: "leave",
  eventType: ["log:unsubscribe"],
  version: "1.0.0",
  credits: "PREM-BABU",
  description: "THIS BOT WAS MADE BY MR PREM BABU",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "PREM BABU","PREM-2");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "PREM BABU", "PREM-2");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
  const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
  const { join } =  global.nodemodule["path"];
  const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Kolkata").format("HH");
  const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? "खुद ही भाग गया 😐👈" : "एडमिन ने गुस्से में निकाल दिया 😑👈";
  const path = join(__dirname, /cache/botjoin.mp4);
  const pathGif = join(path, `${threadID}.mp4`);
  var msg, formPush

  if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "┏━━━━━┓\n    प्रेम-बाबू               ✧═•❁𝗪𝗘𝗟𝗖𝗢𝗠𝗘❁•═✧\n┗━━━━━┛\n\nसुकर है एक ठरकी इस ग्रुप में कम हो गया 😃✌️\nउसका नाम है 𒁍 {name}\nरीजन 𒁍 {type}\nWISH YOU HAVE A {session} || {time} ♥️🌺♥️🌺♥️\n════════════════════════ ❁\nCREATER BY MR PREM PROJECT\n" : msg = data.customLeave;
  msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "GOOD MORNING" : 
    hours > 10 && hours <= 12 ? "GOOD AFTERNOON" :
    hours > 12 && hours <= 18 ? "GOOD EVENING" : "GOOD NIGHT").replace(/\{time}/g, time);  

  const randomPath = readdirSync(join(__dirname, "PREM BABU", "PREM-2"));

  if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
  else if (randomPath.length != 0) {
    const pathRandom = join(__dirname, "PREM BABU", "PREM-2"`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
    formPush = { body: msg, attachment: createReadStream(pathRandom) }
  }
  else formPush = { body: msg }

  return api.sendMessage(formPush, threadID);
 }
