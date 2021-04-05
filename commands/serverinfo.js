const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;   


    const guild = message.guild;
    const Emojis = guild.emojis.cache.size || "No Emoji!";
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;

    const embed = new Discord.MessageEmbed()
      .setTitle(guild.name + " Information!")
      .setColor('RED')
      .setThumbnail(guild.iconURL())
      .addField(`Name`, guild.name, true)
      .addField(`ID`, `${guild.id}`, true)
      .addField(`Owner`, `${guild.owner.user.tag}`, true)
      .addField(`Roles Count`, Roles, true)
      .addField(`Members Count`, Members, true)
      .addField(`Humans Count`, Humans, true)
      .addField(`Bots Count`, Bots, true)
      .addField(`Server Created At`, guild.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

}
