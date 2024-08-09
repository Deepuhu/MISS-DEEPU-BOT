module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "PREM BABU",
    description: "THIS BOT WAS MADE BY MR PREM BABU",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "PREM BABU", "PREM-1");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "PREM BABU", "PREM-1");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] 𒁍 ${(!global.config.BOTNAME) ? "TAKLU BABU" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("", event.threadID, () => api.sendMessage({body: `┏━━━━━┓\n    दीपू-बाबू               ✧═•❁𝗪𝗘𝗟𝗖𝗢𝗠𝗘❁•═✧\n┗━━━━━┛\n\n\nलो में आ गया आपका दीपू बाबू जल्दी से स्वागत करो हमारा 😀\n════════════════════════ ❁\n\nऔर जल्दी से मेरे बॉस दीपू बाबू को रिक्वेस्ट भेज दो 😌\n════════════════════════ ❁\n\nMY BOSS  𒁍 MR DEEPU BABU 🌺\n════════════════════════ ❁\n\nFACEBOOK ID LINK 🔗 𒁍 https://www.facebook.com/\n════════════════════════ ❁\n\nMY PREFIX 𒁍   [${global.config.PREFIX}]\n════════════════════════ ❁\n\nTHANKYOU FOR USING MR DEEPU BABU BOT`, attachment: fs.createReadStream(__dirname + "/cache/botjoin.mp4")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "PREM BABU", "PREM-1");
            const pathGif = join(path, `${threadID}.video`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = "┏━━━━━┓\n    दीपू-बाबू               ✧═•❁𝗪𝗘𝗟𝗖𝗢𝗠𝗘❁•═✧\n┗━━━━━┛\n\n\nHello 𒁍 {name}\nWelcome To {threadName}\n════════════════════════ ❁\nMY BOSS  𒁍 MR DEEPU BABU 🌺\n════════════════════════ ❁\nFACEBOOK ID LINK 🔗 𒁍 https://www.facebook.com/\n════════════════════════ ❁\n𝖬𝖮𝖲𝖳 𝖶𝖤𝖫𝖢𝖮𝖬𝖤 𝖳𝖮 DEEPU 𝖡𝖠𝖡U 𝖡𝖮𝖳\n════════════════════════ ❁\nBOT UPDATING 𒁍 MR DEEPU BABU 🌺\n════════════════════════ ❁\n\nलत तेरी ही लगी है....................... 🌺\nनशा सरेआम होगा....................... 🌺\nहर लम्हा तुम्हारे लबों पे.................. 🌺\nसिर्फ प्रेम बाबू का ही नाम होगा.........🌺\nआप इस ग्रुप के {soThanhVien}th मेंबर हो...........🐥\n════════════════════════ ❁\n         खाओ पियो और मेरे साथ मस्ती करो 🙂" : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  '♥️🌺😘🍼🐥🙈' : 'Kaise Ho Ap')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "PREM BABU", "PREM-1"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathvideo), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "PREM BABU", "PREM-1", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
              }
