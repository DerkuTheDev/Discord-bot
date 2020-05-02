const Discord = require("discord.js")

module.exports =  {   
        name: "pp",
       aliases: ["penis", "dick", "cock"],

  run: async (bot, message, args) => {

    let random = (Math.floor(Math.random() * Math.floor(1000)));
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send("Bruh Mention a user! Dumb Dumb")

    if(user.user.id == 705736530190270475)  message.reply(`${user} has a robot inch pp!`)
    
      else {
        if(user) return message.reply(`${user} has a ${random} inch pp!`);

      }
    }
}
