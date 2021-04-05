const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setTitle("Command List & Guide for the Bot")
      .setDescription("This Is My Command List, My Prefix Is **YOUR PREFIX HERE**") 
      .addField(":tools: **__Developer__**", "`Only Developer can use the Command`")
      .addField(":gift **__Giveaway__**","`Start`, `Reroll`, `End`")
      .addField(":joy: **__Fun__**", "`Avatar`, `Howgay`, `Dicksize`, `Randomnumber`, `Speed`, `Ascii`")
      .addField(":loudspeaker: **__Information__**", "`Stats`, `Invite`, `Ping`, `Userinfo`, `Serverinfo`")
      .addField(":hammer: **__Moderator__**", "`Clear`, `Slowmode`, `Kick`, `Ban`, `Mute`, `Welcome`, `Goodbye`")
      .addField(":musical_note: **__Music__** Soon", "`Play`,`Queue`, `Skip`, `Stop`, `Np`, `Playlist`, `Pause`, `Resume`")
      .addField(":bricks: **__Minecraft__** Soon", "`Mcskin`, `Mcserver`")
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send(help);

}

module.exports.help = {
  name: "help"
}
