module.exports.config = {
  name: "PREM-BOT-4",
  version: "1.0.1",
  hasPermission: 0,
  credits: "PREM BABU",
  description: "THIS BOT IS MADE BY PREM BABU",
  commandCategory: "TYPING BOT",
  usages: "BOT",
  cooldowns: 5,
  usePrefix: false
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  var { threadID, messageID } = event;

  var tl = [];

  var rand = tl[Math.floor(Math.random() * tl.length)];
  let yan = event.body ? event.body.toLowerCase() : '';

  if (yan.indexOf("bot") === 0 ||
     (yan.indexOf("taklu") === 0 )) {
    api.setMessageReaction("💖", event.messageID, (err) => {}, true);
    api.sendTypingIndicator(event.threadID, true);

    let userH = event.senderID;
    const userInfo = global.data.userName.get(userH) || await Users.getUserInfo(userH);
    if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: rand, 
      mentions: [{
        tag: userInfo,
        id: userH
      }]
    };

    setTimeout(function() {
      return api.sendMessage(msg, threadID, messageID);
    }, 2000);
  }

  if (
    yan.includes("haha") ||
    yan.includes("lmao") ||
    yan.includes("lol") ||
    yan.includes("yahoo") ||
    yan.includes("yahuu") ||
    yan.includes("agoy") ||
    yan.includes("aguy") ||
    yan.includes("😄") ||
    yan.includes("🤣") ||
    yan.includes("😆") ||
    yan.includes("😄") ||
    yan.includes("😅") ||
    yan.includes("xd")
  ) {
    return api.setMessageReaction("😆", event.messageID, (err) => {}, true);
  } 

  if (
    yan.includes("kawawa") ||
    yan.includes("sad") ||
    yan.includes("agoi") ||
    yan.includes("sakit") ||
    yan.includes("skit") ||
    yan.includes("pain") ||
    yan.includes("pighati")
  ) {
    return api.setMessageReaction("🥲", event.messageID, (err) => {}, true);
  }
};

module.exports.run = async function ({ api, event, __GLOBAL }) {};
