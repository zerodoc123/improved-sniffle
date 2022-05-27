const Discord = require('discord.js')
const config = require('./../config.json')
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Help')
    .setColor(bot.color)
    .setDescription(config.prefix + 'help \nstock \nrestock <account name> <text file> \naddnewfile <File name>\naddalts <account name> <account(s)> \ngen <account name> \ntimeleft \nunstock <account name> \n\n')
    .setFooter('Bot Made By ' + config.customAuthor)
    .setTimestamp()
       message.channel.send(embed) 
    }
    
module.exports.help = {
    name: 'help',
    aliases: []
}
 
