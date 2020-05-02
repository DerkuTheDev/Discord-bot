const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "meme",
  run: async (bot, message, args) => {
    message.delete();
    let msg = await message.channel
      .send("Generating meme!...")
      .then(m => m.delete({ timeout: 2000 }));

    fetch("https://apis.duncte123.me/meme")
      .then(res => res.json())
      .then(body => {
        if (!body) return message.channel.send("I've broke, try again!");

        let Embed = new Discord.MessageEmbed()
          .setAuthor(`${message.author.username} heres some MEMES!`)
          .setColor("#66ffff")
          .setTitle(body.data.title)
          .setImage(body.data.image)
          .setTimestamp()
          .setFooter(
            bot.user.username.toUpperCase(),
            bot.user.displayAvatarURL()
          );

        message.channel.send(Embed);
      });
  }
};
