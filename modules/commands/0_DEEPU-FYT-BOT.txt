let interval; // setInterval function ko hold karne ke liye ek interval variable declare karein

module.exports.config = {
    name: "fyt",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "SHANKAR SUMAN",
    description: "War nát cái boxchat",
    commandCategory: "group",
    usages: "bold war",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, event}) {
    var mention = Object.keys(event.mentions)[0];
    let name = event.mentions[mention];
    var arraytag = [];
    arraytag.push({id: mention});

    // Har 2 second mein message bhejne ka function
    const sendMessageWithDelay = (message, delay) => {
        setTimeout(() => {
            api.sendMessage(message, event.threadID);
        }, delay);
    };

    // Messages ka sequence execute karne ka function
    const executeSequence = () => {
        sendMessageWithDelay("Sun lo bachon, tumhara baap bol raha hai!", 0);
        sendMessageWithDelay({body: "Teri maa ki ch**t"}, 2000);
        sendMessageWithDelay({body: "Tum chhote saale baahar niklo, apne baap ki gaaliyan sunne ke liye"}, 4000);
        sendMessageWithDelay({body: "Jaldi se kutton ko dikhao"}, 6000);
        sendMessageWithDelay({body: "Apne baap ki aatma dikhao"}, 8000);
        sendMessageWithDelay({body: "Kya tum logon ko jung itni pasand hai?"}, 10000);
        sendMessageWithDelay({body: "Tum logon ko bhi, kya?"}, 12000);
        sendMessageWithDelay({body: "Apne baap ko jung ka yug do"}, 14000);
        sendMessageWithDelay({body: "Jaldi se ek doosre ko gaaliyan dena"}, 16000);
        sendMessageWithDelay({body: "Kya bure ladke tum log mujhse jung karne ko apne baap ke saamne naak chidwa rahe hain?"}, 18000);
        sendMessageWithDelay({body: "Main teri maa ka bhosda"}, 20000);
        sendMessageWithDelay({body: "Maze mein toh phir teri maa ko jaldi bhosda do"}, 22000);
        sendMessageWithDelay({body: "Tere baap ne tujhe rap karke maar diya"}, 24000);
        sendMessageWithDelay({body: "Kripya mujhe khana do?"}, 26000);
        sendMessageWithDelay({body: "Agar swadisht hai, toh apne dad ko kha lo"}, 28000);
        sendMessageWithDelay({body: "Usse pehle, mujhe 1 minute ka break dedo"}, 30000);
        sendMessageWithDelay({body: "Kripya mujhe shuru karne dijiye"}, 46000);
        sendMessageWithDelay({body: "Sabse pehle, main tumhe upar se neeche tak ch**u"}, 48000);
        sendMessageWithDelay({body: "Main ch**u chhed se pussy tak ch**u"}, 50000);
        sendMessageWithDelay({body: "Ch**t itni badi hai ki bhains ki ch**t ek gutter pipe ko masturbate kar rahi hai"}, 52000);
        sendMessageWithDelay({body: "Main sure hoon ki mujh jaise 2 logon se tumhari gaand bhar nahi jayegi"}, 54000);
        sendMessageWithDelay("Main thak gaya hoon aur aur gaali nahi doonga", 56000);
        sendMessageWithDelay({body: "Chalo boss, lyrics ko update karo, jung jaari rakhte hain"}, 58000);
        sendMessageWithDelay({body: "Mujhe sunne ke liye shukriya, jung"}, 60000);
        sendMessageWithDelay({body: "Alvida aur agle program mein milenge"}, 62000);
        sendMessageWithDelay({body: "Alvida 🥺"}, 70000);
    };

    // Command run hone par sequence ko execute karein
    executeSequence();

    // Sequence ko har 70 second mein execute karne ke liye interval set karein
    interval = setInterval(() => {
        executeSequence();
    }, 70000);

    // Jung ko rukne ka function
    const stopWar = () => {
        clearInterval(interval); // Interval ko clear karein
        api.sendMessage("Jung band ho gayi.", event.threadID); // Jung ruk gayi hai iska notification karein
    };

    // Jung ko rukne ka function return karein
    return stopWar;
}
