const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
const Client = require('..')

Client.on('messageDelete', async Message => {
	const ChannelId = db.fetch(`Log_message_${Message.guild.id}`)
	if(!ChannelId) return;
    let Log = Message.guild.channels.cache.find(Channel => Channel.id === ChannelId)
    if(!Log) return;
  
    const Embed = new EmbedBuilder()
      .setColor('Random')
      .setAuthor({ name: Message.author.tag, iconURL: Message.author.displayAvatarURL({ dynamic: true }) })
      .setDescription(`**Message sent by ${Message.author} deleted in ${Message.channel}**\n\n:wastebasket: Message Deleted: ${Message.content}`)
      .setFooter({ text: Message.guild.name, iconURL: Message.guild.iconURL({dynamic:true}) })
      .setTimestamp()
    Log.send({ embeds: [Embed] })
});