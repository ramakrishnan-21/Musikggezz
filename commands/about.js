const Discord = require("discord.js");
module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    const about = `Hey there ${message.author.username}. I am ${client.user.tag} and <@${process.env.WhoLetTheDogsOut_id}> developed me. I am one noob musical bot under development and you can use me to chill out.....If you are kingjames fan then please dont use my bot 😺 !.`;
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
            `My commands should start with \`&\`.\nNow type \`!commands\``,
            true
        );
    
    message.channel.send(emb);
}    
module.exports.config = {
    name: "about",
    aliases: ["abt","intro"]
}
