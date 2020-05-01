const Discord = require("discord.js")
const { NovelCovid } = require("novelcovid")
const track = new NovelCovid();

module.exports = {
  name: "corona",
  aliases: ["covid", "covid19"],
  run: async (bot, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please give the name of country")
    }
    
    if(args.join(" ") === "all") {
      let corona = await track.all() //it will give global cases
      
      let embed = new Discord.MessageEmbed()
      .setTitle("Global Cases")
      .setColor("#ff2050")
      .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNUP8DbrBXNLL2i0mQ2r21PPCrEOKdXXYCYo8WmJyKVM5UQGkD&usqp=CAU')
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);
      
      return message.channel.send(embed)
      
      
      
    } else {
      let corona = await track.countries(args.join(" ")) //change it to countries
      
      let embed = new Discord.MessageEmbed()
      .setTitle(`${corona.country}`)
      .setColor("#ff2050")
      .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNUP8DbrBXNLL2i0mQ2r21PPCrEOKdXXYCYo8WmJyKVM5UQGkD&usqp=CAU')
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Active Cases", corona.active, true);
      
      return message.channel.send(embed)
      
      
    }
    
    
  }
}