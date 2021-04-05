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

    let Result = Math.floor(Math.random() * 101);

    let embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle(`Ciba gay Machine`)
      .setDescription(`${Member.user.username} Is __${Result}%__ Gay 🏳️‍🌈`)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`)

    message.channel.send(embed);

    //End
  }
