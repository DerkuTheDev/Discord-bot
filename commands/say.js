module.exports = {
  name: "say",

  run: async (bot, message, args) => {
    var ids = [
      "669206927879962626",
      "422031808616595462",
      "682265055756025901",
      "586771311670329344",
      "300332269296680960"
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
