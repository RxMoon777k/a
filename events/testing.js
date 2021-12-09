const Discord = require('discord.js');
const { Message, Client, DiscordAPIError, MessageEmbed } = require("discord.js")
const client = require('../index')
const config = require('../config')
const prefix = config.prefix

client.on("guildMemberAdd", async (member) => {
    if(member.guild.id === '918594009428021248') {
    const welcome = new Discord.MessageEmbed()
    .setTitle("Un usuario se ha unido!")
    .setDescription(`**Hey ${member} ! Bienvenid@ al servidor,  antes de tener acceso a los diferentes canales,  debes verificarte en el canal de <#857046341728731152>.** **Te recomiendo leer <#857046341728731150> para evitar problemas.** **Si tienes algún problema,  puedes abrir un ticket en <#857046342174113840>. Dicho todo esto, ¡Te esperamos en <#857046341728731154>!**`)
    .setFooter("Espero que disfrutes de tu estancia🖤")
    .setImage("https://i.postimg.cc/BnPwm4bQ/spider-monkey-3808553.jpg")
    .setColor("#000000")
    client.channels.cache.get("918594009641922607"). send({ embeds: [welcome]})
    }
  });