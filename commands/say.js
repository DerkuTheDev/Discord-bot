module.exports = {
  name: "say",

  run: async (bot, message, args) => {
    var ids = [
      "Your user id goes here",
    ];
    if (!ids.includes(message.author.id))
      return message.channel.send("You can't use this");

    let argsresult;
    let mChannel = message.mentions.channels.first();

    message.delete();
    if (mChannel) {
      argsresult = args.slice(1).join(" ");
      mChannel.send(argsresult);
    } else {
      argsresult = args.join(" ");
      message.channel.send(argsresult);
    }
  }
};
