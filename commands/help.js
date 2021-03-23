const Discord = require("discord.js");
module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
const emb = new Discord.MessageEmbed()
.setColor("#06d6a0")
.setTitle("List of my Commands")
.setDescription(
    "Note that only the first word of the command is important, the rest of the command is your query and what you wish.\n"
)
.addFields(
    { name: "Play a song", value: "`&play <song name>`" },
    { name: "Pause a song", value: "`&pause`" },
    { name: "Check bot ping", value: "`&ping`" },
    { name: "List of songs", value: "`&queue`" },
    { name: "Resume a song", value: "`&resume`" },
    { name: "Greeting message", value: "`&hello`" },
    { name: "Skip a song", value: "`&skip`" },
    { name: "Disconnect", value: "`&dc`" },
    { name: "Loop a song/queue again", value: "`&loop <one/full/off>`" },
    { name: "About me", value: "`&about`" },
    
    
);
message.channel.send(emb);
}

module.exports.config = {
    name: "help",
    aliases: ["commands", "hlp"]
}
