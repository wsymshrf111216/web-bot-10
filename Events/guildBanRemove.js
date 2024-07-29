const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
const Client = require('..')

Client.on('guildBanRemove', async Member => {
	const ChannelId = db.get(`Log_ban_${Member.guild.id}`)
	if(!ChannelId) return;
    let Log = Member.guild.channels.cache.find(Channel => Channel.id === ChannelId)
    if(!Log) return;
   Member.guild.fetchAuditLogs().then(Logs => {
        let AuthorID = Logs.entries.first().executor.id;
        let AuthorTag = Logs.entries.first().executor.tag;
        let DisplayAvatarURL = Logs.entries.first().executor.displayAvatarURL()
     
    const Embed = new EmbedBuilder()
       .setColor('Random')
       .setAuthor({ name: Member.user.tag, iconURL: Member.user.displayAvatarURL({ dynamic: true }) })
       .setThumbnail(Member.user.displayAvatarURL({ dynamic: true }))
       .setDescription(`**:airplane_arriving: ${Member.user} unbanned\n\nBy: <@${AuthorID}>**`)
       .setFooter({ text: Member.guild.name, iconURL: Member.guild.iconURL({dynamic:true}) })
       .setTimestamp()
    Log.send({ embeds: [Embed] })
   });
});