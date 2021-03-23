module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
        return message.channel.send("There is no music currently playing!");
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("You are not in the voice channel!")

    switch(args[0].toLowerCase()){
        case 'all':
            serverQueue.loopall = !serverQueue.loopall;
            serverQueue.loopone = false;

            if(serverQueue.loopall === true)
                message.channel.send("Loop all has been turned on!");
            else
                message.channel.send("Loop all has been truned off!");

        break;
    case 'one':
        serverQueue.loopone = !serverQueue.loopone;
        serverQueue.loopall = false;

        if(serverQueue.loopone === true)
            message.channel.send("Loop one has been turned on!");
        else
            message.channel.send("Loop one has been truned off!");
        break;
    case 'off':
            serverQueue.loopall = false;
            serverQueue.loopone = false;

            message.channel.send("Loop has been turned off!");
        break;
    default:
        message.channel.send("Please specify what loop you want. !loop <one/all/off>"); 
    }
}

module.exports.config = {
    name: "loop",
    aliases: ["l", "lp"]
}