const { SlashCommandBuilder, Client, ChatInputCommandInteraction, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()

    .setName('server')
    .setDescription('Server Information & Avatar & Banner & Roles')
    .addSubcommand((Option) => Option.setName('avatar').setDescription('Display the Avatar of the Server'))
    .addSubcommand((Option) => Option.setName('info') .setDescription('Display the Informations of the Server'))
    .addSubcommand((Option) => Option.setName('banner') .setDescription('Display the Banner of the Server')),

    /**
     * @param { Client } Client
     * @param { ChatInputCommandInteraction } Interaction
     */

     async execute(Interaction, Client) {
        const Subcommand = await Interaction.options.getSubcommand()
        switch(Subcommand) {
            case 'avatar' : {
                const Embed = new EmbedBuilder()
                    .setColor('Random')
                    .setImage(Interaction.guild.iconURL({ size: 4096 }))
                    .setFooter({ text: `Requested by ${Interaction.user.tag}`, iconURL: Interaction.user.displayAvatarURL() })
                Interaction.reply({ embeds: [Embed], components: [new ActionRowBuilder() .addComponents(new ButtonBuilder() .setStyle(ButtonStyle.Link) .setLabel('Avatar URL') .setURL(Interaction.guild.iconURL({ size: 4096 })))] })
            }
            break;
            case 'info' : {
                const members = Interaction.guild.members.cache;
                const Channels = Interaction.guild.channels.cache;
                const Emojis = Interaction.guild.emojis.cache.size;
                const BoostCount = Interaction.guild.premiumSubscriptionCount;
                const Roles = Interaction.guild.roles.cache.size;
                const GuildEmojis = Interaction.guild.emojis.cache.map((Emoji) => Emoji).slice(0, 15).join(' ')
                const Embed = new EmbedBuilder()
                    .setAuthor({ name: Interaction.guild.name, iconURL: Interaction.guild.iconURL() })
                    .setThumbnail(Interaction.guild.iconURL())
                    .setColor('Random')
                    .addFields({ name: '🆔 Server ID', value: `${Interaction.guild.id}`, inline: true })
                    .addFields({ name: '📆 Created On', value: `**<t:${parseInt(Interaction.guild.createdAt / 1000)}:R>**`, inline: true })
                    .addFields({ name: '👑 Server Owner', value: `<@${Interaction.guild.ownerId}>`, inline: true })
                    .addFields({ name: `👥 Members (${Interaction.guild.memberCount}):`, value: `**${members.filter(member => member.presence?.status === 'online').size + members.filter(member => member.presence?.status === 'idle').size + members.filter(member => member.presence?.status === 'dnd').size}** Online \n**${members.filter(member => !['online', 'idle', 'dnd'].includes(member.presence?.status)).size}** Offline\n**${members.filter(member => member.user.bot).size}** Bot`, inline: true },)
                    .addFields({ name: `💬 Channels (${Channels.size})`, value: `**${Channels.filter((Channel) => Channel.type === ChannelType.GuildText).size}** Text | **${Channels.filter((Channel) => Channel.type === ChannelType.GuildVoice).size}** Voice\n**${Channels.filter((Channel) => Channel.type === ChannelType.GuildCategory).size}** Categories`, inline: true })
                    .addFields({ name: '🌍 Others', value: `Verification Level: **${Interaction.guild.verificationLevel}**\nBoosts: **${BoostCount}**\nRoles: **${Roles}**`, inline: true })
                 .addFields({ name: `🛡️ Emojis (${Emojis})`, value: `${GuildEmojis}` })
                Interaction.reply({ embeds: [Embed] })
            }
            break;
            case 'banner' : {

                let Banner = false;
                await Interaction.guild.fetch().then(async Guild => {
                    if(Guild.banner) {
                        Banner = Guild.bannerURL({ size: 1024 })
                    }
                })

                if(Banner === false) return Interaction.reply({ content: `The Server is don't Make Banner`, ephemeral: true })

                const Embed = new EmbedBuilder()
                    .setColor('Random')
                    .setImage(Interaction.guild.bannerURL({ size: 1024 }))
                    .setFooter({ text: `Requested by ${Interaction.user.tag}`, iconURL: Interaction.user.displayAvatarURL() })
                const Row = new ActionRowBuilder()
                    .addComponents(new ButtonBuilder() .setStyle(ButtonStyle.Link) .setLabel('Avatar URL') .setURL(Interaction.guild.bannerURL({ size: 1024 })))
                Interaction.reply({ embeds: [Embed], components: [Row] })
            }
        }
    }
}