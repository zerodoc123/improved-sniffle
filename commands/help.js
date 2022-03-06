const Discord = require('discord.js')
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Help')
    .setColor(bot.color)
    .setDescription('sus!help \nstock \nrestock <account name> <text file> \naddnewfile <File name>\naddalts <account name> <account(s)> \ngen <account name> \ntimeleft \nunstock <account name> \n\n')
    .setFooter('Bot Made By ZERODOC')
    .setTimestamp()
       message.channel.send(embed) 
    }
    
module.exports.help = {
    name: 'help',
    aliases: []
}
 
