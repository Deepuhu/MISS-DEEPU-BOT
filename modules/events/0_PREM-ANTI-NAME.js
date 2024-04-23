module.exports.config = {
  name: "antiname",
  eventType: ["log:user-nickname"],
  version: "0.0.1",
  credits: "PREM BABU",
  description: "THIS BOT WAS MADE BY MR PREM BABU"
};

module.exports.run = async function({ api, event, Users, Threads }) {
    var { logMessageData, threadID, author } = event;
    var botID = api.getCurrentUserID();
    var { BOTNAME, ADMINBOT } = global.config;
    var { nickname } = await Threads.getData(threadID, botID);
    var nickname = nickname ? nickname : BOTNAME;
    if (logMessageData.participant_id == botID && author != botID && !ADMINBOT.includes(author) && logMessageData.nickname != nickname) {
        api.changeNickname(nickname, threadID, botID)
        var info = await Users.getData(author);
       return api.sendMessage({ body: `सॉरी बॉस आप मेरा नाम चेंज नही कर सकते 🙂✌️`}, threadID);
    }  
        }
