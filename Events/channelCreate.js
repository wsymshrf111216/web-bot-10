const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
const Client = require('..')

Client.on('channelCreate', async Channel => {
	const ChannelId = db.get(`Log_channel_${Channel.guild.id}`)
	if(!ChannelId) return;
  const Log = Channel.guild.channels.cache.find(Channel => Channel.id === ChannelId)
  if(!Log) return;
  
  Channel.guild.fetchAuditLogs().then(Logs => {
        let AuthorID = Logs.entries.first().executor.id;
        let AuthorTag = Logs.entries.first().executor.tag;
        let DisplayAvatarURL = Logs.entries.first().executor.displayAvatarURL()
    const Embed = new EmbedBuilder()
        .setColor('Random')
        .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
        .setDescription(`:house: Channel Created: **${Channel.name}**\n\n:tools: By: <@${AuthorID}>`)
        .setFooter({ text: Channel.guild.name, iconURL: Channel.guild.iconURL({dynamic:true}) })
        .setTimestamp()
        Log.send({ embeds: [Embed] })
  })
});