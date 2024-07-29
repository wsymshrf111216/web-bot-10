const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
const Client = require('..')

Client.on('guildMemberUpdate', async(OldMember, NewMember) => {
	const ChannelId = db.get(`Log_MemberAdd_${OldMember.guild.id}`)
	if(!ChannelId) return;
    OldMember.guild.fetchAuditLogs().then((Log) => {
        let AuthorID = Log.entries.first().executor.id;
        let DisplayAvatarURL = Log.entries.first().executor.displayAvatarURL()
        let AuthorTag = Log.entries.first().executor.tag;

        if(OldMember.roles.size < NewMember.roles.size) {
            let Role = NewMember.roles.cache.filter(ROLE => !OldMember.roles.cache.has(ROLE.id)).first()
            let Embed = new EmbedBuilder()
               .setColor('Random')
               .setAuthor({ name: OldMember.user.tag, iconURL: OldMember.user.displayAvatarURL() })
               .setThumbnail(OldMember.user.displayAvatarURL())
               .setDescription(`**:writing_hand: ${OldMember.user} has been updated.**`)
               .addFields({ name: 'Roles:', value: `:white_check_mark: ${Role.name}` })
               .setFooter({ text: OldMember.guild.name, iconURL: 
               OldMember.guild.iconURL({dynamic:true}) })
               .setTimestamp()
            Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
        } else if(OldMember.roles.size > NewMember.roles.size) {
            let Role = NewMember.roles.cache.filter(ROLE => !OldMember.roles.cache.has(ROLE.id)).first()
            let Embed = new EmbedBuilder()
               .setColor('Random')
               .setAuthor({ name: OldMember.user.tag, iconURL: OldMember.user.displayAvatarURL() })
               .setThumbnail(OldMember.user.displayAvatarURL())
               .setDescription(`**:writing_hand: ${OldMember.user} has been updated.**`)
               .addFields({ name: 'Roles:', value: `:no_entry: ${Role.name}` })
               .setFooter({ text: OldMember.guild.name, iconURL: 
               OldMember.guild.iconURL({dynamic:true}) })
               .setTimestamp()
            Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
        } else if(OldMember.guild.ownerId !== NewMember.guild.ownerId) {
            let Embed = new EmbedBuilder()
               .setColor('Random')
               .setAuthor({ name: NewMember.user.tag, iconURL: NewMember.user.displayAvatarURL() })
               .setThumbnail(NewMember.user.displayAvatarURL())
               .setDescription(`**:writing_hand: ${OldMember.user} has been updated.**\n\n:crown: Owner Transferred from <@${OldMember.guild.ownerId}> to <@${NewMember.guild.ownerId}>`)
               .setFooter({ text: OldMember.guild.name, iconURL: 
               OldMember.guild.iconURL({dynamic:true}) })
               .setTimestamp()
            Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
        }
    })
})