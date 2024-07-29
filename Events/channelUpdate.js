const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
const Client = require('..')

Client.on('channelUpdate', async(OLD_CHANNEL, NEW_CHANNEL) => {
	const ChannelId = db.get(`Log_channel_${OLD_CHANNEL.guild.id}`)
	if(!ChannelId) return;

  OLD_CHANNEL.guild.fetchAuditLogs().then(Logs => {
        let AuthorID = Logs.entries.first().executor.id;
        let AuthorTag = Logs.entries.first().executor.tag;
        let DisplayAvatarURL = Logs.entries.first().executor.displayAvatarURL()
    if(OLD_CHANNEL.name !== NEW_CHANNEL.name) {
        const Embed = new EmbedBuilder()
           .setColor('Random')
           .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
           .setDescription(`:house: Channel Updated: \`${OLD_CHANNEL.name}\`\n\n:tools: By: <@${AuthorID}>`)
           .addFields(
             { name: 'Old Name', value: `${OLD_CHANNEL.name}`, inline: true },
             { name: 'New Name', value: `${NEW_CHANNEL.name}`, inline: true },                                       )
           .setFooter({ text: OLD_CHANNEL.guild.name, iconURL: OLD_CHANNEL.guild.iconURL({dynamic:true}) })
           .setTimestamp()
        Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
}});
})