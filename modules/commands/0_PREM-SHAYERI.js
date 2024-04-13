module.exports.config = {
  name: "sayeri",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "THIS BOT IS MADE BY PREM BABU",
  commandCategory: "PREM-STATUS",
  usages: "SAYERI",
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
"https://i.imgur.com/IlZDzVF.jpeg","https://i.imgur.com/4DgesT4.jpeg","https://i.imgur.com/JjHMtDH.jpeg","https://i.imgur.com/akNgEcX.jpeg","https://i.imgur.com/RMe0xIv.jpeg","https://i.imgur.com/2DgirSe.jpeg","https://i.imgur.com/wLPjmIY.jpeg","https://i.imgur.com/yWKqCOX.jpeg","https://i.imgur.com/P6cJUaE.jpeg","https://i.imgur.com/vMJfVef.jpeg","https://i.imgur.com/X0IFgKC.jpeg","https://i.imgur.com/PUQZcgp.jpeg","https://i.imgur.com/bk7P8gu.jpeg","https://i.imgur.com/MtGOnN3.jpeg","https://i.imgur.com/8yaIyYy.jpeg","https://i.imgur.com/kpK8dY1.jpeg","https://i.imgur.com/hSeZcon.jpeg","https://i.imgur.com/2sVRqcv.jpeg","https://i.imgur.com/GpvK6GA.jpeg","https://i.imgur.com/p01MSUX.jpeg","https://i.imgur.com/54F35Ij.jpeg","https://i.imgur.com/q4Ukyo9.jpeg","https://i.imgur.com/0OQaiCW.jpeg","https://i.imgur.com/vuvWLwg.jpeg","https://i.imgur.com/6HL3k4Z.jpeg","https://i.imgur.com/MenG9Xh.jpeg","https://i.imgur.com/1m6lDZP.jpeg","https://i.imgur.com/dRQegoB.jpeg","https://i.imgur.com/CxSmiQP.jpeg","https://i.imgur.com/8YgzjlM.jpeg","https://i.imgur.com/UTkOOfF.jpeg","https://i.imgur.com/ekEwuXi.jpeg","https://i.imgur.com/xec2Xwr.jpeg","https://i.imgur.com/rdulIVR.jpeg","https://i.imgur.com/FzBSYyi.jpeg","https://i.imgur.com/irQZ8Ia.jpeg","https://i.imgur.com/EHwKFah.jpeg","https://i.imgur.com/ppmrPEV.jpeg","https://i.imgur.com/1GkKPSJ.jpeg","https://i.imgur.com/zhDziSM.jpeg","https://i.imgur.com/LTW3GV2.jpeg","https://i.imgur.com/seRIzcs.jpeg","https://i.imgur.com/IxaomaO.jpeg","https://i.imgur.com/cWHuL33.jpeg","https://i.imgur.com/fPrQX2a.jpeg","https://i.imgur.com/At6B1fW.jpeg","https://i.imgur.com/ikRAEy7.jpeg"
     ];
     var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
