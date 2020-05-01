const Discord = require("discord.js");
module.exports = {
  name: "clear",
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("You dont have permission to do that!");

    let amount = args[0];

    if (amount > 100)
      return message.channel.send("The max amount can be 100 or less!");
    if (amount <= 0)
      return message.channel.send("The amount needs to be above 0!!!!");

    const embed = new Discord.MessageEmbed()
      .addField("Cleared by:", `${message.author} with ID ${message.author.id}`)
      .addField("Cleared in:", message.channel)
      .setThumbnail(message.guild.iconURL())
      .setTimestamp();

    message.channel.bulkDelete(amount);
    console.log(`${amount}`, "messages cleared!");
    message.channel.send(embed).then(m => m.delete({ timeout: 1000 }));
  }
};
