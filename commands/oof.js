const Discord = require("discord.js");

module.exports = {
  name: "oof",
  run: async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
      .setDescription("Big oof!")
      .setColor("#66ffff");
    message.delete();

    return message.channel.send(embed);
  }
};
