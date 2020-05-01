const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  files.forEach(f => {
    const file = require("./commands/" + f);
    if (!file.name) throw f + "does not export a name property!";

    bot.commands.set(file.name, file);
    if (file.aliases && Array.isArray(file.aliases))
      file.aliases.forEach(a => bot.aliases.set(a, file.name));

    console.log(`${f} Loaded!`);
  });
});

bot.on("ready", async () => {
  console.log(
    `${bot.user.username} is online on ${bot.guilds.cache.size} servers!`
  );


  let activNum = 0;

  setInterval(function() {
    if (activNum === 0) {
      bot.user.setActivity("d!corona all", { type: "PLAYING" });
      activNum = 1;
    } else if (activNum === 1) {
      bot.user.setActivity("| Prefix: d!", { type: "PLAYING" });
      activNum = 2;
    } else if (activNum === 2) {
      bot.user.setActivity(` ${bot.guilds.cache.size} servers!`, {
        type: "WATCHING"
      });
      activNum = 3;
    } else if (activNum === 3) {
      bot.user.setActivity("MHA", { type: "WATCHING" });
      activNum = 0;
    }
  }, 5 * 1000);
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  if (!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0].slice(prefix.length);
  let args = messageArray.slice(1);

  let command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));

  console.log(message.mentions.users.has(bot.user.id));
  if (!command) return;

  command.run(bot, message, args);
});

bot.on("error", err => {
  console.log(new Date("YYYY-MM-DD HH:mm:ss"));
  console.log(err);
});

bot.login(tokenfile.token);
