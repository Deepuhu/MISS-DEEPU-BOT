const fs = require("fs");
module.exports.config = {
  name: "GOOD MORNING",
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
  if(react.includes("good morning") ||
     react.includes("gud morning") || react.includes("gm") || react.includes("GM") ||
react.includes("Gm") ||
react.includes("GOOD MORNING")) {
    var msg = {
        body: ``,attachment: fs.createReadStream(__dirname + `/PREM-BABU/PREM-GIF/GOOD-MORNING.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥱", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
