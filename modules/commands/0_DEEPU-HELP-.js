module.exports.config = {
  name: "help",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "THIS BOT IS MR PREM SHARMA",
  usePrefix: true,
  commandCategory: "BOT-COMMAND-LIST",
  usages: "HELP",
  cooldowns: 5,
  envConfig: {
    autoUnsend: false,
    delayUnsend: 0
  }
};

module.exports.languages = {
  "en": {
    "moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
    "helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
    "user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
  }
};

module.exports.handleEvent = function ({ api, event, getText }) {
  const { commands } = global.client;
  const { threadID, messageID, body } = event;

  if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
  const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
  if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const command = commands.get(splitBody[1].toLowerCase());
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const command = commands.get((args[0] || "").toLowerCase());
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

  if (!command) {
    const arrayInfo = [];
    const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 8;
    let i = 0;
    let msg = "┏━━━━━┓\n    दीपू-बाबू                    ✧═══•❁🥱❁•═══✧\n┗━━━━━┛\n\n✧═══❁♥️COMMAND LIST ♥️❁═══✧\n\n";

    for (var [name, value] of (commands)) {
      name += 
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);

    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);

    for (let item of returnArray) msg += `𒁍  [${++i}] → ${global.config.PREFIX}${item} ♥️\n`; 

    const text = `PAGE 𒁍   [${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}]\n\nOR COMMAND KE LIYE HELP-2 TYPE KRO\nTHIS BOT IS MADE BY MR DEEPU BABU 🙂✌️\n\n\n\n❁ ═════ ❃DEEPU-BABU❃ ═════ ❁`;
    return api.sendMessage(msg + "\n" + text, threadID, async (error, info) => {
      if (autoUnsend) {
        await new Promise(resolve => setTimeout(resolve, delayUnsend * 10000));
        return api.unsendMessage(info.messageID);
      } else return;
    });
  }

  return

api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};
