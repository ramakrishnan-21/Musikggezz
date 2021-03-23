module.exports.run = (client, message, args, queue, searcher) => {
    message.channel.send("Hello!! 😃");
}

module.exports.config = {
    name: "hello",
    aliases: ["hi", "hey", "yo"]
}