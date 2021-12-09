const client = require("../index");

client.on("guildMemberAdd", (member) => {
    const miembros = member.guild.channels.cache.get("918594009641922603") // Importamos la ID del 1er Canal
    const bots = member.guild.channels.cache.get("918594009641922604") // Importamos la ID del 2do Canal
    const usuarios = member.guild.channels.cache.get("918594009641922605") // Importamos la ID del 3er Canal
  
    let miembro = member.guild.memberCount // Definimos la cantidad de miembros
    let bot = member.guild.members.cache.filter(m => m.user.bot).size // Definimos la cantidad de BOT's
    let user = miembro - bot // Definimos la cantidad de usuarios no bot's
  
    miembros.setName(`ᴀʟʟ ᴍᴇᴍʙᴇʀꜱ: ${miembro}`) // Usamos el setName para los miembros
    usuarios.setName(`ᴍᴇᴍʙᴇʀꜱ: ${user}/100`) // Usamos el setName para los usuarios no bot's
    bots.setName(`ʙᴏᴛꜱ: ${bot}`) // Usamos el SetName para los bots
  
  })