module.exports.config = {
	name: "PREM-MEME",
	version: "3.3.1",
	hasPermssion: 1,
	credits: "PREM BABU",
	description: "THIS BOT IS MADE BY PREM BABU",
	commandCategory: "LEVAL UP",
	dependencies: {
		"fs-extra": ""
	},
	cooldowns: 2,
};

module.exports.handleEvent = async function({ api, event, Currencies, Users, getText }) {
	var {threadID, senderID } = event;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + "/PREM-BABU/RANKUP/rankup.png";
  let pathAvt1 = __dirname + "/cache/Avtmot2.png";
  var id1 = event.senderID;
  

	threadID = String(threadID);
	senderID = String(senderID);

	const thread = global.data.threadData.get(threadID) || {};

	let exp = (await Currencies.getData(senderID)).exp;
	exp = exp += 1;

	if (isNaN(exp)) return;

	if (typeof thread["rankup"] != "undefined" && thread["rankup"] == false) {
		await Currencies.setData(senderID, { exp });
		return;
	};

	const curLevel = Math.floor((Math.sqrt(1 + (4 * exp / 3) + 1) / 2));
	const level = Math.floor((Math.sqrt(1 + (4 * (exp + 1) / 3) + 1) / 2));

	if (level > curLevel && level != 1) {
		const name = global.data.userName.get(senderID) || await Users.getNameUser(senderID);
		var messsage = (typeof thread.customRankup == "undefined") ? msg = getText("levelup") : msg = thread.customRankup, 
			arrayContent;

		messsage = messsage
			.replace(/\{name}/g, name)
			.replace(/\{level}/g, level);

		const moduleName = this.config.name;

    var background = [
"https://i.imgur.com/zoQxUwC.jpg" ,
"https://i.imgur.com/bXVBasN.jpg" ,
"https://i.imgur.com/E3bMZMM.jpg" ,
"https://i.imgur.com/pkchwDe.jpg" ,
"https://i.imgur.com/PFV6etU.jpg" ,
"https://i.imgur.com/DLElS0y.jpg" ,
"https://i.imgur.com/6hufzML.jpg" ,
"https://i.imgur.com/ikevA6M.jpg" ,
"https://i.imgur.com/aGuU2tB.jpg" ,
"https://i.imgur.com/tsUsL6B.jpg" ,
"https://i.imgur.com/sAUL2X0.jpg" ,
"https://i.imgur.com/fGSX9z3.jpg" ,
"https://i.imgur.com/TeT8dXA.jpg" ,
"https://i.imgur.com/kCnHvly.jpg" ,
"https://i.imgur.com/DLElS0y.jpg" ,
"https://i.imgur.com/wfB1cU7.jpg" ,
"https://i.imgur.com/dmUAjtN.jpg" ,
"https://i.imgur.com/RqaTxa4.jpg" ,
"https://i.imgur.com/gXFNJGi.jpg" ,
"https://i.imgur.com/DwDTSsS.jpg" ,
"https://i.imgur.com/BSreuve.jpg" ,
"https://i.imgur.com/B6TOC4a.jpg" ,
"https://i.imgur.com/S83pmyW.jpg" ,
"https://i.imgur.com/7FNPBkX.jpg" ,
"https://i.imgur.com/SIdbUrD.jpg" ,
"https://i.imgur.com/ErngTHc.jpg" ,
"https://i.imgur.com/onfBoPC.jpg" ,
"https://i.imgur.com/UVk3zcd.jpg" ,
"https://i.imgur.com/3aOuDZ9.jpg" ,
"https://i.imgur.com/OHfqttV.jpg" ,
"https://i.imgur.com/aiNRtVF.jpg" ,
"https://i.imgur.com/rgPnYTJ.jpg" ,
"https://i.imgur.com/YOVZBYH.jpg" ,
"https://i.imgur.com/aiFNcBf.jpg" ,
"https://i.imgur.com/FbI0kGj.jpg" ,
"https://i.imgur.com/QOMUwDy.jpg" ,
"https://i.imgur.com/UP8wysc.jpg" ,
"https://i.imgur.com/seb2NbZ.jpg" ,
"https://i.imgur.com/YdcVmTe.jpg" ,
"https://i.imgur.com/WjkPmwu.jpg" ,
"https://i.imgur.com/z7ZeFky.jpg" ,
"https://i.imgur.com/H8YGlIn.jpg" ,
"https://i.imgur.com/gjCymKq.jpg" ,
"https://i.imgur.com/4XiF5dQ.jpg" ,
"https://i.imgur.com/Nd5nrJW.jpg" ,
"https://i.imgur.com/C4f0pdf.jpg" ,
"https://i.imgur.com/EO0YsOT.jpg" ,
"https://i.imgur.com/dKEAsb9.jpg" ,
"https://i.imgur.com/7zfnhkO.jpg" ,
"https://i.imgur.com/LrOjwMX.jpg" ,
"https://i.imgur.com/7wAImE3.jpg" ,
"https://i.imgur.com/D8Kzo1X.jpg" ,
"https://i.imgur.com/VTXRcYo.jpg" ,
"https://i.imgur.com/BcjRdU8.jpg" ,
"https://i.imgur.com/hNb9WCk.jpg" ,
"https://i.imgur.com/8GM1pn9.jpg" ,
"https://i.imgur.com/SHiXJ0G.jpg" ,
"https://i.imgur.com/0qCoPhR.jpg" ,
"https://i.imgur.com/IhRr8Gx.jpg" ,
"https://i.imgur.com/eAqbfri.jpg" ,
"https://i.imgur.com/Q6m1EEm.jpg" ,
"https://i.imgur.com/SzzeFeV.jpg" ,
"https://i.imgur.com/ZfnJQHj.jpg" ,
"https://i.imgur.com/puwolKD.jpg" ,
"https://i.imgur.com/FQklA6q.jpg" ,
"https://i.imgur.com/SwLufsH.jpg" ,
"https://i.imgur.com/SmOYXY5.jpg" ,
"https://i.imgur.com/7w3hmYF.jpg" ,
"https://i.imgur.com/TmfIRv5.jpg" ,
"https://i.imgur.com/aBwvOal.jpg" ,
"https://i.imgur.com/eGIF9B1.jpg" ,
"https://i.imgur.com/hjmok8Q.jpg" ,
"https://i.imgur.com/RrPuRfT.jpg" ,
"https://i.imgur.com/UzkdFiS.jpg" ,
"https://i.imgur.com/Mn9GMDf.jpg" ,
"https://i.imgur.com/OPZ9857.jpg" ,
"https://i.imgur.com/ZsHL2Y2.jpg" ,
"https://i.imgur.com/MIG763l.jpg" ,
"https://i.imgur.com/1Zr3rcS.jpg" ,
"https://i.imgur.com/flMpukD.jpg" ,
"https://i.imgur.com/u1YieFf.jpg" ,
"https://i.imgur.com/nGG1Rq3.jpg" ,
"https://i.imgur.com/tbXQXmA.jpg" ,
"https://i.imgur.com/2s6oXka.jpg" ,
"https://i.imgur.com/KrAQO5Z.jpg" ,
"https://i.imgur.com/oCeGlm4.jpg" ,
"https://i.imgur.com/m7dBh5G.jpg" ,
"https://i.imgur.com/gvOK3Rk.jpg" ,
"https://i.imgur.com/MwvLw2x.jpg" ,
"https://i.imgur.com/WnuiI8E.jpg" ,
"https://i.imgur.com/7mwcaYl.jpg" ,
"https://i.imgur.com/PwSkA3b.jpg" ,
"https://i.imgur.com/lGUiOWJ.jpg" ,
"https://i.imgur.com/6tILjzR.jpg" ,
"https://i.imgur.com/s2k6F7b.jpg" ,
"https://i.imgur.com/U8snOes.jpg" ,
"https://i.imgur.com/BEpH4tL.jpg" ,
"https://i.imgur.com/LYW6vCV.jpg" ,
"https://i.imgur.com/uL4vzUm.jpg" ,
"https://i.imgur.com/nfaJSc8.jpg" ,
"https://i.imgur.com/2VVnQdy.jpg" ,
"https://i.imgur.com/PiEEsSU.jpg" ,
"https://i.imgur.com/VaKdGyK.jpg" ,
"https://i.imgur.com/DBBCMT5.jpg" ,
"https://i.imgur.com/9SzyANt.jpg" ,
"https://i.imgur.com/8wvo2rv.jpg" ,
"https://i.imgur.com/CZ3u4pG.jpg" ,
"https://i.imgur.com/rDXCZ7T.jpg" ,
"https://i.imgur.com/k7hFQDI.jpg" ,
"https://i.imgur.com/ZUbdLcH.jpg" ,
"https://i.imgur.com/4B6q7qo.jpg" ,
"https://i.imgur.com/uns90FG.jpg" ,
"https://i.imgur.com/BUo8Gip.jpg" ,
"https://i.imgur.com/OEjUJpt.jpg" ,
"https://i.imgur.com/0EMIF5N.jpg" ,
"https://i.imgur.com/pfClCuw.jpg" ,
"https://i.imgur.com/B3xmc6u.jpg" ,
"https://i.imgur.com/r3k76o1.jpg" ,
"https://i.imgur.com/rF7elZ9.jpg" ,
"https://i.imgur.com/sUCiNka.jpg" ,
"https://i.imgur.com/H4txTF9.jpg" ,
"https://i.imgur.com/XJYsBGt.jpg" ,
"https://i.imgur.com/VhUKFn6.jpg" ,
"https://i.imgur.com/4NMv9DQ.jpg" ,
"https://i.imgur.com/BF7REhe.jpg" ,
"https://i.imgur.com/vXJ177V.jpg" ,
"https://i.imgur.com/rpLbigJ.jpg" ,
"https://i.imgur.com/kTH9hI0.jpg" ,
"https://i.imgur.com/qdFVoSy.jpg" ,
"https://i.imgur.com/otrQpMc.jpg" ,
"https://i.imgur.com/D3WqpgT.jpg" ,
"https://i.imgur.com/MW0N2it.jpg" ,
"https://i.imgur.com/GwbXEte.jpg" ,
"https://i.imgur.com/9JR6W3w.jpg" ,
"https://i.imgur.com/YgIPVwa.jpg" ,
"https://i.imgur.com/czv7Fz5.jpg" ,
"https://i.imgur.com/Zw9KZBd.jpg" ,
"https://i.imgur.com/BDVgpWb.jpg" ,
"https://i.imgur.com/0y9UHo3.jpg" ,
"https://i.imgur.com/o13FtAd.jpg" ,
"https://i.imgur.com/caEX9gQ.jpg" ,
"https://i.imgur.com/5HUayMT.jpg" ,
"https://i.imgur.com/mfA3aZm.jpg" ,
"https://i.imgur.com/fvZlGx4.jpg" ,
"https://i.imgur.com/9X7xHrc.jpg" ,
"https://i.imgur.com/fhC0uQO.jpg" ,
"https://i.imgur.com/k0kgL6g.jpg" ,
"https://i.imgur.com/tKJbKC3.jpg" ,
"https://i.imgur.com/XAG9XXY.jpg" ,
"https://i.imgur.com/WOITKH9.jpg" ,
"https://i.imgur.com/AlSxfCU.jpg" ,
"https://i.imgur.com/dcldScy.jpg" ,
"https://i.imgur.com/CGvFkMn.jpg" ,
"https://i.imgur.com/pXC6YUo.jpg" ,
"https://i.imgur.com/loz0CDt.jpg" ,
"https://i.imgur.com/XWbFJ67.jpg" ,
"https://i.imgur.com/bpzaZda.jpg" ,
"https://i.imgur.com/QRoyoSB.jpg" ,
"https://i.imgur.com/VwbnHjt.jpg" ,
"https://i.imgur.com/4CCcn4w.jpg" ,
"https://i.imgur.com/TWnfUPu.jpg" ,
"https://i.imgur.com/jL9zgtp.jpg" ,
"https://i.imgur.com/6Hh2eap.jpg" ,
"https://i.imgur.com/EHD734u.jpg" ,
"https://i.imgur.com/uC2YI3l.jpg" ,
"https://i.imgur.com/zCP4AzS.jpg" ,
"https://i.imgur.com/bovYCdz.jpg" ,
"https://i.imgur.com/2lO8cZg.jpg" ,
"https://i.imgur.com/ehEVYQK.jpg" ,
"https://i.imgur.com/IzhVUTo.jpg" ,
"https://i.imgur.com/nViB6oJ.jpg" ,
"https://i.imgur.com/6YzpZyq.jpg" ,
"https://i.imgur.com/9bwh3qa.jpg" ,
"https://i.imgur.com/oTy9Ylw.jpg" ,
"https://i.imgur.com/jHzuUKA.jpg" ,
"https://i.imgur.com/8Y8NrSw.jpg" ,
"https://i.imgur.com/OTH5p7Z.jpg" ,
"https://i.imgur.com/Yyb0sdO.jpg" ,
"https://i.imgur.com/hA7p8M3.jpg" ,
"https://i.imgur.com/LbwoVjX.jpg" ,
"https://i.imgur.com/z9X2gPw.jpg" ,
"https://i.imgur.com/XzyO1x6.jpg" ,
"https://i.imgur.com/9VLIeHE.jpg" ,
"https://i.imgur.com/bSAggk1.jpg" ,
"https://i.imgur.com/PtiAaHm.jpg" ,
"https://i.imgur.com/VvD1BO7.jpg" ,
"https://i.imgur.com/99QmViE.jpg" ,
"https://i.imgur.com/HAHOYFm.jpg" ,
"https://i.imgur.com/Gw33heq.jpg" ,
"https://i.imgur.com/Oc5v81n.jpg" ,
"https://i.imgur.com/IQLPXsn.jpg" ,
"https://i.imgur.com/b8KE45g.jpg" ,
"https://i.imgur.com/3Adx4WN.jpg" ,
"https://i.imgur.com/N0BCsl7.jpg" ,
"https://i.imgur.com/VFRn575.jpg" ,
"https://i.imgur.com/GJbWcCy.jpg" ,
"https://i.imgur.com/YbWXwDd.jpg" ,
"https://i.imgur.com/BIaJ0rP.jpg" ,
"https://i.imgur.com/A1C9CNt.jpg" ,
"https://i.imgur.com/Ar2Mtvy.jpg" ,
"https://i.imgur.com/DGTIp1i.jpg" ,
"https://i.imgur.com/1qOGiYV.jpg" ,
"https://i.imgur.com/hr0EHTb.jpg" ,
"https://i.imgur.com/vAsgQst.jpg" ,
"https://i.imgur.com/jVgapSO.jpg" ,
"https://i.imgur.com/LH9RZdn.jpg" ,
"https://i.imgur.com/frkJZ1M.jpg" ,
"https://i.imgur.com/fiyW8dO.jpg" ,
"https://i.imgur.com/SaSgjuB.jpg" ,
"https://i.imgur.com/KtneWEN.jpg" ,
"https://i.imgur.com/rM8A3Zl.jpg" ,
"https://i.imgur.com/jR6DcLT.jpg" ,
"https://i.imgur.com/uWKiNLn.jpg" ,
"https://i.imgur.com/NBRKOfg.jpg" ,
"https://i.imgur.com/jKA05vC.jpg" ,
"https://i.imgur.com/0X706YR.jpg" ,
"https://i.imgur.com/EvOv3jE.jpg" ,
"https://i.imgur.com/QNnnXIc.jpg" ,
"https://i.imgur.com/t5uQRhT.jpg" ,
"https://i.imgur.com/rM8A3Zl.jpg" ,
"https://i.imgur.com/erB6gj3.jpg" ,
"https://i.imgur.com/63iydJC.jpg" ,
"https://i.imgur.com/RH1YinJ.jpg" ,
"https://i.imgur.com/qt8TmLM.jpg" ,
"https://i.imgur.com/P2wkD52.jpg" ,
"https://i.imgur.com/b8vDMuU.jpg" ,
"https://i.imgur.com/KZ9R9HY.jpg" ,
"https://i.imgur.com/s84ogtX.jpg" ,
"https://i.imgur.com/ebT27Ho.jpg" ,
"https://i.imgur.com/hVqaTKa.jpg" ,
"https://i.imgur.com/wrydrf6.jpg" ,
"https://i.imgur.com/a5FmXef.jpg" ,
"https://i.imgur.com/Put4cUm.jpg" ,
"https://i.imgur.com/pLHUONd.jpg" ,
"https://i.imgur.com/Yrenc2R.jpg" ,
"https://i.imgur.com/MO2n9c8.jpg" ,
"https://i.imgur.com/Sd8M4P1.jpg" ,
"https://i.imgur.com/JceYbZ9.jpg" ,
"https://i.imgur.com/OO2HHbe.jpg" ,
"https://i.imgur.com/8XbncY7.jpg" ,
"https://i.imgur.com/EapRG2l.jpg" ,
"https://i.imgur.com/laWJCD1.jpg" ,
"https://i.imgur.com/uiqy66z.jpg" ,
"https://i.imgur.com/amHzUJO.jpg" ,
"https://i.imgur.com/GBfY6QF.jpg" ,
"https://i.imgur.com/rZ0xm2d.jpg" ,
"https://i.imgur.com/S482v7g.jpg" ,
"https://i.imgur.com/1ElFRik.jpg" ,
"https://i.imgur.com/dtBMiNZ.jpg" ,
"https://i.imgur.com/NIDfRlO.jpg" ,
"https://i.imgur.com/5Ov0TeS.jpg" ,
"https://i.imgur.com/euiRsRb.jpg" ,
"https://i.imgur.com/ZlY19ug.jpg" ,
"https://i.imgur.com/8V1Z1c8.jpg" ,
"https://i.imgur.com/v3MUQ23.jpg" ,
"https://i.imgur.com/4nFOS0w.jpg" ,
"https://i.imgur.com/tC2Sy8a.jpg" ,  
  ];
    var rd = background[Math.floor(Math.random() * background.length)];
    let getAvtmot = (
    await axios.get(
      `https://graph.facebook.com/${id1}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt1, Buffer.from(getAvtmot, "utf-8"));
  
  let getbackground = (
    await axios.get(`${rd}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));
  
    let baseImage = await loadImage(pathImg);
    let baseAvt1 = await loadImage(pathAvt1);
    let canvas = createCanvas(baseImage.width, baseImage.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.rotate(-0 * Math.PI / 180);
    ctx.drawImage(baseAvt1, 1, 1, 1, 1);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    fs.removeSync(pathAvt1);
		api.sendMessage({body: messsage, mentions: [{ tag: name, id: senderID }], attachment: fs.createReadStream(pathImg) }, event.threadID, () => fs.unlinkSync(pathImg));
    
}

	await Currencies.setData(senderID, { exp });
	return;
}

module.exports.languages = {
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success notification rankup!",
		"levelup": "",
	}
}

module.exports.run = async function({ api, event, Threads, getText }) {
	const { threadID, messageID } = event;
	let data = (await Threads.getData(threadID)).data;
  
	if (typeof data["rankup"] == "undefined" || data["rankup"] == false) data["rankup"] = true;
	else data["rankup"] = false;
	
	await Threads.setData(threadID, { data });
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["rankup"] == true) ? getText("on") : getText("off")} ${getText("successText")}`, threadID, messageID);
                            }
PREM-PROJECT-BOT-2/modules/commands/0_PREM-RANKUP-2.js at main · prem-project3608/PREM-PROJECT-BOT-2
