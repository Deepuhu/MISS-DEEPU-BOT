const fs = require("fs");
module.exports.config = {
  name: "GOOD NIGHT",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "PREM BABU", 
  description: "THIS BOT WAS MADE BY MR PREM BABU",
  commandCategory: "NO PREFIX",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("good night") ||
     react.includes("gud night") || react.includes("gn") || react.includes("GN") ||
react.includes("Gn") ||
react.includes("GOOD NIGHT")) {
    var msg = {
        body: `𝐆𝐎𝐎𝐃 𝐍𝐈𝐆𝐇𝐓 😴 𝐒𝐖𝐄𝐄𝐓 𝐃𝐑𝐄𝐀𝐌 😇`,attachment: fs.createReadStream(__dirname + `/DEEPU-BABU/NIGHT (1).gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😴", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
