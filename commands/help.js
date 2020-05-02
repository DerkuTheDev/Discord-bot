const Discord = require("discord.js");
module.exports = {
  name: "help",
  run: async (bot, message, args) => {
    let command = message.content.toLowerCase().split(" ")[0];

    const helpembed = new Discord.MessageEmbed().setColor("#7289DA")
      .setDescription(`
__**Commands List**__
> \`corona\`, **\`invite\`**
> \`oof\`, **\`slap\`**
> \`warn\`, \`clear [amount]\`
> \`meme\`, \` \``);
    message.channel.send(helpembed)}}};
