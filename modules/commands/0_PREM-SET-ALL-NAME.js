module.exports.config = {
 name: "setall",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "PREM BABU",
 description: "THIS BOT WAS MADE BY MR PREM BABU",
 commandCategory: "SET ALL MEMBERS NAME",
 usages: "PREFIX",
 cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
 var threadInfo = await api.getThreadInfo(event.threadID)
    var idtv = threadInfo.participantIDs
 console.log(threadInfo)
 const name = args.join(" ")
 function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    for(let setname of idtv) {
 await delay(3000)
 api.changeNickname(`${name}`, event.threadID, setname);
    }
}
