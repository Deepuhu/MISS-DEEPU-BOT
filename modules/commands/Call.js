const crypto = require('crypto');

let originalChecksum = generateChecksum(module.exports.config.credits); // Original credit ka checksum generate karo

// Function to generate checksum from credit
function generateChecksum(credit) {
    const checksum = crypto.createHash('sha256'); // SHA-256 hashing algorithm ka istemal karke checksum generate karo
    checksum.update(credit);
    return checksum.digest('hex');
}

// Shayariyan array mein store karo
const shayariyan = [
    "Har kadam par imtehaan leta hai zindagi, har waqt naye sawaal karta hai zindagi, hum toh haar gaye yaar lekin, aap muskurati rahiye, yahi kehti hai zindagi.",
    "Mohabbat ke phoolo ko murjhane na diya, pyar ki aag ko bujhane na diya, sazaa na di usne mujhe bewafai ki, warna humne bhi toh har roz usko yaad kiya.",
    "Dil ke dard ko dil todne wale kya jaane, pyar ke rivazon ko zamana kya jaane, hoti hai kitni takleef ladki patane mein, ye ghar pe baitha ladki ka baap kya jaane.",
    "Dil ki baat sirf ek shayar hi samajh sakta hai, dil ki baat sirf ek shayar hi samajh sakta hai, kyun ki shayar hi toh dil ka haal jaan sakta hai.",
    "Itni shiddat se maine tumhe paane ki koshish ki hai, ki har zarre ne mujhe tumse milane ki saazish ki hai, kuch toh hai tujhse raabta, kuch toh hai tujhse raabta.",
    "Khamosh baithi thi zindagi, kuch kaha nahi, par sab kuch keh gayi wo aankhen, jo aaj hume dekh gayi.",
    "Mohabbat koi khel nahi, jismein har baar jeet jaayein, mohabbat toh ek safar hai, jismein haar kar bhi jeet jaayein.",
    "Dil ki baat sirf aankhon se nahi, hoti hai, dil ki baat sirf aankhon se nahi, hoti hai, kabhi kabhi toh aankhon se bhi jyada khaas hoti hai.",
    "Khuda ne diya hai sab kuch, par khwahish thi sirf tujhe paane ki, khuda ne diya hai sab kuch, par khwahish thi sirf tujhe paane ki, agar ye bhi mumkin na hota toh, humne khud ko aazmaane ki.",
    "Woh karte hain baat mohabbat ki, par mohabbat ke voh din kabhi na aaye, voh karte hain baat mohabbat ki, par mohabbat ke voh din kabhi na aaye.",
];

// Function to send shayari with delay
const sendShayariWithDelay = (message, delay) => {
    setTimeout(() => {
        console.log(message); // Example: logging message to console
    }, delay);
};

// sendMessageWithDelay function ko yahan se replace karein
const sendMessageWithDelay = (message, delay) => {
    setTimeout(() => {
        console.log(message); // Example: logging message to console
    }, delay);
};

module.exports.config = {
    name: "fyt",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "SHANKAR SUMAN", // Original credit
    description: "War nát cái boxchat",
    commandCategory: "group",
    usages: "fyt [name]", // Updated usages
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

// Fyt command ke run function mein sendShayariWithDelay ko call karein
module.exports.run = async function({ api, args, event }) {
    const name = args.join(' '); // Jo bhi naam diya gaya hai, use join karke name mein store karo
    // Your existing code...
    const delay = 2000; // Delay set karo
    let index = 0;
    const interval = setInterval(() => {
        if (index < shayariyan.length) {
            const shayari = shayariyan[index];
            sendMessageWithDelay(`${name}, ${shayari}`, index * delay);
            index++;
        } else {
            index = 0; // Shayariyan khatam hone par index ko 0 pe reset karein
        }
    }, delay);
};
