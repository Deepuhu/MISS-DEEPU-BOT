const fs = require("fs");
module.exports.config = {
  name: "MISS YOU",
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
  if(react.includes("miss you") ||
     react.includes("Miss you") || react.includes("miss u") || react.includes("Miss u") ||
react.includes("Mich u") ||
react.includes("MISS YOU")) {
    var msg = {
        body: ``,attachment: fs.createReadStream(__dirname + `/PREM-BABU/PREM-GIF/MISS-YOU.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫣", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
