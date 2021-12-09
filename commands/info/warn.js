const { Message, Client } = require("discord.js");
const Discord = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warn')

module.exports = {
    name: "warn",
    aliases: ['avisar'],
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
    
    var motivo = args.slice(1).join(" ")
    if(!motivo){
       motivo = 'No especificado'
    }
    
    if(!warns.tiene(`${message.guild.id}.${persona.id}`)) {
    warns.establecer(`${message.guild.id}.${persona.id}`, 0)
    }
    
    warns.sumar(`${message.guild.id}.${persona.id}`, 1)
    
    
    const avisoo = new Discord.MessageEmbed()
    .setTitle("Se avisó correctamente.")
    .setDescription(`**${message.author.tag}** avisó a **${persona.tag}** por **${motivo}**`)
    .setColor("#8CFF52")
    .setFooter("Ese ya no tiene ganas ni de volver a intentarlo.")
    .setThumbnail("https://i.ibb.co/SmvJh3v/logodiscord.png")
    
    message.channel.send({ embeds: [avisoo]})
    
    
    const sss = new Discord.MessageEmbed()
    .setTitle("Mala suerte...")
    .setDescription(`Te han **AVISADO** en el servidor**${message.guild.name}**por **${motivo}**.\n\nRecuerda que con 3 warns en el servidor tendrás 1 aviso, si llegas a 3 avisos se te dará ban en el servidor.`)
    .setColor("#FF0000")
    .setFooter("Te recomiendo leer el apartado de normas para no recibir mas avisos.")
    .setThumbnail("https://i.ibb.co/XD9CLqH/ng-2.png")
    
    persona.send({ embeds: [sss]})
        
    },
};
