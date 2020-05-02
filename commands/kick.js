const Discord = require("discord.js");

module.exports = {
  name: "kick",
  run: async (bot, message, args) => {
    let kickChannel = message.guild.channels.cache.find(
      channel => channel.name === "log"
    );
    if (!kickChannel)
      return message.channel.send(
        "There is no channel called 'log', please create one and make sure the bot can send messages in it!"
      );

if (kUser.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "What are you doing, you cant kick that person!"
      );
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send("You dont have permission to do that!");
    let kUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );
    if (!kUser)
      return message.channel.send("I can't find that user, try again.");

    let args1 = message.content.slice(1).split(/ +/);
    let kReason = args1.slice(2).join(" ");

    if (!kReason) return message.channel.send("You need to specify a reason.");
    if (kReason > 32)
      return message.channel.send(
        "Sorry, the reason is to long. Keep it short, 32 characters."
      );

    let kickEmbed = new Discord.MessageEmbed()
      .setDescription("~KICK~")
      .setColor("#ff0000")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `${message.author} with Id ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

    message.channel.send(`${kUser} was kicked`);

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
  }
};
