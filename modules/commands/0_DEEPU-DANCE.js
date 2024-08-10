const fs = require("fs");
module.exports.config = {
  name: "DANCE",
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
  if(react.includes("dance") ||
     react.includes("Dance") || react.includes("nach") || react.includes("Nach") ||
react.includes("NACH") ||
react.includes("DANCE")) {
    var msg = {
        body: `𝐍𝐀𝐂𝐇𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐍𝐀𝐂𝐇𝐎 🙂🤟 ❜`,attachment: fs.createReadStream(__dirname + `/DEEPU-BABU/DANCE (1).gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤓", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
