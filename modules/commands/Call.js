module.exports = {
    event: "message",
    callback: async ({ message, client }) => {
        // Bot apne aap ko join karne se bachayein
        if (message.author.bot) return;

        // Message ke content ko lowercase mein convert karein
        const content = message.content.toLowerCase();

        // "bot call aao" ya "taklu call aao" ke liye condition check karein
        if (content.includes("bot call aao") || content.includes("taklu call aao")) {
            // User ka voice channel kaunsa hai, wo check karein
            const voiceChannel = message.member.voice.channel;

            // Agar user voice channel mein nahi hai, to return karein
            if (!voiceChannel) {
                return message.channel.send("Aapko pehle ek voice channel mein join hona hoga.");
            }

            // Voice channel mein bot ko join karayein
            voiceChannel.join().then(connection => {
                // Shayari ko bhejein
                const shayari = "Tere pyar mein do pal ki zindagi bahut hai, Ek pal ki khushi, ek pal ki hansi bahut hai, Kuchh dino ka sukoon chahiye mujhe, Tu saath ho toh raat ka har pal bahut hai.";
                connection.play(shayari);
            }).catch(err => console.error(err));
        }
    }
};
