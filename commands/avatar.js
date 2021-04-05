const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;
  
   let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .addField(
        "Links",
        `[png](${Member.user.displayAvatarURL({
          format: "png",
          dynamic: true
        })}) | [jpg](${Member.user.displayAvatarURL({
          format: "jpg",
          dynamic: true
        })}) | [webp](${Member.user.displayAvatarURL({
          format: "webp",
          dynamic: true
        })})`
      )
      .setImage(Member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
