//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
module.exports.config = {
  name: "funny",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "THIS BOT IS MR PREM SHARMA",
  commandCategory: "GIRL STATUS VIDEO",
  usages: "FUNNY VIDEOS",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["PREM-STATUS"]; // DO NOT THE CHANGE NAME
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://docs.google.com/uc?export=download&id=1MOxlzCFZmdpB9_ASBRC2u6qK4cJm6SSq","https://docs.google.com/uc?export=download&id=1Le21c01Nf4KvvVkmUDUXHjlvoE5klLuF","https://docs.google.com/uc?export=download&id=1LftH1XAeQ-go45loLGucpl24ohiERb5F","https://docs.google.com/uc?export=download&id=1Lg4JrLsYrazgZVIulaL7SGXFQRz5pFHo","https://docs.google.com/uc?export=download&id=1Lh9n6fY4CJe9BqD-Fr4Ciez_-kaImDOr","https://docs.google.com/uc?export=download&id=1LmTs9XboyC4-UJWCc0gQBJx0xK_yKqhE","https://docs.google.com/uc?export=download&id=1LnH_AZv9sv4MK7wpSwYGkTV5_PY1wmtL","https://docs.google.com/uc?export=download&id=1Ls9gi_xgZBHoM479iZTJyOiyeaVY6SE3","https://docs.google.com/uc?export=download&id=1LvvUQ4nRFs4YMCavsnfjJGfMzuv5Rk99","https://docs.google.com/uc?export=download&id=1LzTjZ0d-UDo-fFM7RnngGBclkJXUXr6W","https://docs.google.com/uc?export=download&id=1M5mt9JuBlARvg0V2ybnvOfhKlBhjPUL1","https://docs.google.com/uc?export=download&id=1M78rDkMe8nFyZY57l6rvAjiS-PffPcz4","https://docs.google.com/uc?export=download&id=1MEmPnEl8sn0HOfdHaGpgMgNy0e61AACy","https://docs.google.com/uc?export=download&id=1MLNy3TtvSFJuWqH15OerN8UP_5fHYqVu","https://docs.google.com/uc?export=download&id=1MOpx20NAxIaelGhQsbH_2PfRdBW3wEQp","https://docs.google.com/uc?export=download&id=1MVIPwHn-JoOTCEaVZeUhO1qDvyl6l-80","https://docs.google.com/uc?export=download&id=1MVZJEsI_mnnIasl-4F8Sb7BkcmI3uli_","https://docs.google.com/uc?export=download&id=1MaecrQRj_OrvWi-wYKPrDRzhBwD7ubvp"
];
     var callback = () => api.sendMessage({body:`『 ${know} 』`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
