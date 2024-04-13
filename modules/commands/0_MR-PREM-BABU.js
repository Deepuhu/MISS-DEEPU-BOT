module.exports.config = {
  name: "prem",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "THIS BOT IS MADE BY PREM BABU",
  commandCategory: "PREM BABU IMAGE",
  usages: "PREM-BABU",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/bJkwri4.jpeg",
"https://i.imgur.com/Rd84Bhe.jpeg",
"https://i.imgur.com/71hdujn.jpeg",
"https://i.imgur.com/0sWGhwe.jpeg",
"https://i.imgur.com/86kmX7S.jpeg",
"https://i.imgur.com/jrYsBnF.jpeg"
     ];
     var callback = () => api.sendMessage({body:`┏━━━━━┓\n     प्रेम-बाबू                    ✧═══•❁😛❁•═══✧\n┗━━━━━┛\n\nदेख लो मेरे बॉस प्रेम बाबू को सबसे अलग मासूम चेहरा भोली सी सूरत आखों में प्यार दिल में खुमार ♥️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
