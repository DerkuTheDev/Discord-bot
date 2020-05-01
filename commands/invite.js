const Discord = require("discord.js")

module.exports = {
  name: "invite",
  run: async (bot, message, args) => {
    let inviteembed = new Discord.MessageEmbed()
      .setTitle("Invite me!")
      .setColor("#66ffff")
      .setURL(
        "https://discordapp.com/oauth2/authorize?client_id=705736530190270475&scope=bot&permissions=1916267615"
      )
      .setDescription(`The bot is on ${bot.guilds.cache.size} servers!`)

    return message.channel.send(inviteembed);
  }
};
