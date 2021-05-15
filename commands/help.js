const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setTitle("Command List & Guide for the Bot")
      .setDescription("This Is My Command List, My Prefix Is **YOUR PREFIX HERE**") 
      .addField("**(:tools:)・__Developer__**", "`This is Only Available for Bot Owner")
      .addField("**(:gift)・__Giveaway__**","`Type cb.giveaway")
      .addField("**(:joy:)・__Fun__**", "`Type cb.fun`")
      .addField("**(:loudspeaker:)・__Information__**", "`Type cb.information`")
      .addField("**(:hammer:)・__Moderator__**", "`Type cb.moderation`")
      .addField("**(:money:)・__Economy__ [`Soon`]**", "`Type cb.economy`"
      .addField("**(:musical_note:)・__Music__ [`Soon`]**", "`Type cb.music`")
      .addField("**(:bricks:) __Minecraft__ [`Soon`]**", "`Type cb.minecraft")
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send(help);

}

module.exports.help = {
  name: "help"
}
