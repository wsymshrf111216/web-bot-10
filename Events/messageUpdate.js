const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
const Client = require('..')

Client.on('messageUpdate', async(OldMessage, NewMessage) => {
	const ChannelId = db.get(`Log_message_${OldMessage.guild.id}`)
	if(!ChannelId) return;
    let Log = OldMessage.guild.channels.cache.find(Channel => Channel.id === ChannelId)
    if(!Log) return;
    const Embed = new EmbedBuilder()
        .setColor('Random')
        .setAuthor({ name: OldMessage.author.tag, iconURL: OldMessage.author.displayAvatarURL({ dynamic: true }) })
        .setDescription(`:pencil2: **Message sent by ${OldMessage.author} edited in ${OldMessage.channel}**. [Jump to Message](${NewMessage.url})`)
        .addFields({ name: 'Old', value: `\`\`\`${OldMessage.content || 'Message Content is not Found!'}\`\`\`` }, { name: 'New', value: `\`\`\`${NewMessage.content || 'Message Content is not Found!'}\`\`\`` })
        .setFooter({ text: OldMessage.guild.name, iconURL: OldMessage.guild.iconURL({dynamic:true}) })
        .setTimestamp()
    Log.send({ embeds: [Embed] })
})