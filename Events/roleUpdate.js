const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
const Client = require('..')

Client.on('roleUpdate', async(OLD_ROLE, NEW_ROLE) => {
	const ChannelId = db.get(`Log_roles_${OLD_ROLE.guild.id}`)
	if(!ChannelId) return;
  OLD_ROLE.guild.fetchAuditLogs().then(Logs => {
        let AuthorID = Logs.entries.first().executor.id;
        let AuthorTag = Logs.entries.first().executor.tag;
        let DisplayAvatarURL = Logs.entries.first().executor.displayAvatarURL()
  
    if(OLD_ROLE.name !== NEW_ROLE.name) {
        const Embed = new EmbedBuilder()
           .setColor('Random')
           .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
           .setDescription(`:family_mmb: Role has been Updated \`${OLD_ROLE.name}\`\n\n:tools: By: <@${AuthorID}>`)
           .addFields({ name: 'Old Name', value: `${OLD_ROLE.name}`, inline: true },
                      { name: 'New Name', value: `${NEW_ROLE.name}`, inline: true })
           .setFooter({ text: OLD_ROLE.guild.name, iconURL: OLD_ROLE.guild.iconURL({dynamic:true}) })
           .setTimestamp()
        Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
    } else if(OLD_ROLE.color !== NEW_ROLE.color) {
        const Embed = new EmbedBuilder()
           .setColor('Random')
           .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
           .setDescription(`:family_mmb: Role has been Updated \`${OLD_ROLE.name}\`\n\n:tools: By: <@${AuthorID}>`)
           .addFields({ name: 'Old Color', value: `${OLD_ROLE.color}`, inline: true },
                      { name: 'New Color', value: `${NEW_ROLE.color}`, inline: true })
           .setFooter({ text: OLD_ROLE.guild.name, iconURL: OLD_ROLE.guild.iconURL({dynamic:true}) })
           .setTimestamp()
        Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
    } else if(OLD_ROLE.permissions !== NEW_ROLE.permissions) {
        const Embed = new EmbedBuilder()
           .setColor('Random')
           .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
           .setDescription(`:family_mmb: Role has been Updated \`${OLD_ROLE.name}\`\n\n:tools: By: <@${AuthorID}>`)
           .addFields({ name: 'Old Permissions', value: `${OLD_ROLE.permissions.bitfield}`, inline: true },
                      { name: 'New Permissions', value: `${NEW_ROLE.permissions.bitfield}`, inline: true })
           .setFooter({ text: OLD_ROLE.guild.name, iconURL: OLD_ROLE.guild.iconURL({dynamic:true}) })
           .setTimestamp()
        Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
    }
  });
})