const config = require('./../config.json')
const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
const { rawListeners } = require('process')


 module.exports.run = (client, message, args) => {

    let roleEmbed = new Discord.MessageEmbed()
      .setColor(config.Color)
      .setTitle('Error ' + config.ErrorEmoji)
      .setDescription(`You must have the role: <@&${config.GenRole}>`)
   .setFooter(`Requested by ${message.author.tag} `)
      


    if(!message.member.roles.cache.has(config.GenRole)) return message.channel.send(roleEmbed)

    let wrongEmbed = new Discord.MessageEmbed()
      .setColor(config.Color)
      .setDescription(`${config.ErrorEmoji} **ERROR!** This command can only be used in <#${config.GenChannelID}> - ${message.author}`)
   .setFooter(`Requested by ${message.author.tag} `)
      

    if (message.channel.id != config.GenChannelID) return message.reply(wrongEmbed)
    let user = message.author;
    let timeout = config.GenCooldown;
    let author = db.get(`ae_${message.author.id}_${user.id}`);
    if (author !== null && timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));


      const cooldown = new Discord.MessageEmbed()
        .setTitle('Error ' + config.ErrorEmoji)
        .setDescription(`You are genning too fast. Wait ** ${time.minutes} m and ${time.seconds} s ** to able to gen again!`)
        .setColor(config.Color)
     .setFooter(`Requested by ${message.author.tag} `)
        

      return message.reply(cooldown)

    } else {      
      let type = new Discord.MessageEmbed()
        .setTitle("Error " + config.ErrorEmoji)
        .setDescription("Specify the name of the service you want to generate. \n\n Example: `" + config.prefix + "gen pornhub`")
        .setColor(config.Color)
     .setFooter(`Requested by ${message.author.tag} `)
        

      var fs = require("fs");
      if(!args[0]) return message.channel.send(type)
      const filePath = './alts' + "/" + args[0] + ".txt";
      fs.readFile(filePath, function (err, data) {
        if (!err) {
          data = data.toString();
          var position = data.toString().indexOf("\n");
          let firstLine = data.split("\n")[0];
          if (firstLine === "\n") first = "An error occurred while generating your account! Please report this issue in a ticket!"
          const rEmbed = new Discord.MessageEmbed()
            .setTitle(`Your **` + '`' + args + "`" + "** account has been sent to you in private message!")
         .setFooter(`Requested by ${message.author.tag} `)
            .setColor("#2cff00")
            

          const embed = new Discord.MessageEmbed()
            .setTitle(`Here is your **__` + args + `__** account from ${message.guild.name}`)
            .setDescription(` ` + firstLine)
            .setColor(config.Color)
            .setTimestamp()
         .setFooter(`Requested by ${message.author.tag} `)
            


          if (position != -1) {
            let amount = 1
            data = data.substr(position + 1);
            fs.writeFile(filePath, data, function (err) {

              db.set(`ae_${message.author.id}_${user.id}`, Date.now())

              message.author.send(embed).catch(err => {
                if (err) {
                  return message.channel.send(`${config.ErrorEmoji} | Your private messages are disabled, I cannot send you a message. (ignore the other messages.)`)
                }
              })
              message.channel.send(`${message.author}`)
              message.channel.send(rEmbed)
            })
          } else {
            const nostockEmbed = new Discord.MessageEmbed()
              .setTitle(`Error ${config.ErrorEmoji} | Out of stock`)
              .setDescription("There are no accounts for **" + args + "** Check the stock carefully!")
              .setColor(config.Color)
           .setFooter(`Requested by ${message.author.tag} `)
              

            message.reply(nostockEmbed);
          }
        } else {
          const accEmbed = new Discord.MessageEmbed()
            .setDescription("This category does not exist, check the stock!")
            .setColor(config.Color)
         .setFooter(`Requested by ${message.author.tag} `)
            


          message.reply(accEmbed);
        }
      })
    }
  }

module.exports.help = {
  name: "gen",
  category: "generate",
  cooldown: 300000,
  description: "Tu dois attendre 5 minutes après génération afin de regénérer!",
  aliases: ['get', 'generator'],
  usage: "SetLogs <Mention Channel>"
}
