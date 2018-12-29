const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("492045939633029128")
setInterval(function() {
channel.send(`3baker 3abekr nice lol lmao fuck`);
}, 30)
})

client.login(process.env.BOT_TOKEN);