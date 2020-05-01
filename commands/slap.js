const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "slap",
  aliases: ["wack", "smack", "clout", "swat", "strike", "wallop"],
  run: async (bot, message, args) => {
    if (!message.mentions.users.first())
      return message.channel.send("Please mention a user to be slapped!");

    fetch("https://nekos.life/api/v2/img/slap")
      .then(res => res.json())
      .then(body => {
        if (!body)
          return message.channel.send("Whoops! I've broke, try again!");

        let embed = new Discord.MessageEmbed()
          .setAuthor(`${bot.user.username} Slap!`)
          .setTitle(
            `${bot.user.username} slapped ${
              message.mentions.users.first().username
            }. Owwie!`
          )
          .setImage(body.url)
          .setFooter(
            bot.user.username.toUpperCase(),
            bot.user.displayAvatarURL()
          );

        return message.channel.send(embed);
      });
  }
};