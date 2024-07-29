const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
const Client = require('..')

Client.on('guildMemberAdd', async Member => {
const ChannelId = db.get(`Log_MemberAdd_${Role.guild.id}`)
	if(!ChannelId) return;
    const Log = Role.guild.channels.cache.find(Channel => Channel.id === ChannelId)
    if(!Log) return;
    const Embed = new EmbedBuilder()
       .setColor('Random')
       .setAuthor({ name: Member.user.tag, iconURL: Member.user.displayAvatarURL() })
       .setThumbnail(Member.user.displayAvatarURL())
       .setDescription(`${Member.user} Joined the Server.`)
       .addFields({ name: ':timer: Age of Account', value: `<t:${parseInt(Member.user.createdAt / 1000)}:f>` })
       .setFooter({ text: Member.guild.name, iconURL: Member.guild.iconURL({dynamic:true}) })
       .setTimestamp()
       Log.send({ embeds: [Embed] })


});