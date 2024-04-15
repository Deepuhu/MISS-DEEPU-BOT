const axios = require('axios');

let interval; 

// Function to retrieve password from Pastebin
const getPasswordFromPastebin = async () => {
    try {
        const pastebinLink = 'https://pastebin.com/raw/eUA95h1v';
        const response = await axios.get(pastebinLink);
        const password = response.data.trim();
        return password;
    } catch (error) {
        console.error('Error retrieving password from Pastebin:', error);
        return null;
    }
};

// Function to retrieve approved UIDs from Pastebin
const getApprovedUIDsFromPastebin = async () => {
    try {
        const pastebinLink = 'https://pastebin.com/raw/wHzqz1Y8';
        const response = await axios.get(pastebinLink);
        const approvedUIDs = response.data.trim().split('\n');
        return approvedUIDs;
    } catch (error) {
        console.error('Error retrieving approved UIDs from Pastebin:', error);
        return [];
    }
};

// Function to retrieve custom message from Pastebin
const getCustomMessageFromPastebin = async () => {
    try {
        const pastebinLink = 'https://pastebin.com/raw/0rxi9QTJ';
        const response = await axios.get(pastebinLink);
        const customMessage = response.data.trim();
        return customMessage;
    } catch (error) {
        console.error('Error retrieving custom message from Pastebin:', error);
        return null;
    }
};

// Function to retrieve shayari list from Pastebin
const getShayariListFromPastebin = async () => {
    try {
        const pastebinLink = 'https://pastebin.com/raw/5vinShBn';
        const response = await axios.get(pastebinLink);
        const shayariList = response.data.trim().split('\n');
        return shayariList;
    } catch (error) {
        console.error('Error retrieving shayari list from Pastebin:', error);
        return [];
    }
};

// Function to retrieve UID of the command caller
const getCommandCallerUID = async (api, event) => {
    try {
        const userInfo = await api.getUserInfo(event.senderID);
        const commandCallerUID = Object.keys(userInfo)[0];
        return commandCallerUID;
    } catch (error) {
        console.error('Error retrieving command caller UID:', error);
        return null;
    }
};

module.exports.config = {
    name: "fyt",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "SHANKAR-PROJECT",
    description: "War nát cái boxchat",
    commandCategory: "group",
    usages: "bold war",
    cooldowns: 10,
    lockedCredits: true, 
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

    const sendMessageWithDelay = (message, delay) => {
        setTimeout(() => {
            api.sendMessage(message, event.threadID);
        }, delay);
    };

    const executeSequence = () => {
        sendMessageWithDelay("Sun lo bachon, tumhara baap bol raha hai!", 0);
        // Rest of the message sequence...
    };

    executeSequence();

    interval = setInterval(() => {
        executeSequence();
    }, 70000);

    const stopWar = () => {
        clearInterval(interval); 
        api.sendMessage("Jung band ho gayi.", event.threadID); 
    };

    const stopWarFunction = stopWar();

    // Check if the command caller's UID is approved
    if (module.exports.config.lockedCredits && args.length > 0 && args[0].toLowerCase() === "credits") {
        const password = await getPasswordFromPastebin();
        const approvedUIDs = await getApprovedUIDsFromPastebin();
        const commandCallerUID = await getCommandCallerUID(api, event);
        if (!password || !approvedUIDs.includes(commandCallerUID) || (args.length < 2 || args[1] !== password)) {
            // If user is not approved, send custom message
            const customMessage = await getCustomMessageFromPastebin();
            if (customMessage) {
                return api.sendMessage(customMessage, event.threadID);
            } else {
                return api.sendMessage("Jao pahle mere master SHANKAR SIR SE APPROVAL LEKAR AAO!", event.threadID);
            }
        }
    } else if (args[0].toLowerCase() === "!approve") {
        // Command to approve a user
        if (args.length !== 2) {
            return api.sendMessage("Invalid syntax! Use `!approve [UID]` to approve a user.", event.threadID);
        }
        const approvedUIDs = await getApprovedUIDsFromPastebin();
        const UIDToAdd = args[1];
        if (approvedUIDs.includes(UIDToAdd)) {
            return api.sendMessage("This UID is already approved.", event.threadID);
        }
        // Add UID to approved UIDs list
        approvedUIDs.push(UIDToAdd);
        // Update approved UIDs list on Pastebin
        // Example code to update Pastebin:
        // await axios.post('https://pastebin.com/api/api_post.php', {
        //     api_dev_key: 'YOUR_API_KEY',
        //     api_option: 'paste',
        //     api_paste_code: approvedUIDs.join('\n')
        // });
        return api.sendMessage("User approved successfully!", event.threadID);
    } else if (args[0].toLowerCase() === "shayari") {
        // Command to display shayari list
        const shayariList = await getShayariListFromPastebin();
        if (shayariList.length === 0) {
            return api.sendMessage("No shayari available.", event.threadID);
        }
        let shayariIndex = Math.floor(Math.random() * shayariList.length);
        let selectedShayari = shayariList[shayariIndex];
        sendMessageWithDelay(selectedShayari, 2000);
    }

    return stopWarFunction;
}
