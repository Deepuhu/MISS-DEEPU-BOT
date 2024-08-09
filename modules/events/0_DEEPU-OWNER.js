module.exports.config = {
	name: "god",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "PREM BABU",
	description: "THIS BOT WAS MADE BY MR PREM BABU",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads, args, Users }) {
	
	 var datathread = await api.getThreadInfo(event.threadID);
     var namethread = datathread.name;
	 
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Kolkata").format("HH:mm:ss D/MM/YYYY");
	
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "❁ ═══════ ❃•❃ ═══════ ❁\n🔮            DEEPU-BABU             🔮\n❁ ═══════ ❃•❃ ═══════ ❁" +
	                "\n\n━━━━━━━━━━━━━━━━━━━━━━\n🌺 𝖦ROUP NAME ❯ " + `${namethread}` +
                        "\n🌺 GROUP UID ❯ " + event.threadID +
                        "\n🌺 MESSAGES ❯ {task}" +
                        "\n🌺 USER NAME ❯ " + (await Users.getData(event.author)).name +
                        "\n🌺 USER UID ❯ " + event.author +
                        "\n" + Date.now() +
			"\n━━━━━━━━━━━━━━━━━━━━━━\n" +
			`DATE AND TIME ❯ ${gio}`,
						
	   task = "";
	
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "Name does not exist",
                    newName = event.logMessageData.name || "Walang pangalan";
            task = "THE USER CHANGED THE GROUP NAME '" + oldName + "' TO '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "ADDED BY NEW GROUP";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "BOT HAS BEEN KICKED OUT OF THE GROUP"
            break;
        }
        default: 
            break;
    }

        if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);
  var god = "1000";

    return api.sendMessage(formReport, god, (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
      }
