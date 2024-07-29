const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
const Client = require('..')

Client.on('guildUpdate', async(OldGuild, NewGuild) => {
	const ChannelId = db.get(`Log_MemberAdd_${OldGuild.id}`)
	if(!ChannelId) return;
    const Log = OldGuild.channels.cache.find(Channel => Channel.id === ChannelId)
    if(!Log) return;

    OldGuild.fetchAuditLogs().then((Log) => {
        let AuthorID = Log.entries.first().executor.id;
        let DisplayAvatarURL = Log.entries.first().executor.displayAvatarURL()
        
        if(OldGuild.afkChannel !== NewGuild.afkChannel) {
            const Embed = new EmbedBuilder()
               .setColor('Random')
               .setAuthor({ name: OldGuild.name, iconURL: OldGuild.iconURL() })
               .setDescription(`AFK has been Changed to ${NewGuild.afkChannel}`)
               .setFooter({ text: OldGuild.guild.name, iconURL: OldGuild.guild.iconURL({dynamic:true}) })
               .setTimestamp()
            Log.send({ embeds: [Embed] })
        }
    })
});