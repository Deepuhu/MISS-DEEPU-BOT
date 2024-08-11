module.exports.config = {
  name: "inf",
  version: "1.0.1", 
  hasPermssion: 0,
  credits:"PREM BABU" ,
  description: "THIS BOT IS MADE BY PREM BABU",
  usePrefix: true,
  commandCategory: "INFORMATION",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Kolkata").format("DD/MM/YYYY");
var link =                                     
["https://i.imgur.com/9TBSatQ.jpeg","https://i.imgur.com/lC6pcRj.jpeg","https://i.imgur.com/9qdpQR6.jpeg"];
var callback = () => api.sendMessage({body:`┏━━━━━┓\n     दीपू-बाबू                    ✧═══•❁🙊❁•═══✧\n┗━━━━━┛\n\n\n         ❁ ═════════ ❃•❃ ═════════ ❁\n                            ♥️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ♥️\n         ❁ ═════════ ❃•❃ ═════════ ❁\n\n\n\n🌺  [ 1 ]  𒁍 BOT NAME   →   ${global.config.BOTNAME}\n🌺  [ 2 ]  𒁍 BOT ADMIN   →   DEEPU-BABU\n🌺  [ 3 ]  𒁍 BOT  PREFIX   →   [ ${global.config.PREFIX} ]\n🌺  [ 4 ]  𒁍  DATE   → ${juswa}\n🌺  [ 5 ]  𒁍  BOT RUNNING TIME  →  [ ${hours}:${minutes}:${seconds} ]\n🌺  [ 6 ]  𒁍  https://www fb.com/id=100090\n🌺  [ 7 ]  𒁍 WHATSAPP → [ +91 9336xxxx36 ]\n🌺  [ 8 ]  𒁍 INSTAGRAM →  DEEPU_.STATUS\n🌺  [ 9 ]  𒁍 YOUTUBE  →  DEEPU FILM\n🌺  [ 10 ]  𒁍 GITHUB  →  @DEEPU-BABU\n🌺THANKYOU FOR USING ${global.config.BOTNAME} BOT♥️\n\n\n
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
