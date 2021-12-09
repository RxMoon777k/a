const { Message, Client } = require("discord.js");
const Discord = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warn')


module.exports = {
    name: "warns",
    aliases: ['avisos'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        if(!message.member.permissions.has("KICK_MEMBER")) {
            const embed = new Discord.MessageEmbed()
            .setTitle("¡Que haces!")
        .setDescription("¡No tienes suficientes permisos!")
        .setColor("#FF0000")
        .setFooter("Contacta con un administrador para obtener este permiso.")
        .setThumbnail("https://i.ibb.co/SmvJh3v/logodiscord.png")
    
            return message.reply({ embeds: [embed]})
        };

        let persona = message.mentions.users.first()
    
    const errorddd = new Discord.MessageEmbed()
    .setTitle("Error!")
    .setDescription("\n**¡Debes mencionar a alguien!**")
    .setColor("#FF0000")
    .setThumbnail("https://i.ibb.co/SmvJh3v/logodiscord.png")
    
    if(!persona) return message.channel.send({ embeds: [errorddd]})

    let cantidad = await warns.obtener(`${message.guild.id}.${persona.id}`)

if(!warns.tiene(`${message.guild.id}.${persona.id}`)){
    
    const nowarns = Discord.MessageEmbed()
    .setTitle("Wow!")
    .setDescription("**¡Esa persona no tiene warns!**")
    .setColor("#8CFF52")
    .setThumbnail("https://i.ibb.co/SmvJh3v/logodiscord.png")

    message.channel.send({ embeds: [nowarns]})
    return;
}

const warnssss = new Discord.MessageEmbed()
.setTitle("Warns!")
.setDescription(`${persona} tiene **${cantidad}** warns!`)
.setColor("RANDOM")
.setThumbnail("https://i.ibb.co/SmvJh3v/logodiscord.png")

message.channel.send({ embeds: [warnssss]})
        
    },
};
