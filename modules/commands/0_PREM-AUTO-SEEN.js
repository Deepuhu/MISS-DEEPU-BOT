const fs = require('fs-extra');
const pathFile = __dirname + '/PREM-BABU/PREM-AUTO-SEEN.txt';

module.exports.config = {
  name: "autoseen",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "PREM-BABU",
  description: "THIS BOT IS MADE BY PREM BABU",
  usePrefix: true,
  commandCategory: "AUTOMATIC SEEN MESSAGE",
  usages: "AUTOSEEN ON/OFF",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ api, event, args }) => {
if (!fs.existsSync(pathFile))
   fs.writeFileSync(pathFile, 'false');
   const isEnable = fs.readFileSync(pathFile, 'utf-8');
   if (isEnable == 'true')
     api.markAsReadAll(() => {});
};

module.exports. run = async ({ api, event, args }) => {
   try {
     if (args[0] == 'on') {
       fs.writeFileSync(pathFile, 'true');
       api.sendMessage('सभी मैसेज ऑटोसिन ऑन हो गया प्रेम बॉस 🤐👈', event.threadID, event.messageID);
     } else if (args[0] == 'off') {
       fs.writeFileSync(pathFile, 'false');
       api.sendMessage('जो वर्ड या इमोजी मेरे कमांड में नही है। उसका ऑटोसीन ऑफ कर दिया प्रेम बॉस 🤐🤐', event.threadID, event.messageID);
     } else {
       api.sendMessage('सॉरी बॉस कुछ गड़बड़ है। 🤔👈', event.threadID, event.messageID);
     }
   }
   catch(e) {
     console.log(e);
   }
};
