module.exports.config = {
    name: "join call",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "PREM BABU", 
    description: "THIS BOT IS MR PREM SHARMA",
    commandCategory: "NO PREFIX",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID, senderID } = event;
    let react = event.body.toLowerCase();
    if (
        react.includes("call aao") ||
        react.includes("bot call aao") ||
        react.includes("taklu call aao") ||
        react.includes("call") ||
        react.includes("phone") ||
        react.includes("call lagao")
    ) {
        var msg = {
            body: "join",
        };
        api.sendMessage(msg, threadID, async (err, messageInfo) => {
            // Mast mast shayariyan
            const shayariList = [
                "Tere pyar mein do pal ki zindagi bahut hai, Ek pal ki khushi, ek pal ki hansi bahut hai, Kuchh dino ka sukoon chahiye mujhe, Tu saath ho toh raat ka har pal bahut hai.",
                "Tumhari baahon mein simat jaana chahta hoon, Tumhein apni zindagi banakar rakhna chahta hoon, Apni har saans tumhare naam karna chahta hoon, Bas ek baar tum mujhse pyar karna chahti ho, Yehi meri tamanna hai.",
                "Mohabbat mein aksar logon ka dil toot jaata hai, Par main toh ek sher kehkar reh gaya, Koi kya jaane kis se pyar ho jaaye, Bas ek jhalak se dil mein sawal utar aata hai.",
                "Dil ki duniya mein sirf tumhara hi naam hai, Meri har khushi mein sirf tumhara hi saath hai, Tumse hi toh mohabbat hai meri, Tumse hi toh pyar hai mera.",
                "Teri yaadon mein khoya rehta hoon, Har pal tujhe apni yaad dilata hoon, Mera dil dhadakta hai sirf teri hi khayalon mein, Teri muskurahat meri zindagi hai, Teri yaadon ka sahara leke main jee raha hoon.",
                // Aur bhi shayariyan jaise chahiye add kar sakte hain
            ];

            // Random taur par ek shayari select karein
            const randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];

            // Jo members bot call join kar rahe hain, unhe shayari sunayein
            api.sendMessage({
                body: randomShayari,
                mentions: [{
                    tag: "",
                    id: senderID
                }],
            }, threadID, () => {
                api.sendMessage({
                    body: "Bot call join ho gaya hai aur shayari sunai ja rahi hai!",
                    mentions: [{
                        tag: "",
                        id: senderID
                    }],
                }, threadID);
            });
        });
    }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {};
