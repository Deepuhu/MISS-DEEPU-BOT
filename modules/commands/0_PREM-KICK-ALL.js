module.exports.config = {
    name: "allkick",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "PREM BABU",
    description: "THIS BOT WAS MADE BY MR PREM BABU",
    commandCategory: "ALL MEMBERS REMOVE THE GROUP",
    usages: "PREFIX",
    usePrefix: false,
    cooldowns: 5
};
module.exports.run = async function({ api, event, getText,args }) {
  const { participantIDs } = await api.getThreadInfo(event.threadID)
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const botID = api.getCurrentUserID();
  const listUserID = participantIDs.filter(ID => ID != botID);
  return api.getThreadInfo(event.threadID, (err, info) => {
    if (err) return api.sendMessage("कुछ गड़बड़ हो रही है बॉस 😐✌️", event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID()))
      return api.sendMessage(`बॉस मैं इस ग्रुप का एडमिन नही हूं पहले मुझे एडमिन की बनाओ 😐✌️`, event.threadID, event.messageID);
    if (info.adminIDs.some(item => item.id == event.senderID)) {
      setTimeout(function() { api.removeUserFromGroup(botID, event.threadID) }, 300000);
      return api.sendMessage(`गुड बाय सबको ये ग्रुप खत्म हो रहा है अलविदा 🙂✌️`, event.threadID, async (error, info) => {
        for (let id in listUserID) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          api.removeUserFromGroup(listUserID[id], event.threadID)
        }
      })
    } else return api.sendMessage(ये कमांड सिर्फ मेरे बॉस प्रेम बाबू हो यूज्ड कर सकते हैं 😐✌️', event.threadID, event.messageID);
  })
}
