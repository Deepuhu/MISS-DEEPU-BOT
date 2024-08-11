const fs = require("fs");
module.exports.config = {
  name: "bye",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ARIF BABU", 
  description: "Just Respond",
  usePrefix: true,
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("bye") ||
     react.includes("BYE") || react.includes("Bye") || react.includes("अलविदा") ||
react.includes("byyy") ||
react.includes("byy")) {
    var msg = {
        body: `𝐁𝐘𝐄 𝐁𝐘𝐄 🙋‍♂ 𝐓𝐀𝐊𝐄 𝐂𝐀𝐑𝐄 𝐁𝐀𝐁𝐔 😇`,attachment: fs.createReadStream(__dirname + `/DEEPU-BABU/BYE (1).gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
