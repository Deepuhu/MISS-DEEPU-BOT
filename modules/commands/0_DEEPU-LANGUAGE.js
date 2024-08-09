module.exports.config = {
	name: "language",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "PREM BABU",
	description: "THIS BOT WAS MADE BY MR PREM BABU",
	commandCategory: "CHANGE LANGUAGE",
	usages: "PREFIX",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const { threadID, messageID } = event;

    switch (args[0]) {
        case "hindi":
        case "hi":
            {
                return api.sendMessage(`बॉस बोट कमांड हिंदी लैंग्वेज में कर दिया है 😐✌️`, threadID, () => global.config.language = "vi"); 
            }
            break;
        
        case "english":
        case "en":
            {
                return api.sendMessage(`Language has been converted to English`, threadID, () => global.config.language = "en"); 
            }
            break;
    
        default:
            {
                return api.sendMessage("Syntax error, use : language [hi / en]", threadID, messageID);
            }   
            break; 
            
    }	
}
