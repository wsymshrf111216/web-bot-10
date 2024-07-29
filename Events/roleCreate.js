const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
const Client = require('..')

Client.on('roleCreate', async Role => {
	const ChannelId = db.get(`Log_roles_${Role.guild.id}`)
	if(!ChannelId) return;
  Role.guild.fetchAuditLogs().then(Logs => {
        let AuthorID = Logs.entries.first().executor.id;
        let AuthorTag = Logs.entries.first().executor.tag;
        let DisplayAvatarURL = Logs.entries.first().executor.displayAvatarURL()
    
    const Embed = new EmbedBuilder()
        .setColor('Random')
        .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
        .setDescription(`:family_mmb: Role has been Created \`${Role.name}\`\n\n:tools: By: <@${AuthorID}>`)
        .setFooter({ text: Role.guild.name, iconURL: Role.guild.iconURL({dynamic:true}) })
        .setTimestamp()
    Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
   });
});