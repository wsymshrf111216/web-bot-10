const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
const Client = require('..')

Client.on('voiceStateUpdate', async(OldVoice, NewVoice) => {
  if (OldVoice.author.bot) return;
	const ChannelId = db.get(`Log_voice_${OldVoice.guild.id}`)
	if(!ChannelId) return;
	
    OldVoice.guild.fetchAuditLogs().then(Log => {
        let AuthorID = Log.entries.first().executor.id;
        let AuthorTag = Log.entries.first().executor.tag;
        let DisplayAvatarURL = Log.entries.first().executor.displayAvatarURL()

        if(OldVoice.serverMute === false && NewVoice.serverMute === true) {
            const Embed = new EmbedBuilder()
               .setColor('Random')
               .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
               .setDescription(`**Voice State of <@${AuthorID}> has been updated.**`)
               .addFields({ name: ':microphone2:  Server Mute', value: '**True**' })
               .setFooter({ text: OldVoice.guild.name, iconURL: OldVoice.guild.iconURL({dynamic:true}) })
               .setTimestamp()
            Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
        } else if(OldVoice.serverMute === true && NewVoice.serverMute === false) {
            const Embed = new EmbedBuilder()
               .setColor('Random')
               .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
               .setDescription(`**Voice State of <@${AuthorID}> has been updated.**`)
               .addFields({ name: ':microphone2:  Server Mute', value: '**False**' })
               .setFooter({ text: OldVoice.guild.name, iconURL: OldVoice.guild.iconURL({dynamic:true}) })
               .setTimestamp()
            Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
        } else if(OldVoice.serverDeaf === false && NewVoice.serverDeaf === true) {
            const Embed = new EmbedBuilder()
               .setColor('Random')
               .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
               .setDescription(`**Voice State of <@${AuthorID}> has been updated.**`)
               .addFields({ name: ':microphone2:  Server Deafen', value: '**True**' })
               .setFooter({ text: OldVoice.guild.name, iconURL: OldVoice.guild.iconURL({dynamic:true}) })
               .setTimestamp()
            Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
        } else if(OldVoice.serverDeaf === true && NewVoice.serverDeaf === false) {
            const Embed = new EmbedBuilder()
               .setColor('Random')
               .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
               .setDescription(`**Voice State of <@${AuthorID}> has been updated.**`)
               .addFields({ name: ':microphone2:  Server Deafen', value: '**False**' })
               .setFooter({ text: OldVoice.guild.name, iconURL: OldVoice.guild.iconURL({dynamic:true}) })
               .setTimestamp()
            Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
        } else if(!OldVoice.channel && NewVoice.channel) {
            const Embed = new EmbedBuilder()
               .setColor('Random')
               .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
               .setDescription(`<@${AuthorID}> Joined Voice Channel \`${NewVoice.channel.name}\``)
               .setFooter({ text: OldVoice.guild.name, iconURL: OldVoice.guild.iconURL({dynamic:true}) })
               .setTimestamp()
            Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
        } else if(OldVoice.channel && !NewVoice.channel) {
            const Embed = new EmbedBuilder()
               .setColor('Random')
               .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
               .setDescription(`<@${AuthorID}> Left Voice Channel \`${OldVoice.channel.name}\``)
               .setFooter({ text: OldVoice.guild.name, iconURL: OldVoice.guild.iconURL({dynamic:true}) })
               .setTimestamp()
            Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
        } else if(!OldVoice.streaming && NewVoice.streaming) {
            const Embed = new EmbedBuilder()
               .setColor('Random')
               .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
               .setDescription(`<@${AuthorID}> has been Started Stream in \`${OldVoice.channel.name}\``)
               .setFooter({ text: OldVoice.guild.name, iconURL: OldVoice.guild.iconURL({dynamic:true}) })
               .setTimestamp()
            Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
        } else if(OldVoice.streaming && !NewVoice.streaming) {
            const Embed = new EmbedBuilder()
               .setColor('Random')
               .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
               .setDescription(`<@${AuthorID}> has been Stoped Stream in \`${OldVoice.channel.name}\``)
               .setFooter({ text: OldVoice.guild.name, iconURL: OldVoice.guild.iconURL({dynamic:true}) })
               .setTimestamp()
            Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
        } else if(OldVoice.channel && NewVoice.channel && OldVoice.channel.id !== NewVoice.channel.id) {
            const Embed = new EmbedBuilder()
               .setColor('Random')
               .setAuthor({ name: AuthorTag, iconURL: DisplayAvatarURL })
               .setDescription(`**<@${AuthorID}> Switched Voice Channel** \`${OldVoice.channel.name}\` **=>** \`${NewVoice.channel.name}\`.`)
               .setFooter({ text: OldVoice.guild.name, iconURL: OldVoice.guild.iconURL({dynamic:true}) })
               .setTimestamp()
            Client.channels.cache.get(ChannelId).send({ embeds: [Embed] })
        }
    })
})