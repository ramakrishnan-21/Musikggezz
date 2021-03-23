module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
            return message.channel.send("There is no music playing!")
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("You need to join the voice chat first!")
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    serverQueue.vChannel.leave();
    queue.delete(message.guild.id);
    message.channel.send("Bye bye boomer");
    message.react("🖐️");
}

module.exports.config = {
    name: "stop",
    aliases: ["st", "dc", "exit", "leave"]
}