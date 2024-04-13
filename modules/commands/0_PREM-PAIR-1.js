const PREM_BABU= "PREM-PROJECT"; // Original credit

module.exports.config = {
  name: "pair",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: PREM_BABU,
  description: "THIS BOT WAS MADE BY MR PREM BABU",
  commandCategory: "LOVE PAIRING",
  usePrefix: false,
  usages: "PREFIX", 
  cooldowns: 5
};

module.exports.run = async function({ api, event, Threads, Users }) {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];

  var { participantIDs } = (await Threads.getData(event.threadID)).threadInfo;
  var tle = Math.floor(Math.random() * 101);
  var namee = (await Users.getData(event.senderID)).name
  const botID = api.getCurrentUserID();
  const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
  var id = listUserID[Math.floor(Math.random() * listUserID.length)];
  var name = (await Users.getData(id)).name
  var arraytag = [];
  arraytag.push({id: event.senderID, tag: namee});
  arraytag.push({id: id, tag: name});

  // Check if credit has been modified
  if (module.exports.config.credits !== PREM_BABU) {
    return api.sendMessage("DON'T CHANGE CREDIT! PREM-PROJECT FUCK YOUR MOTHER AND SISTER", event.threadID, event.messageID);
  }

  // Array of Imgur gif links
  const imgurGifs = [
    "https://i.imgur.com/41ogamD.gif",
    "https://i.imgur.com/qVpA7RB.gif",
    "https://i.imgur.com/OJ6uIXY.gif",
    "https://i.imgur.com/3qSoi8K.gif",
    "https://i.imgur.com/EO5EtJp.gif",
    "https://i.imgur.com/fP5kc0h.gif"
    // Add more Imgur gif links as needed
  ];

  // Select a random Imgur gif link
  const randomImgurLink = imgurGifs[Math.floor(Math.random() * imgurGifs.length)];

  // Download the gif from the selected Imgur link
  const gifData = (await axios.get(randomImgurLink, { responseType: "arraybuffer" })).data; 
  fs.writeFileSync(__dirname + "/cache/giflove.png", Buffer.from(gifData, "utf-8"));

  // Download avatars
  let Avatar = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
  fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

  let Avatar2 = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
  fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );

  // Prepare attachments
  var imglove = [];
  imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
  imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
  imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

  var msg = {
    body: `लो मिल गया आपका जीवन साथी 🙂🖐️\nअब बार-बार मत बोलना सेटिंग करवाने को 😒👈\nआप दोनो का प्यार 👉 ${tle}% है\n`+namee+" "+"💖"+" "+name, 
    mentions: arraytag, 
    attachment: imglove
  };

  return api.sendMessage(msg, event.threadID, event.messageID);
}
