//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
module.exports.config = {
  name: "bestie dp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "FRIEND BOTH PROFILE DP",
  commandCategory: "THIS BOT IS MADE BY PREM BABU",
  usages: "BESTIE DP",
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
"https://i.imgur.com/8hXcECM.jpg","https://i.imgur.com/NjphF0h.jpg","https://i.imgur.com/EASfhma.jpg","https://i.imgur.com/yNk3exJ.jpg","https://i.imgur.com/BdK6B9z.jpg","https://i.imgur.com/V5BqbAY.jpg","https://i.imgur.com/G1Lq3lz.jpg","https://i.imgur.com/YyvzVNj.jpg","https://i.imgur.com/wxwxPdH.jpg","https://i.imgur.com/RyjvCQa.jpg","https://i.imgur.com/zRxQYeE.jpg","https://i.imgur.com/kAQlHXb.jpg","https://i.imgur.com/RfpAG5G.jpg","https://i.imgur.com/SsSN3pq.jpg","https://i.imgur.com/kSfiHkX.jpg","https://i.imgur.com/UFDKTO4.jpg","https://i.imgur.com/atG5oPm.jpg","https://i.imgur.com/uan61PD.jpg","https://i.imgur.com/gpxJvFD.jpg","https://i.imgur.com/82wLpEz.jpg","https://i.imgur.com/MoHOxww.jpg","https://i.imgur.com/H6z4tLC.jpg","https://i.imgur.com/TV4JJhk.jpg","https://i.imgur.com/JaT2WJ8.jpg","https://i.imgur.com/u44c981.jpg"
     ];
   /////// CREADIT NAME CHANGE KRNE WALE KI BEHAN PREM BABU KI RAKHEL HOGI ////////////////////////////////
     var callback = () => api.sendMessage({body:`┏━━━━━┓\n     दीपू-बाबू                    ✧═══•❁😛❁•═══✧\n┗━━━━━┛\n\n♥️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
