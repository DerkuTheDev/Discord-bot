const Discord = require("discord.js");

module.exports = {
  name: "warn",
  run: async (bot, message, args) => {
    message.delete();
    let logChannel = message.guild.channels.cache.find(
      channel => channel.name === "log"
    );
    if (!logChannel)
      return message.channel.send(
        "There is no channel called 'log', please create one and make sure the bot can send messages in it!"
      );
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "You don't have the permissions to use this command!"
      );
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "I don't have the permissions to run this command!"
      );

    let reason = args.slice(1).join(" ");
    if (!reason) return message.channel.send("Please specify a reason!");

    let warnMember =
      message.mentions.users.first() || message.guild.members.get(args[0]);
    if (!warnMember)
      return message.channel.send("Please specify the user you want to warn!");

    warnMember.send(`You have been warned for ${reason}!`);

    let embed = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name} Warning.`)
      .setColor("#ff0000")
      .setTimestamp()
      .addField("User warned:", `${warnMember.username}`, true)
      .addField(
        "Warned by:",
        `${message.author.username}#${message.author.discriminator}`,
        true
      )
      .addField("Reason:", reason, true)
      .addField("Date:", message.createdAt.toLocaleString(), true)
      .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL());
    logChannel.send(embed);
    console.log(
      "Warned:",
      `${warnMember.username}#${warnMember.discriminator}`
    );
    console.log(
      "Warned by:",
      `${message.author.username}#${message.author.discriminator}`
    );
    console.log("Reason:", reason);
  }
};
