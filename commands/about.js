const Discord = require("discord.js");
module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    const AUTHOR_ID = "752392209411866674";
    const about = `Hey there ${message.author.username}. I am ${client.user.tag} and <@${AUTHOR_ID}> developed me. I am one noob musical bot under development and you can use me to chill out.....If you are kingjames fan then please dont use my bot 😺 !.`;
    // MessageEmbed - to send styled and formatted messages
    // Discord feature available only for bots
    const emb = new Discord.MessageEmbed()
        .setColor("#ffba08")
        .setTitle("The Musikggez")
        .setURL("https://github.com/ramakrishnan-21")
        .setThumbnail(
            "https://icon-library.com/images/music-bot-icon/music-bot-icon-12.jpg"
        )
        .setDescription(about)
        .addField(
            "Note",
            `My commands should start with \`!\`.\nNow type \`!commands\``,
            true
        );
    // send the message
    message.channel.send(emb);
}    
module.exports.config = {
    name: "about",
    aliases: ["abt","intro"]
}